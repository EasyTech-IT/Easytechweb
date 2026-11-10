(() => {
  const key = "easytech-hero-cta-experiment-v1";
  const experiment = "hero_cta_v1";
  const hero = document.getElementById("initial-home-hero");
  const button = hero?.querySelector(".ehx-btn-p");
  const labels = { A: "Kostenloses Erstgespräch", B: "Anliegen besprechen" };

  function readVariant() {
    try {
      const variant = sessionStorage.getItem(key);
      return variant === "A" || variant === "B" ? variant : null;
    } catch (error) {
      console.error("A/B-Test: Sitzungsspeicher nicht verfügbar.", error);
      return null;
    }
  }

  function update(event) {
    const granted = (event?.detail?.state || window.__easytechAnalyticsState) === "granted";
    if (!granted) {
      if (button) button.textContent = labels.A;
      try {
        sessionStorage.removeItem(key);
      } catch (error) {
        console.error("A/B-Test: Sitzungsspeicher konnte nicht gelöscht werden.", error);
      }
      return;
    }
    if (!button || hero.hidden || window.location.pathname !== "/") return;
    let variant = readVariant();
    if (!variant) {
      variant = Math.random() < 0.5 ? "A" : "B";
      try {
        sessionStorage.setItem(key, variant);
      } catch (error) {
        console.error("A/B-Test: Variante konnte nicht gespeichert werden.", error);
        return;
      }
      window.gtag("event", "hero_experiment_exposure", { experiment_id: experiment, variant });
    }
    button.textContent = labels[variant];
  }

  function track(eventName) {
    if (window.__easytechAnalyticsState !== "granted") return;
    const variant = readVariant();
    if (variant) window.gtag("event", eventName, { experiment_id: experiment, variant });
  }

  window.addEventListener("easytech-analytics-consent", update);
  window.addEventListener("easytech-contact-submitted", () => track("hero_experiment_form_success"));
  document.addEventListener("click", event => {
    if (event.target instanceof Element && event.target.closest('a[href^="https://wa.me/"]')) {
      track("hero_experiment_whatsapp_click");
    }
  });
  if (button) {
    button.addEventListener("click", () => track("hero_experiment_click"));
    new MutationObserver(update).observe(hero, { attributes: true, attributeFilter: ["hidden"] });
  }
  update();
})();
