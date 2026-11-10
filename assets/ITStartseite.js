import { j as h } from "./react-vendor-DAatkCok.js";
import { S as SEO, P as pages } from "./SEO-CjiI-g6D.js";

if (!document.querySelector('link[href="/css/it-startseite.css?v=1"]')) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = "/css/it-startseite.css?v=1";
  document.head.append(stylesheet);
}

const services = [
  ["wifi", "Netzwerk & WLAN", "Verbindungen einrichten und Probleme im Heim- oder Büronetz lösen.", ["Router und Mesh", "WLAN-Abdeckung", "Netzwerk im Homeoffice"]],
  ["computer", "PC- und Mac-Hilfe", "Unterstützung bei Fehlern, Updates und langsamen Geräten.", ["Fehlerdiagnose", "Wartung und Updates", "Viren und Datenrettung"]],
  ["phone", "Telefonie & VoIP", "Telefonanlagen und digitale Telefonie passend zu Ihrem Bedarf.", ["VoIP und DECT", "Umstellung und Einrichtung", "Telefonieren am PC"]],
  ["cloud", "E-Mail & Cloud", "E-Mail, Dateien und Zusammenarbeit auf Ihren Geräten einrichten.", ["Microsoft 365 und Outlook", "Cloud-Speicher", "Videokonferenzen"]],
  ["device", "Geräte & Arbeitsplatz", "Von der Geräteauswahl bis zur Einrichtung Ihres Arbeitsplatzes.", ["PC, Smartphone und Tablet", "Datenübernahme", "Drucker und Homeoffice"]],
  ["shield", "Backup & Sicherheit", "Daten sichern und bestehende Systeme auf Sicherheit prüfen.", ["Datensicherung und Tests", "Virenschutz und Firewall", "Server und NAS"]],
  ["workflow", "Digitalisierung", "Digitale Abläufe und passende Software gemeinsam betrachten.", ["Arbeitsabläufe", "Dokumentenverwaltung", "Softwareauswahl"]],
  ["home", "Smart Home & Multimedia", "Unterstützung für vernetzte Geräte und Unterhaltung zu Hause.", ["Smart-Home-Einrichtung", "Audio und Streaming", "Vernetzte Geräte"]],
];

const paths = {
  wifi: "M3 9a15 15 0 0 1 18 0M6 12a10 10 0 0 1 12 0M9 15a5 5 0 0 1 6 0M12 19h.01",
  computer: "M4 5h16v11H4zM8 20h8M12 16v4",
  phone: "M7 3h10v18H7zM11 18h2",
  cloud: "M7 18h10a4 4 0 0 0 .4-8A6 6 0 0 0 6 9a4.5 4.5 0 0 0 1 9z",
  device: "M3 5h13v10H3zM6 19h7M19 9h3v10h-3z",
  shield: "M12 3 20 6v5c0 5-3 8-8 10-5-2-8-5-8-10V6zM9 12l2 2 4-4",
  workflow: "M4 5h6v6H4zM14 13h6v6h-6zM16 5h4v4h-4zM7 11v5h7M13 7h3",
  home: "M3 11 12 4l9 7M5 10v10h14V10M9 20v-6h6v6",
};

function Icon({ name }) {
  return h.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: h.jsx("path", { d: paths[name] }) });
}

function Section({ id, title, intro, children, className = "" }) {
  return h.jsx("section", { id, className: `it-section ${className}`, children: h.jsxs("div", { className: "it-wrap", children: [h.jsx("h2", { children: title }), intro && h.jsx("p", { className: "it-intro", children: intro }), children] }) });
}

