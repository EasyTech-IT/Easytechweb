import { j as jsx, r as React } from "./react-vendor-DAatkCok.js";
import { L as Link } from "./react-router-D9cGlsqA.js";

if (!document.querySelector('link[href="/css/premium-it.css?v=1"]')) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = "/css/premium-it.css?v=1";
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
        jsx.jsxs("div", { className: "et-comparison", children: [
          jsx.jsxs("div", { children: [
            jsx.jsx("h3", { children: "IT-Betreuung vergleichen – worauf es ankommt." }),
            jsx.jsx("p", { children: "Angebote unterscheiden sich. Diese Fragen helfen Ihnen, Leistungen und Bedingungen fair zu vergleichen." }),
            jsx.jsx("p", { className: "et-comparison-hint", children: "Tabelle seitlich scrollen, um alle Angebote zu sehen." }),
          ] }),
          jsx.jsx("div", { className: "et-comparison-scroll", tabIndex: 0, "aria-label": "Vergleichstabelle", children:
            jsx.jsxs("table", { className: "et-comparison-list", children: [
              jsx.jsx("thead", { children: jsx.jsxs("tr", { children: [
                jsx.jsx("th", { scope: "col", children: "Kriterium" }),
                jsx.jsx("th", { scope: "col", children: "EasyTech" }),
                jsx.jsx("th", { scope: "col", children: "Andere Angebote" }),
              ] }) }),
              jsx.jsx("tbody", { children: [
                ["Ansprechpartner", "Persönliche Begleitung Ihres Anliegens", "Zuständigkeit im Angebot prüfen"],
                ["Unterstützung", "Vor Ort oder per Fernhilfe – je nach Anliegen", "Umfang und Einsatzort prüfen"],
                ["Kosten", "Preisrahmen und Bedingungen einsehbar", "Stundensatz, Anfahrt und Lizenzen prüfen"],
              ].map(([label, easytech, other]) => jsx.jsxs("tr", { children: [
                jsx.jsx("th", { scope: "row", children: label }),
                jsx.jsx("td", { children: easytech }),
                jsx.jsx("td", { children: other }),
              ] }, label)) }),
            ] }),
          }),
          jsx.jsx("p", { className: "et-comparison-note", children: "Wir besprechen Ihr Anliegen persönlich und stimmen den Umfang mit Ihnen ab." }),
        ] }),
        jsx.jsx(Link, {
          to: "/kontakt",
          className: "inline-flex items-center justify-center",
          style: { marginTop: "24px", minHeight: "48px", padding: "12px 22px", background: "#162a42", borderRadius: "99px", color: "#fff", fontWeight: 600, textDecoration: "none" },
          children: "IT-Beratung anfragen",
        }),
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
        jsx.jsx(page ? "h1" : "h2", { style: { fontSize: "clamp(26px, 3.5vw, 42px)", lineHeight: 1.2, fontWeight: 600, color: "#0a0a0a", marginBottom: "16px" }, children: page ? "Preise für IT und Webdesign." : "Webdesign: Ihr Projekt, Ihr Angebot." }),
        jsx.jsx("p", { style: { maxWidth: "660px", fontSize: "17px", lineHeight: 1.65, color: "#404040", marginBottom: "24px" }, children: page ? "Hier finden Sie Preisrahmen für IT-Hilfe und laufende Betreuung sowie unseren Webdesign-Einstiegspreis." : "Ob neuer Auftritt oder Überarbeitung: Umfang und Leistungen stimmen wir auf Ihr Vorhaben ab." }),
        jsx.jsxs("div", {
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
