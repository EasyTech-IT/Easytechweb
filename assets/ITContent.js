import { j as jsx, r as React } from "./react-vendor-DAatkCok.js";
import { L as Link } from "./react-router-D9cGlsqA.js";
import { whatsappUrl } from "./whatsapp-contact.js?v=2";

if (!document.querySelector('link[href="/css/premium-it.css?v=2"]')) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = "/css/premium-it.css?v=2";
  document.head.append(stylesheet);
}

const font = "'Satoshi', 'Satoshi Placeholder', sans-serif";
const tabs = [
  {
    label: "Das Anliegen",
    title: "Wenn Technik den Alltag ausbremst",
    text: "Ob WLAN-Probleme, ein langsamer Computer oder Fragen zur Datensicherung: Wir hören zu und klären, was Sie benötigen.",
  },
  {
    label: "Unsere Lösung",
    title: "IT-Hilfe, die zu Ihnen passt",
    text: "Wir beraten verständlich und unterstützen bei Einrichtung, Fehlerbehebung und Sicherheit – vor Ort oder per Fernhilfe.",
  },
  {
    label: "Ihr Vorteil",
    title: "Ein Ansprechpartner für Ihre IT",
    text: "Sie wissen, welche Schritte wir empfehlen. Auch nach der Umsetzung sind wir bei Fragen für Sie da.",
  },
];
const advantages = [
  ["Persönlich", "Vor Ort oder remote", "Unterstützung in Altenstadt und Umgebung oder per Fernhilfe – je nachdem, was für Ihr Anliegen sinnvoll ist."],
  ["Verständlich", "Technik ohne Fachchinesisch", "Wir erklären die nächsten Schritte und nehmen uns Zeit für Ihre Fragen."],
  ["Transparent", "Angebot nach Bedarf", "Umfang und Kosten besprechen wir vor der Umsetzung. Sie entscheiden, wie es weitergeht."],
];

const comparison = [
  ["Persönlicher Ansprechpartner"],
  ["Individuelle Beratung"],
  ["Unterstützung vor Ort", "Je nach Leistung"],
  ["Fernwartung", "Je nach Leistung"],
  ["Transparente Preisgestaltung"],
  ["Individuelle Lösungen"],
  ["Mehrere IT-Leistungen aus einer Hand"],
  ["Unterstützung für Privat- und Geschäftskunden"],
  ["Flexible Betreuung", "Nach Vereinbarung"],
  ["Individuelle Angebote"],
];

export function ITComparison() {
  return jsx.jsxs("div", { className: "et-comparison", children: [
    jsx.jsx("h3", { children: "Leistungen fair vergleichen" }),
    jsx.jsx("p", { children: "Welche Leistungen zu Ihrem Anliegen passen, klären wir gemeinsam. Prüfen Sie den Umfang anderer Angebote direkt beim jeweiligen Anbieter." }),
    jsx.jsxs("table", { className: "et-comparison-list", children: [
      jsx.jsx("thead", { children: jsx.jsxs("tr", { children: [
        jsx.jsx("th", { scope: "col", children: "Kriterium" }),
        jsx.jsx("th", { scope: "col", children: "EasyTech" }),
        jsx.jsx("th", { scope: "col", children: "Andere Angebote" }),
      ] }) }),
      jsx.jsx("tbody", { children: comparison.map(([label, note]) => jsx.jsxs("tr", { children: [
        jsx.jsx("th", { scope: "row", children: label }),
        jsx.jsxs("td", { children: [
          jsx.jsx("span", { className: "et-comparison-check", "aria-label": "Enthalten", children: "✓" }),
          note && jsx.jsx("small", { children: note }),
        ] }),
        jsx.jsx("td", { children: jsx.jsx("span", { className: "et-comparison-unknown", "aria-label": "Beim Anbieter prüfen", children: "?" }) }),
      ] }, label)) }),
    ] }),
    jsx.jsx("p", { className: "et-comparison-note", children: "Nicht jedes IT-Angebot ist gleich. Bei EasyTech erhalten Sie persönliche Beratung, verständliche Lösungen und Unterstützung aus einer Hand. Gemeinsam stimmen wir den Leistungsumfang auf Ihre Anforderungen ab." }),
    jsx.jsx("p", { children: "Sie möchten wissen, welche Lösung zu Ihnen passt? Lassen Sie sich persönlich beraten." }),
    jsx.jsx("a", { href: "https://wa.me/4960479974441?text=Hallo%20EasyTech%2C%20ich%20m%C3%B6chte%20mich%20pers%C3%B6nlich%20beraten%20lassen.", target: "_blank", rel: "noopener noreferrer", className: "et-price-button", children: "Jetzt Beratung anfragen" }),
    jsx.jsx("p", { children: jsx.jsx(Link, { to: "/kontakt", children: "Alternativ per Kontaktformular" }) }),
  ] });
}