const faq = [
  ["Wo sind Sie unterwegs?", "Wir unterstützen in Altenstadt, der Wetterau und umliegenden Orten. Ob ein Vor-Ort-Termin möglich ist, besprechen wir bei Ihrer Anfrage."],
  ["Ist auch Fernwartung möglich?", "Ja. Wenn sich Ihr Anliegen aus der Ferne bearbeiten lässt, können wir die nächsten Schritte gemeinsam per Telefon und Fernwartung besprechen."],
  ["Was mache ich bei einem dringenden IT-Problem?", "Rufen Sie uns an und schildern Sie das Problem. Wir besprechen mit Ihnen, welche Unterstützung möglich ist."],
  ["Was kostet die Unterstützung?", "Die Kosten hängen von Ihrem Anliegen und dem benötigten Aufwand ab. Wir besprechen den Umfang und ein passendes Angebot vor der Umsetzung."],
  ["Helfen Sie auch Privatpersonen und Senioren?", "Ja. Wir unterstützen Privatpersonen und Senioren ebenso wie Selbstständige und kleine Unternehmen und erklären die Schritte verständlich."],
  ["Wie gehen Sie mit meinen Daten um?", "Wir benötigen nur die Informationen, die für Ihre Anfrage und Unterstützung erforderlich sind. Einzelheiten zur Verarbeitung finden Sie in unserer Datenschutzerklärung."],
  ["Wie kann ich Kontakt aufnehmen?", "Sie können uns anrufen, per WhatsApp schreiben oder das Kontaktformular nutzen. Für eine erste Einordnung steht auch die kostenlose Analyse bereit."],
];

