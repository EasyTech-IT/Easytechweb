import { j as h, r as React } from "./react-vendor-DAatkCok.js";
import { services } from "/assets/ServiceCatalog.js?v=2";

if (!document.querySelector('link[href="/css/home-service-links.css?v=7"]')) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = "/css/home-service-links.css?v=7";
  document.head.append(stylesheet);
}

export function HomeServiceLinks() {
  React.useLayoutEffect(() => {
    const hero = document.getElementById("initial-home-hero");
    if (!hero) return;
    hero.hidden = false;
    return () => { hero.hidden = true; };
  }, []);

  const images = {
    EasyBusiness: "ichon9.png", EasyAI: "ichon8.png", EasyHome: "ichon7.png",
    EasyLearn: "ichon10.png", EasyWeb: "ichon1.png", EasyVisual: "ichon2.png",
    EasyConnect: "ichon9.png", EasySupport: "ichon6.png", EasyPhone: "ichon7.png",
    EasyCloud: "ichon9.png", EasyProtect: "ichon6.png", EasyLiving: "ichon7.png",
  };
  const groups = [
    ["Hauptleistungen", services.slice(6)],
    ["Weitere IT-Leistungen", services.slice(0, 6)],
  ];
  return h.jsx("div", { className: "home-service-links", children: groups.map(([heading, items]) => h.jsxs("section", { className: "home-service-group", children: [
    h.jsx("h3", { children: heading }),
    h.jsx("p", { className: "et-service-scroll-hint", children: "Weitere Leistungen seitlich ansehen →" }),
    h.jsx("ul", { tabIndex: 0, "aria-label": heading, children: items.map(service =>
      h.jsx("li", { children: h.jsxs("a", { href: service.href, children: [
        h.jsxs("div", { className: "et-service-card-top", children: [
          h.jsx("img", { className: "home-service-image", src: `/assets/${images[service.name]}`, width: 64, height: 64, loading: "lazy", alt: "" }),
          ["EasySupport", "EasyCloud", "EasyBusiness", "EasyWeb"].includes(service.name) && h.jsx("span", { className: "et-service-badge", children: service.badge }),
        ] }),
        h.jsx("strong", { children: service.name }),
        h.jsx("span", { className: "home-service-label", children: service.label }),
        h.jsx("span", { children: service.description }),
        h.jsx("span", { className: "home-service-details", children: "Details entdecken →" }),
      ] }) }, service.name)) }),
  ] }, heading)) });
}
