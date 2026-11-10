import { j as h, r as React } from "./react-vendor-DAatkCok.js";
import { u as useLocation } from "./react-router-D9cGlsqA.js";
import { whatsappUrl } from "./whatsapp-contact.js?v=2";

if (!document.querySelector('link[href="/css/service-catalog.css?v=2"]')) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = "/css/service-catalog.css?v=2";
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

const priceDetails = {
  EasyConnect: ["Router, WLAN-Abdeckung und Verbindungen prüfen", "Zusätzliche Geräte nach Vereinbarung"],
  EasySupport: ["Fehleranalyse, Updates und Gerätehilfe", "Ersatzteile und Anfahrt nach Vereinbarung"],
  EasyPhone: ["Telefone und VoIP-Einrichtung besprechen", "Hardware und Anbietergebühren nach Vereinbarung"],
  EasyCloud: ["E-Mail-Konten und Cloud-Zugriff einrichten", "Lizenzen und Speicher nach Vereinbarung"],
  EasyProtect: ["Datensicherung und Schutzmaßnahmen besprechen", "Backup-Speicher und Softwarelizenzen nach Vereinbarung"],
  EasyLiving: ["Vernetzte Geräte und Medien einrichten", "Geräte und Zubehör nach Vereinbarung"],
  EasyBusiness: ["IT-Betreuung, Netzwerk und Arbeitsplätze", "Lizenzen, Hardware und Servicelevel nach Vereinbarung"],
  EasyAI: ["KI-Potenziale und geeignete Prozesse besprechen", "Softwarelizenzen und Umsetzung nach Vereinbarung"],
  EasyHome: ["Hilfe bei Geräten, WLAN und Datensicherung", "Anfahrt und Ersatzteile nach Vereinbarung"],
  EasyLearn: ["Lernplattform und Schulungssystem besprechen", "Lizenzen und Integrationen nach Vereinbarung"],
  EasyWeb: ["Individuelle Website und mobiloptimierter Auftritt", "Zusätzliche Funktionen und laufende Dienste nach Vereinbarung"],
  EasyVisual: ["Schnitt und Motion Design aus vorhandenem oder Stockmaterial", "Stocklizenzen und weitere Formate nach Vereinbarung"],
};

const homePrices = [
  { title: "IT-Betreuung & IT-Dienstleistungen", description: "Zuverlässige IT-Unterstützung für Privatpersonen und Unternehmen.", price: "Auf Anfrage", detail: "Preisrahmen und Beispiele auf der Preisseite", href: "/preise/#it-preise", action: "IT-Leistungen & Preise entdecken" },
  { title: "Webdesign", description: "Moderne Websites, individuelle Gestaltung und professionelle Online-Auftritte.", price: "Ab 595 €", detail: "pro Projekt inkl. 19 % MwSt. · 500 € netto", href: "/preise/#preis-easyweb", action: "Webdesign-Preise entdecken" },
  { title: "Videografie", description: "Werbevideos und visuelle Inhalte aus vorhandenem Material und Animation.", price: "Auf Anfrage", detail: "Preis nach vereinbartem Projektumfang", href: "/preise/#preis-easyvisual", action: "Videografie-Preise entdecken" },
  { title: "Individuelles Angebot", description: "Sie haben ein besonderes Projekt oder benötigen mehrere Leistungen? Wir erstellen ein passendes Angebot.", price: "Auf Anfrage", detail: "Persönlich auf Ihren Bedarf abgestimmt", href: "https://wa.me/4960479974441?text=Hallo%20EasyTech%2C%20ich%20m%C3%B6chte%20ein%20individuelles%20Angebot%20anfragen.", action: "Angebot anfragen" },
];

export function HomePrices() {
  return h.jsx("section", { className: "et-home-prices", children: h.jsxs("div", { className: "et-service-prices-wrap", children: [
    h.jsx("h2", { children: "Die passende Lösung für Ihr Vorhaben" }),
    h.jsx("div", { className: "et-home-price-grid", children: homePrices.map((item, index) => h.jsxs("article", { className: `et-home-price-card${index === 0 ? " et-home-price-featured" : ""}`, children: [
      h.jsx("h3", { children: item.title }),
      h.jsx("p", { className: "et-home-price-description", children: item.description }),
      h.jsx("p", { className: "et-home-price-value", children: item.price }),
      h.jsx("p", { className: "et-home-price-detail", children: item.detail }),
      h.jsx("a", { href: item.href, ...(index === 3 ? { target: "_blank", rel: "noopener noreferrer" } : {}), children: item.action }),
    ] }, item.title)) }),
  ] }) });
}

