import { j as h, r as React } from "./react-vendor-DAatkCok.js";
import { services, ServiceIcon } from "/assets/ServiceCatalog.js?v=1";

if (!document.querySelector('link[href="/css/home-service-links.css?v=6"]')) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = "/css/home-service-links.css?v=6";
  document.head.append(stylesheet);
}

export function HomeServiceLinks() {
  React.useLayoutEffect(() => {
    const hero = document.getElementById("initial-home-hero");
    if (!hero) return;
    hero.hidden = false;
    return () => { hero.hidden = true; };
  }, []);

  return h.jsxs("div", { className: "home-service-links", children: [
    h.jsx("h3", { children: "Unsere Leistungen im Überblick" }),
    h.jsx("p", { className: "et-service-scroll-hint", children: "Weitere Leistungen seitlich ansehen →" }),
    h.jsx("ul", { tabIndex: 0, "aria-label": "Unsere Leistungen", children: services.map(service =>
      h.jsx("li", { children: h.jsxs("a", { href: service.href, children: [
        h.jsxs("div", { className: "et-service-card-top", children: [
          h.jsx(ServiceIcon, { path: service.icon }),
          ["EasySupport", "EasyCloud", "EasyBusiness", "EasyWeb"].includes(service.name) && h.jsx("span", { className: "et-service-badge", children: service.badge }),
        ] }),
        h.jsx("strong", { children: service.name }),
        h.jsx("span", { className: "home-service-label", children: service.label }),
        h.jsx("span", { children: service.description }),
        h.jsx("span", { className: "home-service-details", children: "Details entdecken →" }),
      ] }) }, service.name)) }),
  ] });
}