export function ITPriceLink() {
  return jsx.jsxs("section", { className: "et-it-price-link", children: [
    jsx.jsxs("div", { children: [
      jsx.jsx("h2", { children: "Kosten im Blick, bevor es losgeht." }),
      jsx.jsx("p", { children: "Unsere Preisübersicht zeigt IT-Hilfe für Privatkunden und Preisrahmen für Unternehmen." }),
    ] }),
    jsx.jsx(Link, { to: "/preise", children: "IT-Preise ansehen" }),
  ] });
}

export function ITAdvantages() {
  const [active, setActive] = React.useState(0);
  return jsx.jsx("section", {
    className: "relative px-4 sm:px-6 lg:px-10 py-14 lg:py-20",
    style: { background: "#2e4a6f", fontFamily: font },
    children: jsx.jsxs("div", {
      className: "max-w-[1500px] mx-auto",
      style: { background: "#fff", borderRadius: "clamp(24px, 5vw, 64px)", padding: "clamp(20px, 5vw, 64px)" },
      children: [
        jsx.jsx("p", { style: { color: "#2e4a6f", marginBottom: "12px", fontWeight: 600 }, children: "Warum EasyTech" }),
        jsx.jsx("h2", { style: { fontSize: "clamp(26px, 3.5vw, 42px)", lineHeight: 1.2, fontWeight: 600, color: "#0a0a0a", marginBottom: "28px" }, children: "IT-Betreuung, die verständlich bleibt." }),
        jsx.jsxs("div", {
          style: { background: "#2e4a6f", color: "#fff", borderRadius: "24px", padding: "clamp(24px, 4vw, 44px)" },
          children: [
            jsx.jsx("div", {
              className: "flex flex-wrap gap-2",
              style: { marginBottom: "28px" },
              children: tabs.map((tab, index) => jsx.jsx("button", {
                type: "button",
                "aria-pressed": active === index,
                onClick: () => setActive(index),
                style: { minHeight: "44px", padding: "8px 16px", borderRadius: "99px", border: "1px solid rgba(255,255,255,.55)", background: active === index ? "#fff" : "transparent", color: active === index ? "#162a42" : "#fff", cursor: "pointer", fontWeight: 600 },
                children: tab.label,
              }, tab.label)),
            }),
            jsx.jsxs("div", {
              "aria-live": "polite",
              children: [
                jsx.jsx("h3", { style: { fontSize: "clamp(22px, 2.8vw, 32px)", fontWeight: 600, lineHeight: 1.2, marginBottom: "12px" }, children: tabs[active].title }),
                jsx.jsx("p", { style: { maxWidth: "650px", fontSize: "16px", lineHeight: 1.65, color: "#fff" }, children: tabs[active].text }),
              ],
            }),
          ],
        }),
        jsx.jsx("div", {
          className: "et-advantages-grid grid grid-cols-1 sm:grid-cols-3 gap-4",
          tabIndex: 0,
          "aria-label": "Vorteile der IT-Betreuung",
          style: { marginTop: "24px" },
          children: advantages.map(([label, title, text]) => jsx.jsxs("article", {
            style: { background: "#f7f8fa", border: "1px solid #e4e8ed", borderRadius: "20px", padding: "24px" },
            children: [
              jsx.jsx("p", { style: { color: "#2e4a6f", fontWeight: 700, marginBottom: "10px" }, children: label }),
              jsx.jsx("h3", { style: { fontSize: "19px", fontWeight: 600, color: "#0a0a0a", marginBottom: "10px" }, children: title }),
              jsx.jsx("p", { style: { fontSize: "15px", lineHeight: 1.65, color: "#404040" }, children: text }),
            ],
          }, label)),
        }),
        jsx.jsx(ITComparison, {}),
      ],
    }),
  });
}

