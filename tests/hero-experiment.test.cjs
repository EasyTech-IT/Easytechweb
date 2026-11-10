const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { runInNewContext } = require("node:vm");
const test = require("node:test");

const source = readFileSync("js\\hero-experiment.js", "utf8");

function setup(random = 0.8) {
  const listeners = {};
  const documentListeners = {};
  const buttonListeners = {};
  const data = new Map();
  const events = [];
  const button = {
    textContent: "Kostenloses Erstgespräch",
    addEventListener: (name, handler) => { buttonListeners[name] = handler; },
  };
  const hero = { hidden: false, querySelector: () => button };
  const window = {
    __easytechAnalyticsState: "denied",
    location: { pathname: "/" },
    addEventListener: (name, handler) => { listeners[name] = handler; },
    gtag: (...args) => events.push(args),
  };
  const sessionStorage = {
    getItem: key => data.get(key) || null,
    setItem: (key, value) => data.set(key, value),
    removeItem: key => data.delete(key),
  };
  class MutationObserver {
    constructor(callback) { this.callback = callback; }
    observe() {}
  }
  runInNewContext(source, {
    window, sessionStorage, MutationObserver, console,
    document: {
      getElementById: () => hero,
      addEventListener: (name, handler) => { documentListeners[name] = handler; },
    },
    Element: class Element {},
    Math: { random: () => random },
  });
  return { window, listeners, documentListeners, buttonListeners, button, data, events, hero };
}

test("experiment requires consent, tracks only identifiers, and clears on withdrawal", () => {
  const s = setup();
  s.buttonListeners.click();
  s.listeners["easytech-contact-submitted"]();
  assert.equal(s.data.size, 0);
  assert.equal(s.events.length, 0);
  assert.equal(s.button.textContent, "Kostenloses Erstgespräch");

  s.window.__easytechAnalyticsState = "granted";
  s.listeners["easytech-analytics-consent"]();
  assert.equal(s.button.textContent, "Anliegen besprechen");
  assert.equal(s.events.length, 1);
  assert.equal(s.events[0][1], "hero_experiment_exposure");
  assert.equal(s.events[0][2].variant, "B");
  assert.equal(s.events[0][2].experiment_id, "hero_cta_v1");
  assert.deepEqual(Object.keys(s.events[0][2]).sort(), ["experiment_id", "variant"]);
  s.listeners["easytech-analytics-consent"]();
  assert.equal(s.events.length, 1);
  s.buttonListeners.click();
  s.listeners["easytech-contact-submitted"]();
  assert.deepEqual(s.events.map(event => event[1]), [
    "hero_experiment_exposure", "hero_experiment_click", "hero_experiment_form_success",
  ]);
  s.window.__easytechAnalyticsState = "denied";
  s.listeners["easytech-analytics-consent"]();
  assert.equal(s.data.size, 0);
  assert.equal(s.button.textContent, "Kostenloses Erstgespräch");
  s.listeners["easytech-contact-submitted"]();
  assert.equal(s.events.length, 3);
});

test("control variant is assigned without duplicate exposure", () => {
  const s = setup(0.1);
  s.window.__easytechAnalyticsState = "granted";
  s.listeners["easytech-analytics-consent"]();
  assert.equal(s.button.textContent, "Kostenloses Erstgespräch");
  assert.equal(s.events[0][2].variant, "A");
  s.listeners["easytech-analytics-consent"]();
  assert.equal(s.events.length, 1);
});