export function ServicePrices() {
  const { hash } = useLocation();
  React.useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    const timer = setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "instant", block: "start" }), 500);
    return () => clearTimeout(timer);
  }, [hash]);
  return h.jsx("section", { className: "et-service-prices", id: "it-preise", children: h.jsxs("div", { className: "et-service-prices-wrap", children: [
    h.jsx("h2", { children: "Alle Leistungen und Einstiegspreise" }),
    h.jsx("p", { className: "et-service-prices-intro", children: "Der konkrete Preis richtet sich nach Ihrem Anliegen. Noch nicht festgelegte Einstiegspreise nennen wir Ihnen im individuellen Angebot." }),
    h.jsx("p", { className: "et-service-scroll-hint", children: "Weitere Leistungen seitlich ansehen →" }),
    h.jsx("p", { children: "IT-Betreuung und IT-Dienstleistungen: Umfang und Abrechnung nach individuellem Angebot. Für Privat- und Geschäftskunden finden Sie unten bestätigte Stundensätze und Preisbeispiele." }),
    h.jsx("div", { className: "et-service-price-grid", "aria-label": "Preisübersicht der Leistungen", children: services.map(service => h.jsxs("article", { id: `preis-${service.name.toLowerCase()}`, className: "et-service-price-card", children: [
      h.jsxs("div", { className: "et-service-card-top", children: [h.jsx(ServiceIcon, { path: service.icon }), ["EasySupport", "EasyCloud", "EasyBusiness", "EasyWeb"].includes(service.name) && h.jsx("span", { className: "et-service-badge", children: service.badge })] }),
      h.jsx("h3", { children: service.name }),
      h.jsx("p", { className: "et-service-category", children: service.label }),
      h.jsx("p", { className: "et-service-description", children: service.description }),
      h.jsx("p", { className: "et-service-amount", children: service.price || "Preis auf Anfrage" }),
      h.jsx("p", { className: "et-service-price-note", children: service.priceNote || "Umfang und Abrechnung nach Angebot" }),
      h.jsxs("dl", { className: "et-service-scope", children: [
        h.jsx("dt", { children: "Möglicher Leistungsumfang" }),
        h.jsx("dd", { children: priceDetails[service.name][0] }),
        h.jsx("dt", { children: "Mögliche Zusatzkosten" }),
        h.jsx("dd", { children: priceDetails[service.name][1] }),
      ] }),
      h.jsx("a", { href: service.href, children: "Leistung entdecken" }),
    ] }, service.name)) }),
    h.jsxs("p", { className: "et-service-prices-footnote", children: ["Bei IT-Einsätzen können Mindestbuchungszeiten, Anfahrt und Lizenzen zusätzlich relevant sein. Details und bestätigte IT-Preisbeispiele finden Sie in der ", h.jsx("a", { href: "/preise/", children: "Preisübersicht" }), "."] }),
  ] }) });
}

