(() => {
  const base = "https://easytechit.de";
  const logo = `${base}/assets/EasyTech%20Logo.png`;
  const pageMetadata = {
    "/": {
      title: "Webdesign & IT-Services Altenstadt | EasyTech IT-Solutions",
      description:
        "EasyTech IT-Solutions aus Altenstadt: Webdesign, individuelle Webentwicklung und IT-Services für Unternehmen und Privatpersonen.",
    },
    "/webdesign": {
      title: "Webdesign in Altenstadt | EasyTech IT-Solutions",
      description:
        "Responsive Webdesign aus Altenstadt mit klarer Nutzerführung und SEO-Grundlagen. Die Pakete reichen von Smart für 1.999 EUR bis Enterprise ab 4.500 EUR.",
    },
    "/it/business": {
      title: "IT-Betreuung für Unternehmen in Altenstadt | EasyTech IT-Solutions",
      description:
        "IT-Betreuung und IT-Support für kleine und mittlere Unternehmen in Altenstadt: Arbeitsplätze, Netzwerke, IT-Sicherheit und laufende Unterstützung.",
    },
    "/it/privat": {
      title: "IT-Service für Privatkunden | EasyTech IT-Solutions Altenstadt",
      description:
        "IT-Service in Altenstadt für private Haushalte: Hilfe bei WLAN, Computer, Smart Home und Datensicherung – verständlich und persönlich.",
    },
    "/it/ki-beratung": {
      title: "KI-Beratung und Automatisierung | EasyTech IT-Solutions Altenstadt",
      description:
        "EasyTech IT-Solutions unterstützt Unternehmen bei der Einordnung von KI-Anwendungsfällen und der Automatisierung wiederkehrender Geschäftsprozesse.",
    },
    "/videografie": {
      title: "Videografie & Social Media Content Altenstadt | EasyTech IT-Solutions",
      description:
        "Videografie und Social-Media-Inhalte für Unternehmen: Reels, Imagefilme und Motion Design von EasyTech IT-Solutions.",
    },
    "/projekte": {
      title: "Webdesign-Projekte | EasyTech IT-Solutions Altenstadt",
      description:
        "Ausgewählte Webdesign-Projekte und digitale Lösungen von EasyTech IT-Solutions aus Altenstadt.",
    },
    "/preise": {
      title: "Webdesign-Preise und Angebote | EasyTech IT-Solutions",
      description:
        "Webdesign-Pakete: Smart 1.999 EUR, Business 2.799 EUR und Enterprise ab 4.500 EUR. Umfang und Zeiten ansehen und ein passendes Angebot anfragen.",
    },
    "/ueber-mich": {
      title: "Über EasyTech IT-Solutions | Ahsin Ghumman, Altenstadt",
      description:
        "Lernen Sie Ahsin Ghumman und EasyTech IT-Solutions in Altenstadt kennen – persönliche Beratung zu Webdesign und IT-Lösungen.",
    },
    "/kontakt": {
      title: "Kontakt | EasyTech IT-Solutions Altenstadt",
      description:
        "Kontaktieren Sie EasyTech IT-Solutions in Altenstadt zu Webdesign, IT-Betreuung oder digitalen Lösungen.",
    },
    "/impressum": {
      title: "Impressum | EasyTech IT-Solutions Altenstadt",
      description:
        "Anbieterkennzeichnung und Kontaktdaten von EasyTech IT-Solutions, Inhaber Ahsin Ghumman, in Altenstadt.",
    },
    "/datenschutz": {
      title: "Datenschutzerklärung | EasyTech IT-Solutions",
      description:
        "Informationen zur Verarbeitung personenbezogener Daten auf der Website von EasyTech IT-Solutions und zu den Rechten betroffener Personen.",
    },
  };

  function setMeta(name, content, property = false) {
    const attribute = property ? "property" : "name";
    let element = document.head.querySelector(`meta[${attribute}="${name}"]`);

    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }

    if (element.content !== content) {
      element.content = content;
    }
  }

  function normalizeStructuredData(value) {
    if (Array.isArray(value)) {
      return value.map(normalizeStructuredData);
    }

    if (!value || typeof value !== "object") {
      return value;
    }

    for (const key of [
      "aggregateRating",
      "areaServed",
      "foundingDate",
      "geo",
      "numberOfEmployees",
      "openingHoursSpecification",
      "priceRange",
    ]) {
      delete value[key];
    }

    if (value["@type"] === "PostalAddress") {
      value.addressRegion = "Hessen";
    }

    for (const child of Object.values(value)) {
      normalizeStructuredData(child);
    }

    return value;
  }

  function cleanStructuredData() {
    for (const script of document.head.querySelectorAll(
      'script[type="application/ld+json"]',
    )) {
      try {
        const data = JSON.parse(script.textContent);
        const cleaned = JSON.stringify(normalizeStructuredData(data));

        if (script.textContent !== cleaned) {
          script.textContent = cleaned;
        }
      } catch (error) {
        console.error("Could not validate page structured data.", error);
      }
    }
  }

  function removeUnverifiedHomeClaims() {
    const root = document.getElementById("root");

    if (!root || (window.location.pathname.replace(/\/+$/, "") || "/") !== "/") {
      return;
    }

    let removedStatistics = false;
    let removedResponseCard = false;
    let removedResponseComparison = false;
    const removeClaims = () => {
      const section = [...root.querySelectorAll("section")].find((element) => {
        const text = element.textContent || "";
        return (
          text.includes("In Zahlen") &&
          text.includes("Kundenzufriedenheit") &&
          text.includes("Uptime")
        );
      });

      if (section) {
        section.remove();
        removedStatistics = true;
      }

      const responseCard = [...root.querySelectorAll("div.group.relative.h-full")].find(
        (element) => (element.textContent || "").includes("24h"),
      );

      if (responseCard) {
        responseCard.remove();
        removedResponseCard = true;
      }

      const responseLabel = [...root.querySelectorAll("span")].find(
        (element) => element.textContent.trim() === "24h Reaktionszeit",
      );

      if (responseLabel) {
        responseLabel.closest("div.grid.items-center")?.remove();
        removedResponseComparison = true;
      }

      if (removedStatistics && removedResponseCard && removedResponseComparison) {
        observer.disconnect();
      }
    };
    const observer = new MutationObserver(removeClaims);

    observer.observe(root, { childList: true, subtree: true });
    removeClaims();
  }

  function addRatgeberNavigationLink() {
    const root = document.getElementById("root");

    if (!root || window.location.pathname.startsWith("/insights/")) {
      return;
    }

    const addLink = () => {
      const navigation = root.querySelector("nav");

      if (!navigation || navigation.querySelector('a[href="/insights/"]')) {
        return;
      }

      const reference =
        navigation.querySelector('a[href="/ueber-mich"]') ||
        navigation.querySelector('a[href="/kontakt"]');

      if (!reference) {
        return;
      }

      const link = document.createElement("a");
      link.href = "/insights/";
      link.className = reference.className;
      link.textContent = "IT-Ratgeber";
      link.setAttribute("aria-label", "IT-Ratgeber und Praxistipps");
      const contactLink = navigation.querySelector('a[href="/kontakt"]');

      if (contactLink) {
        contactLink.before(link);
      } else {
        reference.after(link);
      }
    };
    const observer = new MutationObserver(addLink);

    observer.observe(root, { childList: true, subtree: true });
    addLink();
  }

  function synchronizePageMetadata() {
    const path = window.location.pathname.replace(/\/+$/, "") || "/";
    const metadata = pageMetadata[path];

    if (!metadata) {
      return;
    }

    const canonical = `${base}${path === "/" ? "/" : `${path}/`}`;
    const canonicalLink =
      document.head.querySelector('link[rel="canonical"]') ||
      document.head.appendChild(document.createElement("link"));
    if (canonicalLink.getAttribute("rel") !== "canonical") {
      canonicalLink.rel = "canonical";
    }

    if (canonicalLink.href !== canonical) {
      canonicalLink.href = canonical;
    }

    if (document.title !== metadata.title) {
      document.title = metadata.title;
    }

    setMeta("description", metadata.description);
    setMeta("og:type", "website", true);
    setMeta("og:url", canonical, true);
    setMeta("og:site_name", "EasyTech IT-Solutions", true);
    setMeta("og:title", metadata.title, true);
    setMeta("og:description", metadata.description, true);
    setMeta("og:image", logo, true);
    setMeta("og:image:secure_url", logo, true);
    setMeta("og:image:type", "image/png", true);
    setMeta("og:image:alt", "EasyTech IT-Solutions", true);
    setMeta("og:locale", "de_DE", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", metadata.title);
    setMeta("twitter:description", metadata.description);
    setMeta("twitter:image", logo);

    for (const name of [
      "geo.region",
      "geo.placename",
      "geo.position",
      "ICBM",
      "keywords",
    ]) {
      document.head.querySelectorAll(`meta[name="${name}"]`).forEach((element) => {
        element.remove();
      });
    }

    cleanStructuredData();
  }

  synchronizePageMetadata();
  removeUnverifiedHomeClaims();
  addRatgeberNavigationLink();
  new MutationObserver(synchronizePageMetadata).observe(document.head, {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
  });
})();
