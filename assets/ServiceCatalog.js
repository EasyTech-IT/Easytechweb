import { j as h } from "./react-vendor-DAatkCok.js";

if (!document.querySelector('link[href="/css/service-catalog.css?v=1"]')) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = "/css/service-catalog.css?v=1";
  document.head.append(stylesheet);
}

export const services = [
  { name: "EasyConnect", label: "Netzwerk & WLAN", description: "Router, WLAN und Verbindungen einrichten und verbessern.", href: "/it/netzwerk-wlan/", badge: "Beliebt", icon: "M2 8.5a15 15 0 0 1 20 0M5 12a10.5 10.5 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0M12 19h.01" },
  { name: "EasySupport", label: "PC- und Mac-Hilfe", description: "Unterstützung bei Fehlern, Updates und Geräten.", href: "/it/pc-hilfe/", badge: "Schnell verfügbar", icon: "M4 4h16v12H4zM2 20h20M9 16v4m6-4v4" },
  { name: "EasyPhone", label: "Telefonie & VoIP", description: "Telefone und internetbasierte Telefonie einrichten.", href: "/it/telefonie-voip/", badge: "Beliebt", icon: "M6.5 3h3l1.5 4-2 1.5a15 15 0 0 0 6 6l1.5-2 4 1.5v3a3 3 0 0 1-3.3 3A16 16 0 0 1 3.5 6.3 3 3 0 0 1 6.5 3z" },
  { name: "EasyCloud", label: "E-Mail & Cloud", description: "E-Mail, Cloud-Speicher und Zusammenarbeit einrichten.", href: "/it/email-cloud/", badge: "Empfehlung", icon: "M3 6h18v12H3zM3 7l9 6 9-6" },
  { name: "EasyProtect", label: "Backup & Sicherheit", description: "Daten sichern und Geräte besser schützen.", href: "/it/backup-sicherheit/", badge: "Empfehlung", icon: "M12 3 4 6v5c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6zM9 12l2 2 4-4" },
  { name: "EasyLiving", label: "Smart Home & Multimedia", description: "Vernetzte Geräte und Medien verständlich einrichten.", href: "/it/smart-home/", badge: "Beliebt", icon: "M3 11 12 4l9 7M5 10v10h14V10M9 20v-6h6v6" },
  { name: "EasyBusiness", label: "Business IT", description: "IT-Betreuung und Infrastruktur für Unternehmen.", href: "/it/business/", badge: "Meistgebucht", icon: "M4 21V5l8-2v18M12 8h8v13M2 21h20M7 8h2M7 12h2M7 16h2M15 12h2M15 16h2" },
  { name: "EasyAI", label: "KI-Beratung", description: "KI-Möglichkeiten und passende Prozesse gemeinsam prüfen.", href: "/it/ki-beratung/", badge: "Trendthema", icon: "M12 3v2M5.6 5.6 7 7M3 12h2M19 12h2M17 7l1.4-1.4M8 17h8M9 20h6M8 14a5 5 0 1 1 8 0l-1 2H9z" },
  { name: "EasyHome", label: "Privat IT", description: "Persönliche IT-Hilfe für Zuhause.", href: "/it/privat/", badge: "Beliebt", icon: "M3 11 12 4l9 7M5 10v10h14V10M10 20v-6h4v6" },
  { name: "EasyLearn", label: "LMS-Schulungen", description: "Lernplattformen und Schulungssysteme für Teams.", href: "/it/business/#lms", badge: "Empfehlung", icon: "M2 8l10-5 10 5-10 5zM6 10v6c3 3 9 3 12 0v-6M22 8v7" },
  { name: "EasyWeb", label: "Webdesign", description: "Individuelle Websites für Ihren professionellen Auftritt.", href: "/webdesign/", badge: "Meistgebucht", icon: "M3 4h18v16H3zM3 8h18M7 6h.01M10 6h.01M7 12h10M7 16h6", price: "Ab 500 € netto pro Projekt", priceNote: "595 € inkl. 19 % MwSt." },
  { name: "EasyVisual", label: "Videografie", description: "Werbevideos und Motion Design aus vorhandenem Material.", href: "/videografie/", badge: "Beliebt", icon: "M3 6h13v12H3zM16 10l5-3v10l-5-3z" },
];

export function ServiceIcon({ path }) {
  return h.jsxs("svg", { className: "et-service-icon", viewBox: "0 0 32 32", "aria-hidden": "true", children: [
    h.jsx("rect", { x: 1, y: 1, width: 30, height: 30, rx: 9, fill: "#d8edf0" }),
    h.jsx("path", { d: path, transform: "translate(4 4)", fill: "none", stroke: "#245c76", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }),
  ] });
}

export function ServicePrices() {
  return h.jsx("section", { className: "et-service-prices", children: h.jsxs("div", { className: "et-service-prices-wrap", children: [
    h.jsx("h2", { children: "Alle Leistungen und Einstiegspreise" }),
    h.jsx("p", { className: "et-service-prices-intro", children: "Der konkrete Preis richtet sich nach Ihrem Anliegen. Noch nicht festgelegte Einstiegspreise nennen wir Ihnen im individuellen Angebot." }),
    h.jsx("p", { className: "et-service-scroll-hint", children: "Weitere Leistungen seitlich ansehen →" }),
    h.jsx("div", { className: "et-service-price-grid", tabIndex: 0, "aria-label": "Preisübersicht der Leistungen", children: services.map(service => h.jsxs("article", { className: "et-service-price-card", children: [
      h.jsxs("div", { className: "et-service-card-top", children: [h.jsx(ServiceIcon, { path: service.icon }), ["EasySupport", "EasyCloud", "EasyBusiness", "EasyWeb"].includes(service.name) && h.jsx("span", { className: "et-service-badge", children: service.badge })] }),
      h.jsx("h3", { children: service.name }),
      h.jsx("p", { className: "et-service-category", children: service.label }),
      h.jsx("p", { className: "et-service-amount", children: service.price || "Preis auf Anfrage" }),
      h.jsx("p", { className: "et-service-price-note", children: service.priceNote || "Umfang und Abrechnung nach Angebot" }),
      h.jsx("a", { href: "/kontakt/", children: "Individuelles Angebot anfragen" }),
    ] }, service.name)) }),
    h.jsxs("p", { className: "et-service-prices-footnote", children: ["Bei IT-Einsätzen können Mindestbuchungszeiten, Anfahrt und Lizenzen zusätzlich relevant sein. Details und bestätigte IT-Preisbeispiele finden Sie in der ", h.jsx("a", { href: "/preise/", children: "Preisübersicht" }), "."] }),
  ] }) });
}
