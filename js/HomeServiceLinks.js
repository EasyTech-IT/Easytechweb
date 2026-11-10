import { j as h, r as React } from "./react-vendor-DAatkCok.js";

if (!document.querySelector('link[href="/css/home-service-links.css?v=4"]')) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = "/css/home-service-links.css?v=4";
  document.head.append(stylesheet);
}

const services = [
  ["Netzwerk & WLAN", "netzwerk-wlan", "Router, WLAN und Verbindungen", "M2 8.5a15 15 0 0 1 20 0M5 12a10.5 10.5 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0M12 19h.01"],
  ["PC- und Mac-Hilfe", "pc-hilfe", "Fehler, Updates und Geräte", "M4 4h16v12H4zM2 20h20M9 16v4m6-4v4"],
  ["Telefonie & VoIP", "telefonie-voip", "Telefone und Anlagen einrichten", "M6.5 3h3l1.5 4-2 1.5a15 15 0 0 0 6 6l1.5-2 4 1.5v3a3 3 0 0 1-3.3 3A16 16 0 0 1 3.5 6.3 3 3 0 0 1 6.5 3z"],
  ["E-Mail & Cloud", "email-cloud", "Konten, Austausch und Cloud", "M3 6h18v12H3zM3 7l9 6 9-6"],
  ["Backup & Sicherheit", "backup-sicherheit", "Daten schützen und sichern", "M12 3 4 6v5c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6zM9 12l2 2 4-4"],
  ["Smart Home & Multimedia", "smart-home", "Vernetzte Geräte und Medien", "M3 11 12 4l9 7M5 10v10h14V10M9 20v-6h6v6"],
];

export function HomeServiceLinks() {
  React.useLayoutEffect(() => {
    const hero = document.getElementById("initial-home-hero");
    if (!hero) return;
    hero.hidden = false;
    return () => { hero.hidden = true; };
  }, []);

  return h.jsxs("div", { className: "home-service-links", children: [
    h.jsx("h3", { children: "IT-Leistungen im Überblick" }),
    h.jsx("ul", { children: services.map(([label, slug, description, path]) =>
      h.jsx("li", { children: h.jsxs("a", { href: `/it/${slug}/`, children: [
        h.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: h.jsx("path", { d: path }) }),
        h.jsx("strong", { children: label }),
        h.jsx("span", { children: description }),
      ] }) }, slug)) }),
  ] });
}