export function WebdesignPrice({ page = false }) {
  return jsx.jsx("section", {
    className: `relative px-4 sm:px-6 lg:px-10 ${page ? "pt-[110px] pb-20" : "py-14 lg:py-20"}`,
    style: { background: "#2e4a6f", fontFamily: font, ...(page ? { paddingTop: "120px" } : {}) },
    children: jsx.jsxs("div", {
      className: "max-w-[1500px] mx-auto",
      style: { background: "#fff", borderRadius: "clamp(24px, 5vw, 64px)", padding: "clamp(24px, 5vw, 64px)" },
      children: [
        jsx.jsx(page ? "h1" : "h2", { style: { fontSize: "clamp(26px, 3.5vw, 42px)", lineHeight: 1.2, fontWeight: 600, color: "#0a0a0a", marginBottom: "16px" }, children: page ? "Preise für IT und digitale Leistungen." : "Webdesign: Ihr Projekt, Ihr Angebot." }),
        jsx.jsx("p", { style: { maxWidth: "660px", fontSize: "17px", lineHeight: 1.65, color: "#404040", marginBottom: "24px" }, children: page ? "Vergleichen Sie die Preisrahmen für IT, Videografie und Webdesign. Was vom Umfang abhängt, stimmen wir vorab transparent mit Ihnen ab." : "Ob neuer Auftritt oder Überarbeitung: Umfang und Leistungen stimmen wir auf Ihr Vorhaben ab." }),
        !page && jsx.jsxs("div", {
          style: { background: "#f7f8fa", border: "1px solid #e4e8ed", borderRadius: "24px", padding: "clamp(24px, 4vw, 36px)", maxWidth: "660px" },
          children: [
            jsx.jsx("p", { style: { color: "#2e4a6f", fontWeight: 600, marginBottom: "8px" }, children: "Webdesign-Einstiegspreis" }),
            jsx.jsx("p", { style: { fontSize: "clamp(30px, 4vw, 44px)", color: "#0a0a0a", lineHeight: 1.2, fontWeight: 700 }, children: "Ab 595 €" }),
            jsx.jsx("p", { style: { color: "#404040", lineHeight: 1.6, marginTop: "6px" }, children: "inkl. 19 % MwSt. · 500 € netto zzgl. MwSt." }),
            jsx.jsx("p", { style: { color: "#404040", lineHeight: 1.65, marginTop: "16px" }, children: "Der konkrete Preis richtet sich nach dem vereinbarten Umfang. Für weitere Webdesign-Projekte erstellen wir ein individuelles Angebot." }),
            jsx.jsx(Link, { to: "/kontakt", className: "inline-flex items-center justify-center", style: { marginTop: "20px", minHeight: "48px", padding: "12px 22px", background: "#162a42", borderRadius: "99px", color: "#fff", fontWeight: 600, textDecoration: "none" }, children: "Webdesign-Angebot anfragen" }),
          ],
        }),
      ],
    }),
  });
}

const webdesignFeatures = [
  { label: "Ziele, Zielgruppe und vorhandene Inhalte besprechen", standard: "included", individual: "included" },
  { label: "Seitenstruktur und Inhalte planen", standard: "included", individual: "included" },
  { label: "Gestaltung und responsive Umsetzung", standard: "included", individual: "included" },
  { label: "Onpage-SEO-Basis: Titel, Überschriften und interne Links", standard: "included", individual: "included" },
  { label: "Website prüfen und den Launch vorbereiten", standard: "included", individual: "included" },
  { label: "Seitenumfang über den Einstieg hinaus", standard: "excluded", individual: "custom" },
  { label: "Zusätzliche Funktionen und Integrationen", standard: "excluded", individual: "custom" },
  { label: "Überarbeitung eines bestehenden Auftritts", standard: "excluded", individual: "custom" },
];

function WebdesignFeatureMark({ status, label }) {
  const paths = {
    included: "M5 12.5 9.5 17 19 7",
    excluded: "M5 12h14",
    custom: "M12 5v14M5 12h14",
  };
  const statusText = {
    included: "Enthalten",
    excluded: "Nicht automatisch im Einstieg enthalten",
    custom: "Individuell im Angebot vereinbar",
  };
  return jsx.jsxs("span", { className: `et-webdesign-feature et-webdesign-feature-${status}`, children: [
    jsx.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: jsx.jsx("path", { d: paths[status] }) }),
    jsx.jsx("span", { children: statusText[status] }),
  ] });
}