export function HomePage() {
  return h.jsxs(h.Fragment, { children: [
    h.jsx(SEO, { config: pages.home }),
    h.jsxs("div", { className: "it-home", children: [
      h.jsx("section", { className: "it-hero", children: h.jsxs("div", { className: "it-wrap it-hero-content", children: [
        h.jsx("h1", { children: "IT-Service in Altenstadt und der Wetterau" }),
        h.jsx("p", { children: "Persönliche Hilfe für Computer, WLAN und digitale Arbeitsplätze – für Privatpersonen und kleine Unternehmen, vor Ort und per Fernwartung." }),
        h.jsxs("div", { className: "it-actions", children: [
          h.jsx("a", { className: "it-button it-button-primary", href: "/kontakt/", children: "Anfrage senden" }),
          h.jsx("a", { className: "it-button it-button-light", href: "tel:+4960479974441", children: "Jetzt anrufen" }),
        ] }),
        h.jsx("ul", { className: "it-trust", children: ["Vor Ort & remote", "Verständlich erklärt", "Faire Preise"].map(text => h.jsx("li", { children: text }, text)) }),
      ] }) }),
      h.jsx(Section, { id: "leistungen", title: "IT-Hilfe, die zu Ihrem Alltag passt", intro: "Wählen Sie ein Thema, um zu sehen, wobei wir Sie unterstützen können.", children: h.jsx("div", { className: "it-services", children: services.map(([icon, title, description, items]) => h.jsxs("details", { className: "it-service", children: [
        h.jsxs("summary", { children: [h.jsx("span", { className: "it-icon", children: h.jsx(Icon, { name: icon }) }), h.jsxs("span", { children: [h.jsx("strong", { children: title }), h.jsx("span", { className: "it-service-description", children: description })] }), h.jsx("span", { className: "it-plus", "aria-hidden": "true", children: "+" })] }),
        h.jsxs("div", { className: "it-service-more", children: [h.jsx("ul", { children: items.map(item => h.jsx("li", { children: item }, item)) }), h.jsx("a", { href: "/kontakt/", children: "Zu diesem Thema anfragen →" })] }),
      ] }, title)) }) }),
      h.jsx(Section, { id: "ablauf", title: "So läuft die Zusammenarbeit ab", className: "it-section-soft", children: h.jsx("ol", { className: "it-steps", children: [
        ["Anfrage", "Sie schildern uns, wobei Sie Hilfe benötigen."],
        ["Analyse & Beratung", "Wir besprechen Ihre Ausgangslage und mögliche nächste Schritte."],
        ["Umsetzung", "Wir kümmern uns um die vereinbarte Lösung – vor Ort oder remote."],
        ["Nachbetreuung", "Auch nach der Umsetzung sind wir bei Fragen für Sie da."],
      ].map(([title, text]) => h.jsxs("li", { children: [h.jsx("h3", { children: title }), h.jsx("p", { children: text })] }, title)) }) }),
      h.jsx(Section, { id: "fuer-wen", title: "Für Menschen und Unternehmen in der Region", children: h.jsx("div", { className: "it-audience", children: [
        ["Privatpersonen", "Hilfe bei Geräten, Internet und alltäglichen Computerfragen."],
        ["Senioren", "Geduldige Unterstützung und verständliche Erklärungen bei digitalen Fragen."],
        ["Freiberufler", "Praktische Hilfe für Geräte, Kommunikation und den eigenen Arbeitsplatz."],
        ["Kleine Unternehmen", "Unterstützung für Arbeitsplätze, Netzwerke und die laufende IT."],
      ].map(([title, text]) => h.jsxs("article", { children: [h.jsx("h3", { children: title }), h.jsx("p", { children: text })] }, title)) }) }),
      h.jsx(Section, { id: "vor-ort-remote", title: "Vor Ort oder per Fernwartung", className: "it-section-dark", children: h.jsxs("div", { className: "it-two-columns", children: [
        h.jsxs("div", { children: [h.jsx("h3", { children: "Vor Ort" }), h.jsx("p", { children: "Wenn Geräte, Netzwerk oder Arbeitsplatz direkt eingerichtet und geprüft werden müssen." })] }),
        h.jsxs("div", { children: [h.jsx("h3", { children: "Per Fernwartung" }), h.jsx("p", { children: "Wenn sich eine Frage oder ein Softwareproblem aus der Ferne bearbeiten lässt." })] }),
      ] }) }),
      h.jsx(Section, { id: "faq", title: "Häufige Fragen", children: h.jsx("div", { className: "it-faq", children: faq.map(([question, answer]) => h.jsxs("details", { children: [h.jsx("summary", { children: question }), h.jsx("p", { children: answer })] }, question)) }) }),
      h.jsx(Section, { id: "weitere-leistungen", title: "Weitere Leistungen", className: "it-section-soft", children: h.jsxs("div", { className: "it-two-columns", children: [
        h.jsxs("article", { children: [h.jsx("h3", { children: "Webdesign" }), h.jsx("p", { children: "Websites für Unternehmen, verständlich gestaltet und auf mobilen Geräten nutzbar." }), h.jsx("a", { href: "/webdesign/", children: "Webdesign ansehen →" })] }),
        h.jsxs("article", { children: [h.jsx("h3", { children: "Werbevideos" }), h.jsx("p", { children: "Werbevideos aus vorhandenem Material, Stockmaterial und Animation – ohne eigenen Kameradreh vor Ort." }), h.jsx("a", { href: "/videografie/", children: "Werbevideos ansehen →" })] }),
      ] }) }),
      h.jsx(Section, { id: "kontakt", title: "Sprechen wir über Ihr Anliegen", intro: "Ob eine kurze Frage oder ein größeres Vorhaben: Wählen Sie den Kontaktweg, der für Sie am besten passt.", className: "it-contact", children: h.jsxs(h.Fragment, { children: [
        h.jsxs("div", { className: "it-actions", children: [
          h.jsx("a", { className: "it-button it-button-primary", href: "/kontakt/", children: "Zum Kontaktformular" }),
          h.jsx("a", { className: "it-button it-button-outline", href: "tel:+4960479974441", children: "06047 9974441 anrufen" }),
          h.jsx("a", { className: "it-button it-button-outline", href: "https://wa.me/4960479974441", target: "_blank", rel: "noopener noreferrer", children: "WhatsApp schreiben" }),
        ] }),
        h.jsxs("p", { children: ["Oder per E-Mail: ", h.jsx("a", { href: "mailto:info@easytechit.de", children: "info@easytechit.de" }), " · Altenstadt und Umgebung"] }),
        h.jsx("button", { className: "it-analysis-link", type: "button", "data-dc-open": "", children: "Kostenlose Analyse starten →" }),
      ] }) }),
    ] }),
  ] });
}
