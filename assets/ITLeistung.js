import { j as h, r as React } from "./react-vendor-DAatkCok.js";
import { u as useLocation } from "./react-router-D9cGlsqA.js";
import { whatsappUrl } from "./whatsapp-contact.js?v=2";

if (!document.querySelector('link[href="/css/it-startseite.css?v=3"]')) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = "/css/it-startseite.css?v=3";
  document.head.append(stylesheet);
}

function setMetadata(page) {
  const url = `https://easytechit.de/it/${page.slug}/`;
  document.title = page.title;
  for (const [selector, value] of [
    ['meta[name="description"]', page.description],
    ['meta[property="og:title"]', page.title],
    ['meta[property="og:description"]', page.description],
    ['meta[property="og:url"]', url],
    ['meta[name="twitter:title"]', page.title],
    ['meta[name="twitter:description"]', page.description],
  ]) {
    const element = document.head.querySelector(selector);
    if (element) element.content = value;
  }
  const canonical = document.head.querySelector('link[rel="canonical"]');
  if (canonical) canonical.href = url;
  document.dispatchEvent(new CustomEvent("easytech-service-metadata", {
    detail: { path: `/it/${page.slug}`, title: page.title, description: page.description },
  }));
}

export function ITLeistung() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/\/+$/, "").split("/").pop();
  const [state, setState] = React.useState({ pages: null, error: false });

  React.useEffect(() => {
    const controller = new AbortController();
    fetch("/assets/it-leistungen.json?v=2", { signal: controller.signal })
      .then(response => {
        if (!response.ok) throw new Error(`Leistungsdaten: HTTP ${response.status}`);
        return response.json();
      })
      .then(pages => setState({ pages, error: false }))
      .catch(error => {
        if (error.name !== "AbortError") {
          console.error("Leistungsseite konnte nicht geladen werden.", error);
          setState({ pages: null, error: true });
        }
      });
    return () => controller.abort();
  }, []);

  const page = state.pages?.find(item => item.slug === slug);
  React.useEffect(() => { if (page) setMetadata(page); }, [page]);

  if (!page) return h.jsx("div", {
    className: "it-home it-service-page",
    role: "status",
    children: state.error || state.pages
      ? "Die Leistungsseite konnte nicht geladen werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns unter 06047 9974441."
      : "Leistungsseite wird geladen …",
  });

  return h.jsxs("div", { className: "it-home it-service-page", children: [
    h.jsx("section", { className: "it-detail-hero", children: h.jsxs("div", { className: "it-wrap", children: [
      h.jsx("a", { href: "/#leistungen", className: "it-back", children: "← Alle Leistungen" }),
      h.jsx("h1", { children: page.heading }),
      h.jsx("p", { children: page.intro }),
      h.jsxs("div", { className: "it-actions", children: [
        h.jsx("a", { href: whatsappUrl(pathname), className: "it-button it-button-primary", target: "_blank", rel: "noopener noreferrer", children: "Jetzt über WhatsApp anfragen" }),
        h.jsx("a", { href: "/kontakt/", className: "it-button it-button-light", children: "Anfrage per Formular" }),
      ] }),
    ] }) }),
    h.jsx("section", { className: "it-section", children: h.jsxs("div", { className: "it-wrap it-detail-copy", children: [
      h.jsx("h2", { children: page.benefit }), h.jsx("p", { children: page.text }),
      h.jsx("ul", { children: page.items.map(item => h.jsx("li", { children: item }, item)) }),
    ] }) }),
    h.jsx("section", { className: "it-section it-section-soft", children: h.jsxs("div", { className: "it-wrap it-detail-copy", children: [
      h.jsx("h2", { children: "So gehen wir vor" }),
      h.jsx("ol", { children: page.steps.map(step => h.jsx("li", { children: step }, step)) }),
    ] }) }),
    h.jsx("section", { className: "it-section", children: h.jsxs("div", { className: "it-wrap it-detail-copy", children: [
      h.jsx("h2", { children: "Kosten und individuelles Angebot" }),
      h.jsx("p", { children: "Der Preis richtet sich nach Ihrem Anliegen und dem vereinbarten Umfang. Mindestbuchungszeiten, Anfahrt und gegebenenfalls benötigte Geräte oder Lizenzen können zusätzlich relevant sein." }),
      h.jsx("a", { href: "/preise/#it-preise", className: "it-button it-button-outline", children: "IT-Preise und Bedingungen ansehen" }),
    ] }) }),
    h.jsx("section", { className: "it-section", children: h.jsxs("div", { className: "it-wrap it-detail-copy", children: [
      h.jsx("h2", { children: "Häufige Fragen" }),
      h.jsx("div", { className: "it-faq", children: page.faq.map(([question, answer]) => h.jsxs("details", { children: [h.jsx("summary", { children: question }), h.jsx("p", { children: answer })] }, question)) }),
    ] }) }),
    h.jsx("section", { className: "it-section it-section-soft", children: h.jsxs("div", { className: "it-wrap it-detail-copy", children: [
      h.jsx("h2", { children: "Ihr Anliegen besprechen" }),
      h.jsx("p", { children: "Kontaktieren Sie uns für Unterstützung in Altenstadt, der Wetterau und Umgebung." }),
      h.jsxs("div", { className: "it-actions", children: [
        h.jsx("a", { href: whatsappUrl(pathname), className: "it-button it-button-primary", target: "_blank", rel: "noopener noreferrer", children: "Jetzt sofort über WhatsApp kontaktieren" }),
        h.jsx("a", { href: "/kontakt/", className: "it-button it-button-outline", children: "Kontaktformular" }),
        h.jsx("a", { href: "tel:+4960479974441", className: "it-button it-button-outline", children: "Anrufen" }),
      ] }),
      h.jsx("h3", { children: "Weitere IT-Leistungen" }),
      h.jsx("ul", { children: state.pages.filter(item => item.slug !== slug).map(item => h.jsx("li", { children: h.jsx("a", { href: `/it/${item.slug}/`, children: item.short }) }, item.slug)) }),
    ] }) }),
  ] });
}