const extraDetails = {
  business: { title: "IT-Betreuung passend zu Ihrem Unternehmen", example: "Zum Beispiel: neue Arbeitsplätze einrichten, ein unzuverlässiges Büronetz prüfen oder den Bedarf für eine laufende Betreuung besprechen.", pricing: "Für Geschäftskunden gelten je nach Tätigkeitsbereich die veröffentlichten Netto-Stundensätze. Bei laufender Betreuung werden Leistungsumfang und Servicelevel vereinbart.", question: "Was ist bei laufender Betreuung enthalten?", answer: "Das hängt von Ihrer Infrastruktur und der vereinbarten Betreuung ab. Wartung, Überwachung und gegebenenfalls Lizenzen werden im Angebot konkret aufgeführt.", path: "/it/business/" },
  privat: { title: "IT-Hilfe für Ihren Alltag", example: "Zum Beispiel: einen neuen Computer einrichten, ein WLAN-Problem eingrenzen oder die Datensicherung auf einem vorhandenen Gerät besprechen.", pricing: "Für Privatkunden sind die Preise inklusive Umsatzsteuer ausgewiesen. Für Vor-Ort-Termine und Fernwartung gelten Mindestbuchungszeiten; Anfahrt kann zusätzlich anfallen.", question: "Ist Fernwartung für jedes Anliegen geeignet?", answer: "Nein. Wir klären vorab, ob sich Ihr Anliegen aus der Ferne bearbeiten lässt oder ein Termin vor Ort sinnvoll ist.", path: "/it/privat/" },
  ai: { title: "KI-Beratung mit konkretem Anwendungsfall", example: "Zum Beispiel: wiederkehrende Anfragen oder die Übertragung von Daten zwischen vorhandenen Werkzeugen gemeinsam prüfen.", pricing: "Die Kosten hängen von Beratung, Umsetzung und den verwendeten Diensten ab. Lizenzen und weitere Voraussetzungen klären wir vorab im Angebot.", question: "Benötigt jeder Prozess künstliche Intelligenz?", answer: "Nein. Wir prüfen zuerst den Ablauf und besprechen, ob eine einfache Automatisierung oder der Einsatz von KI sinnvoll ist.", path: "/it/ki-beratung/" },
  web: { title: "Webdesign vom Anliegen bis zum Auftritt", example: "Zum Beispiel: eine neue Unternehmenswebsite strukturieren oder einen bestehenden Auftritt für mobile Geräte überarbeiten.", pricing: "Webdesign beginnt bei 500 € netto pro Projekt (595 € inklusive 19 % MwSt.). Der genaue Umfang und zusätzliche Leistungen werden im Angebot festgelegt.", question: "Was beeinflusst den Preis einer Website?", answer: "Seitenumfang, Inhalte, Funktionen und benötigte Integrationen bestimmen den Aufwand. Wir besprechen die Anforderungen vor Beginn.", path: "/webdesign/" },
  video: { title: "Werbevideos aus Ihrem Material", example: "Zum Beispiel: bestehende Aufnahmen für Social Media schneiden oder Inhalte mit Animationen und Stockmaterial ergänzen. Ein eigener Kameradreh vor Ort ist nicht enthalten.", pricing: "Der Preis hängt von Material, Länge, Schnitt und gewünschten Formaten ab. Mögliche Stocklizenzen besprechen wir vorab.", question: "Kann ich vorhandene Bilder und Videos verwenden?", answer: "Ja, sofern Sie die erforderlichen Nutzungsrechte besitzen. Wir besprechen das vorhandene Material vor der Umsetzung.", path: "/videografie/" },
};

export function ServiceDetails({ kind }) {
  const item = extraDetails[kind];
  return h.jsx("section", { className: "et-service-details", children: h.jsxs("div", { className: "et-service-details-wrap", children: [
    h.jsx("h2", { children: item.title }),
    h.jsx("h3", { children: "Anwendungsbeispiel" }),
    h.jsx("p", { children: item.example }),
    h.jsx("h3", { children: "Kosten und Zusammenarbeit" }),
    h.jsx("p", { children: item.pricing }),
    h.jsx("p", { children: "Wir besprechen zunächst Ihr Anliegen und die vorhandene Ausgangslage. Anschließend stimmen wir Umfang und nächste Schritte mit Ihnen ab." }),
    h.jsxs("details", { children: [h.jsx("summary", { children: item.question }), h.jsx("p", { children: item.answer })] }),
    kind === "business" && h.jsxs("div", { children: [
      h.jsx("h3", { children: "EasyLearn: Lernplattformen für Teams" }),
      h.jsx("p", { children: "Bei Bedarf besprechen wir die Einrichtung einer Lernplattform, die Strukturierung von Kursen und die Nutzung im Team. Umfang, benötigte Lizenzen und Kosten werden individuell abgestimmt." }),
      h.jsxs("details", { children: [
        h.jsx("summary", { children: "Für wen eignet sich EasyLearn?" }),
        h.jsx("p", { children: "Für Unternehmen, die Schulungsinhalte und Lernabläufe für ihr Team digital bereitstellen möchten." }),
      ] }),
    ] }),
    h.jsxs("div", { className: "et-service-details-actions", children: [
      h.jsx("a", { href: whatsappUrl(item.path), target: "_blank", rel: "noopener noreferrer", children: "Jetzt über WhatsApp anfragen" }),
      h.jsx("a", { href: kind === "web" ? "/preise/#preis-easyweb" : kind === "video" ? "/preise/#preis-easyvisual" : "/preise/#it-preise", children: "Preise und Bedingungen ansehen" }),
      h.jsx("a", { href: "/kontakt/", children: "Alternativ Kontaktformular" }),
    ] }),
  ] }) });
}
