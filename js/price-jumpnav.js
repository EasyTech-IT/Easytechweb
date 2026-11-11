(() => {
  const root = document.querySelector("#root");
  if (!root) {
    console.error("Preisnavigation konnte nicht initialisiert werden: React-Wurzel fehlt.");
    return;
  }

  function setup() {
    if (root.querySelector(".et-price-jumpnav")) return true;

    const priceSections = [...root.querySelectorAll(".et-price-section")];
    const itPrices = priceSections.find((section) => section.querySelector(".et-price-list") && !section.querySelector(".et-comparison"));
    const video = root.querySelector(".et-video-prices");
    const webdesign = root.querySelector(".et-webdesign-packages");
    const comparison = priceSections.find((section) => section.querySelector(".et-comparison"));
    if (!itPrices || !video || !webdesign || !comparison) return false;

    const destinations = [
      { section: itPrices, id: "it-preise", label: "IT-Preise" },
      { section: video, id: "videografie-preise", label: "Videografie" },
      { section: webdesign, id: "preis-easyweb", label: "Webdesign" },
      { section: comparison, id: "leistungsvergleich", label: "Leistungsvergleich" },
    ];
    destinations.forEach(({ section, id }) => { section.id = id; });

    const nav = document.createElement("nav");
    nav.className = "et-price-jumpnav";
    nav.setAttribute("aria-label", "Preise auf dieser Seite");
    destinations.forEach(({ section, id, label }) => {
      const link = document.createElement("a");
      link.href = `#${id}`;
      link.textContent = label;
      link.addEventListener("click", (event) => {
        event.preventDefault();
        window.history.pushState(null, "", link.hash);
        section.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
          block: "start",
        });
      });
      nav.append(link);
    });
    itPrices.before(nav);

    const links = [...nav.querySelectorAll("a")];
    let updateScheduled = false;
    const updateCurrentLink = () => {
      updateScheduled = false;
      const current = [...destinations].reverse().find(({ section }) => section.getBoundingClientRect().top <= 150);
      links.forEach((link) => {
        if (current && link.hash === `#${current.id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };
    const scheduleCurrentLinkUpdate = () => {
      if (updateScheduled) return;
      updateScheduled = true;
      window.requestAnimationFrame(updateCurrentLink);
    };
    window.addEventListener("scroll", scheduleCurrentLinkUpdate, { passive: true });
    window.addEventListener("resize", scheduleCurrentLinkUpdate);
    updateCurrentLink();

    const requestedId = decodeURIComponent(window.location.hash.slice(1));
    const initialDestination = destinations.find(({ id }) => id === requestedId)
      || (requestedId === "preis-easyvisual" ? destinations[1] : null);
    if (initialDestination) {
      window.setTimeout(() => {
        initialDestination.section.scrollIntoView({ behavior: "instant", block: "start" });
      }, 500);
    }

    return true;
  }

  if (setup()) return;
  const observer = new MutationObserver(() => {
    if (setup()) {
      observer.disconnect();
      clearTimeout(timeout);
    }
  });
  observer.observe(root, { childList: true, subtree: true });
  const timeout = setTimeout(() => {
    observer.disconnect();
    console.error("Preisnavigation konnte nicht initialisiert werden: Preisbereiche wurden nicht gefunden.");
  }, 15000);
})();
