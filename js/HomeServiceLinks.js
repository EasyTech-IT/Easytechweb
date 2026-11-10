import { j as h, r as React } from "./react-vendor-DAatkCok.js";

if (!document.querySelector('link[href="/css/home-service-links.css?v=2"]')) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = "/css/home-service-links.css?v=2";
  document.head.append(stylesheet);
}

const services = [
  ["Netzwerk & WLAN", "netzwerk-wlan"],
  ["PC- und Mac-Hilfe", "pc-hilfe"],
  ["Telefonie & VoIP", "telefonie-voip"],
  ["E-Mail & Cloud", "email-cloud"],
  ["Backup & Sicherheit", "backup-sicherheit"],
  ["Smart Home & Multimedia", "smart-home"],
];

export function HomeServiceLinks() {
  React.useLayoutEffect(() => {
    const hero = document.getElementById("initial-home-hero");
    if (!hero) return;
    hero.hidden = false;
    return () => { hero.hidden = true; };
  }, []);

  return h.jsx("section", { id: "leistungen", className: "home-service-links", "aria-labelledby": "home-service-links-title", children:
    h.jsxs("div", { className: "home-service-links-inner", children: [
      h.jsx("h2", { id: "home-service-links-title", children: "IT-Hilfe für Ihren Alltag" }),
      h.jsx("p", { children: "Mehr über unsere Unterstützung für Privatpersonen und kleine Unternehmen erfahren:" }),
      h.jsx("ul", { children: services.map(([label, slug]) =>
        h.jsx("li", { children: h.jsx("a", { href: `/it/${slug}/`, children: label }) }, slug)) }),
      h.jsxs("div", { id: "ablauf", className: "home-service-process", children: [
        h.jsx("h2", { children: "So läuft es ab" }),
        h.jsx("ol", { children: ["Anfrage: Sie schildern Ihr Anliegen.", "Beratung: Wir besprechen Ihren Bedarf.", "Umsetzung: Wir kümmern uns um die vereinbarten Schritte.", "Nachbetreuung: Bei Fragen sind wir weiter für Sie da."].map(step => h.jsx("li", { children: step }, step)) }),
      ] }),
    ] }),
  });
}