export function WebdesignPackages() {
  return jsx.jsxs("section", {
    className: "et-webdesign-packages",
    id: "preis-easyweb",
    "aria-labelledby": "webdesign-packages-title",
    children: [
      jsx.jsx("h2", { id: "webdesign-packages-title", children: "Webdesign – zwei Wege zu Ihrem Auftritt" }),
      jsx.jsx("p", { className: "et-webdesign-packages-intro", children: "Wählen Sie den Einstieg für einen klar definierten Umfang oder lassen Sie ein individuelles Projekt nach Ihren Anforderungen planen." }),
      jsx.jsxs("div", { className: "et-webdesign-package-cards", children: [
        jsx.jsxs("article", { className: "et-webdesign-package-card", children: [
          jsx.jsx("h3", { children: "EasyWeb Standard" }),
          jsx.jsx("p", { className: "et-webdesign-package-price", children: "Ab 595 €" }),
          jsx.jsx("p", { className: "et-webdesign-package-price-note", children: "inkl. 19 % MwSt. · 500 € netto pro Projekt" }),
          jsx.jsx("p", { className: "et-webdesign-package-description", children: "Der Webdesign-Einstieg für einen abgestimmten, klar strukturierten Firmenauftritt." }),
          jsx.jsx("a", { href: whatsappUrl("/webdesign"), target: "_blank", rel: "noopener noreferrer", children: "Standard über WhatsApp anfragen" }),
        ] }),
        jsx.jsxs("article", { className: "et-webdesign-package-card et-webdesign-package-card-custom", children: [
          jsx.jsx("h3", { children: "EasyWeb Individuell" }),
          jsx.jsx("p", { className: "et-webdesign-package-price", children: "Preis auf Anfrage" }),
          jsx.jsx("p", { className: "et-webdesign-package-price-note", children: "Umfang und Preis werden im Angebot festgehalten." }),
          jsx.jsx("p", { className: "et-webdesign-package-description", children: "Für erweiterten Seitenumfang, zusätzliche Funktionen, Integrationen oder die Überarbeitung eines bestehenden Auftritts." }),
          jsx.jsx("a", { href: whatsappUrl("/webdesign"), target: "_blank", rel: "noopener noreferrer", children: "Individuelles Angebot anfragen" }),
        ] }),
      ] }),
      jsx.jsxs("div", { className: "et-webdesign-comparison-wrap", children: [
        jsx.jsx("h3", { children: "Leistungen im direkten Vergleich" }),
        jsx.jsx("p", { className: "et-webdesign-comparison-intro", children: "Ein Minus bedeutet: nicht automatisch im Einstiegspreis enthalten. Plus-Leistungen werden für EasyWeb Individuell passend zum Projekt angeboten." }),
        jsx.jsxs("table", { className: "et-webdesign-comparison", children: [
          jsx.jsx("caption", { children: "Leistungsumfang von EasyWeb Standard und EasyWeb Individuell" }),
          jsx.jsx("thead", { children: jsx.jsxs("tr", { children: [
            jsx.jsx("th", { scope: "col", children: "Leistung" }),
            jsx.jsx("th", { scope: "col", children: "EasyWeb Standard" }),
            jsx.jsx("th", { scope: "col", children: "EasyWeb Individuell" }),
          ] }) }),
          jsx.jsx("tbody", { children: webdesignFeatures.map((feature) => jsx.jsxs("tr", { children: [
            jsx.jsx("th", { scope: "row", children: feature.label }),
            jsx.jsx("td", { "data-label": "EasyWeb Standard", children: jsx.jsx(WebdesignFeatureMark, { status: feature.standard }) }),
            jsx.jsx("td", { "data-label": "EasyWeb Individuell", children: jsx.jsx(WebdesignFeatureMark, { status: feature.individual }) }),
          ] }, feature.label)) }),
        ] }),
      ] }),
      jsx.jsx("p", { className: "et-webdesign-package-note", children: "Die konkrete Anzahl der Seiten, Inhalte und Funktionen wird vor Projektbeginn abgestimmt. Der Einstiegspreis ist kein Pauschalpreis für unbegrenzten Umfang." }),
    ],
  });
}
