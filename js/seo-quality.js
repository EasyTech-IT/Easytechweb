(() => {
  const base = "https://easytechit.de";
  const logo = `${base}/assets/EasyTech%20Logo.png`;
  const analyticsId = "G-NZ8HRV390B";
  const verifiedProfileUrls = [
    "https://maps.app.goo.gl/JpRggCaiTpdMQ6ST8",
    "https://github.com/EasyTech-IT",
    "https://www.11880.com/branchenbuch/buedingen-hessen/061752713B114234499/easytech-it-solutions.html",
  ];
  const consentKey = "ja-itc-cookie-consent";
  const pageMetadata = {
    "/": {
      title: "IT, Webdesign & digitale Lösungen Altenstadt | EasyTech",
      description:
        "IT-Service, Webdesign und digitale Lösungen für Unternehmen in Altenstadt, der Wetterau und Umgebung. EasyTech unterstützt regional und persönlich.",
    },
    "/webdesign": {
      title: "Webdesign für Unternehmen in Altenstadt & Wetterau | EasyTech",
      description:
        "Webdesign für Unternehmen in Altenstadt und der Wetterau: responsive Firmenwebsites mit klarer Struktur, Nutzerführung und technischer SEO-Grundlage.",
    },
    "/it/business": {
      title: "IT-Service Altenstadt: IT-Betreuung für Unternehmen | EasyTech",
      description:
        "IT-Betreuung für Unternehmen in Altenstadt und der Wetterau: Support für Arbeitsplätze, Geräte, Netzwerke und Server im regionalen Kerngebiet.",
    },
    "/it/privat": {
      title: "Computerhilfe für Privatkunden in Altenstadt | EasyTech",
      description:
        "Computerhilfe in Altenstadt für Privatkunden: Unterstützung bei PC-Problemen, WLAN, Geräteeinrichtung und Datensicherung – persönlich und verständlich.",
    },
    "/it/ki-beratung": {
      title: "Digitalisierung & KI-Automatisierung für KMU | EasyTech",
      description:
        "Digitalisierung und KI-Automatisierung für Unternehmen in Altenstadt und der Wetterau. Wiederkehrende Abläufe prüfen und passende Workflows planen.",
    },
    "/videografie": {
      title: "Videografie für Unternehmen | Imagefilm & Reels Altenstadt",
      description:
        "Videoproduktion in Altenstadt: Imagefilme, Social-Media-Videos, Reels und Motion Design f?r Website und Kampagnen.",
    },
    "/projekte": {
      title: "Webdesign-Projekte | EasyTech IT-Solutions Altenstadt",
      description:
        "Ausgewählte Webdesign-Projekte und digitale Lösungen von EasyTech IT-Solutions aus Altenstadt. Entdecken Sie Referenzen und Ideen für Ihr Vorhaben.",
    },
    "/preise": {
      title: "Webdesign-Preise und Angebote | EasyTech IT-Solutions",
      description:
        "Webdesign-Pakete: Smart 1.999 EUR, Business 2.799 EUR und Enterprise ab 4.500 EUR. Umfang und Zeiten ansehen und ein passendes Angebot anfragen.",
    },
    "/ueber-mich": {
      title: "Über EasyTech IT-Solutions | Ahsin Ghumman, Altenstadt",
      description:
        "Lernen Sie Ahsin Ghumman und EasyTech IT-Solutions aus Altenstadt kennen: pers?nliche Beratung f?r Webdesign und IT-Betreuung.",
    },
    "/kontakt": {
      title: "Kontakt | EasyTech IT-Solutions Altenstadt",
      description:
        "Kontakt zu EasyTech IT-Solutions in Altenstadt: Fragen zu Webdesign, IT-Betreuung, Videografie oder KI-Automatisierung stellen und eine Beratung anfragen.",
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

  function getConsentPreferences() {
      try {
        const saved = window.localStorage.getItem(consentKey);
        return saved ? JSON.parse(saved) : null;
      } catch (error) {
        console.error("Could not read cookie preferences.", error);
        return null;
      }
    }

    function syncAnalyticsConsent() {
      const analyticsState = getConsentPreferences()?.analytics === true ? "granted" : "denied";
      if (analyticsState === "denied") {
        window[`ga-disable-${analyticsId}`] = true;
        if (window.__easytechAnalyticsState === "granted") {
          window.location.reload();
        }
        window.__easytechAnalyticsState = analyticsState;
        return;
      }

      window[`ga-disable-${analyticsId}`] = false;
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function gtag() {
        window.dataLayer.push(arguments);
      };

      if (!document.getElementById("easytech-google-analytics")) {
        window.gtag("consent", "default", {
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
          analytics_storage: "granted",
        });
        window.gtag("set", "ads_data_redaction", true);
        window.gtag("js", new Date());
        window.gtag("config", analyticsId, {
          allow_google_signals: false,
          allow_ad_personalization_signals: false,
        });

        const script = document.createElement("script");
        script.id = "easytech-google-analytics";
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
        document.head.appendChild(script);
      }

      if (window.__easytechAnalyticsState !== analyticsState) {
        window.__easytechAnalyticsState = analyticsState;
        window.gtag("consent", "update", { analytics_storage: analyticsState });
      }
    }

    function setupAnalyticsConsent() {
      if (window.__easytechAnalyticsConsentReady) {
        return;
      }

      window.__easytechAnalyticsConsentReady = true;
      syncAnalyticsConsent();
      window.addEventListener("storage", (event) => {
        if (event.key === consentKey) {
          syncAnalyticsConsent();
        }
      });
      window.addEventListener("ja-itc-reopen-cookie-banner", syncAnalyticsConsent);
      document.addEventListener("click", (event) => {
        if (event.target instanceof Element && event.target.closest("button")) {
          window.setTimeout(syncAnalyticsConsent, 0);
        }
      });
    }

    function updatePrivacyNotice() {
      if ((window.location.pathname.replace(/\/+$/, "") || "/") !== "/datenschutz") {
        return;
      }

      const root = document.getElementById("root");
      if (!root) {
        return;
      }
      if (root.querySelector("[data-privacy-service-notices]")) {
        return;
      }

      const divider = [...root.querySelectorAll("div")].find((element) => (
        element.className === "border-t border-[#ebeced] my-10"
      ));
      if (!divider) {
        return;
      }

      const accessHeading = [...root.querySelectorAll("h3")].find((heading) => (
        heading.textContent.includes("Zugriffsdaten und Hosting")
      ));
      const accessCopy = accessHeading?.nextElementSibling;
      const logDescription = [...(accessCopy?.querySelectorAll("p") || [])].find((paragraph) => (
        paragraph.textContent.includes("Diese Daten dienen dem sicheren Betrieb")
      ));
      if (logDescription) {
        logDescription.textContent =
          "Die Verarbeitung dieser Zugriffsdaten ist erforderlich, um die Website sicher und zuverlässig bereitzustellen und Angriffe oder technische Störungen zu erkennen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.";
      }

      const hostingNote = [...(accessCopy?.querySelectorAll("p") || [])].find((paragraph) => (
        paragraph.textContent.includes("Hosting:")
      ));
      if (hostingNote) {
        hostingNote.replaceChildren();
        const label = document.createElement("span");
        label.className = "text-[#2e4a6f]";
        label.style.fontWeight = "500";
        label.textContent = "Hosting:";
        hostingNote.append(
          label,
          document.createTextNode(
            " Diese Website wird bei der IONOS SE gehostet. Dabei verarbeitet IONOS technische Zugriffsdaten, die für die Auslieferung und Sicherheit der Website erforderlich sind. Mit IONOS besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO. Informationen zum Datenschutz bei IONOS finden Sie unter ",
          ),
        );
        const link = document.createElement("a");
        link.href = "https://www.ionos.de/terms-gtc/datenschutzerklaerung/";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.className = "text-[#2e4a6f] hover:text-[#000000] transition-colors";
        link.style.fontWeight = "500";
        link.textContent = "IONOS Datenschutz";
        hostingNote.append(link, document.createTextNode("."));
      }

      const rightsHeading = [...root.querySelectorAll("h3")].find((heading) => (
        heading.textContent.includes("Ihre Rechte")
      ));
      const rightsCopy = rightsHeading?.nextElementSibling;
      if (rightsCopy && !rightsCopy.querySelector("[data-privacy-rights-addition]")) {
        const rightsNote = document.createElement("p");
        rightsNote.dataset.privacyRightsAddition = "";
        rightsNote.className = "mt-3";
        rightsNote.append(
          document.createTextNode(
            "Sie können eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Außerdem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Für Hessen ist dies der ",
          ),
        );
        const authorityLink = document.createElement("a");
        authorityLink.href = "https://datenschutz.hessen.de/";
        authorityLink.target = "_blank";
        authorityLink.rel = "noopener noreferrer";
        authorityLink.className = "text-[#2e4a6f] hover:text-[#000000] transition-colors";
        authorityLink.style.fontWeight = "500";
        authorityLink.textContent = "Hessische Beauftragte für Datenschutz und Informationsfreiheit";
        rightsNote.append(authorityLink, document.createTextNode("."));
        rightsCopy.append(rightsNote);
      }

      const notices = document.createElement("div");
      notices.dataset.privacyServiceNotices = "";
      notices.className = "grid sm:grid-cols-2 gap-x-16 gap-y-10 mb-10";
      notices.innerHTML = `
        <section class="relative">
          <div class="flex items-start gap-4 sm:gap-5">
            <div class="shrink-0 w-[44px] h-[44px] rounded-full bg-[#f0f4f8] flex items-center justify-center">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-[18px] h-[18px] text-[#2e4a6f]"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-[18px] sm:text-[20px] text-[#0a0a0b] mb-3 tracking-[-0.01em]" style="font-family:'Satoshi',sans-serif;font-weight:700;line-height:1.3">Kontaktformular und E-Mail</h3>
              <div class="text-[17px] text-[#404040] space-y-3" style="font-family:'Inter',sans-serif;line-height:1.7">
                <p>Wenn Sie das Kontaktformular oder den Digital-Check absenden, verarbeiten wir die von Ihnen eingegebenen Angaben, insbesondere Name, E-Mail-Adresse, gegebenenfalls Telefonnummer und Unternehmen, gewünschte Leistung sowie Ihre Nachricht und Check-Antworten. Die Angaben werden an info@easytechit.de übermittelt und zur Bearbeitung Ihrer Anfrage verwendet.</p>
                <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage auf einen Vertrag oder vorvertragliche Maßnahmen gerichtet ist. Wir bewahren die Anfrage so lange auf, wie dies für die Bearbeitung erforderlich ist, und löschen sie spätestens 6 Monate nach Abschluss der Bearbeitung, sofern kein Vertrag zustande kommt. Kommt ein Vertrag zustande, gelten die gesetzlichen Aufbewahrungsfristen.</p>
              </div>
            </div>
          </div>
        </section>
        <section class="relative">
          <div class="flex items-start gap-4 sm:gap-5">
            <div class="shrink-0 w-[44px] h-[44px] rounded-full bg-[#f0f4f8] flex items-center justify-center">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-[18px] h-[18px] text-[#2e4a6f]"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-[18px] sm:text-[20px] text-[#0a0a0b] mb-3 tracking-[-0.01em]" style="font-family:'Satoshi',sans-serif;font-weight:700;line-height:1.3">Google Analytics 4</h3>
              <div class="text-[17px] text-[#404040] space-y-3" style="font-family:'Inter',sans-serif;line-height:1.7">
                <p>Wir nutzen Google Analytics 4, um die Nutzung unserer Website statistisch auszuwerten. Das Google-Tag wird erst geladen, wenn Sie in den Cookie-Einstellungen der Kategorie „Analyse“ zustimmen. Dabei können Analyse-Cookies gesetzt und Nutzungs-, Geräte- und Browserinformationen sowie aufgerufene Seiten und Interaktionen verarbeitet werden. Werbefunktionen und Personalisierung sind deaktiviert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO bzw. § 25 Abs. 1 TDDDG. Sie können Ihre Auswahl jederzeit über „Cookie-Einstellungen“ ändern oder widerrufen. Ereignisdaten werden in Google Analytics 2 Monate, Nutzerdaten (mit Cookies, Nutzer- oder Werbe-IDs verknüpft) 14 Monate gespeichert; danach werden sie automatisch gelöscht.</p>
                <p>Anbieter ist Google Ireland Limited. Eine Verarbeitung durch Google LLC in den USA kann nicht ausgeschlossen werden. Weitere Informationen: <a class="text-[#2e4a6f] hover:text-[#000000] transition-colors" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Datenschutzerklärung von Google</a>.</p>
              </div>
            </div>
          </div>
        </section>
        <section class="relative">
          <div class="flex items-start gap-4 sm:gap-5">
            <div class="shrink-0 w-[44px] h-[44px] rounded-full bg-[#f0f4f8] flex items-center justify-center">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-[18px] h-[18px] text-[#2e4a6f]"><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-[18px] sm:text-[20px] text-[#0a0a0b] mb-3 tracking-[-0.01em]" style="font-family:'Satoshi',sans-serif;font-weight:700;line-height:1.3">SiteLock Trust Seal</h3>
              <div class="text-[17px] text-[#404040] space-y-3" style="font-family:'Inter',sans-serif;line-height:1.7">
                <p>Das SiteLock-Sicherheitssiegel wird nur geladen, wenn Sie externe Inhalte in den Cookie-Einstellungen erlauben. Beim Laden wird eine Verbindung zu SiteLock hergestellt; dabei werden insbesondere Ihre IP-Adresse und technische Browserdaten übermittelt, damit das Siegel angezeigt werden kann. Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Sie können diese jederzeit in den Cookie-Einstellungen widerrufen; danach wird das Siegel nicht weiter geladen.</p>
                <p>SiteLock, LLC ist ein US-amerikanischer Anbieter. Laut dessen Datenschutzhinweisen können Daten in den USA und im Vereinigten Königreich verarbeitet werden. Beim Klick auf das Siegel wird außerdem die SiteLock-Prüfseite geöffnet. <a class="text-[#2e4a6f] hover:text-[#000000] transition-colors" href="https://www.sitelock.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Datenschutzhinweise von SiteLock</a>.</p>
              </div>
            </div>
          </div>
        </section>`;
      divider.before(notices);

      const updatedNote = [...root.querySelectorAll("p")].find((paragraph) => (
        paragraph.textContent.includes("Diese Datenschutzerklärung wurde zuletzt")
      ));
      if (updatedNote) {
        updatedNote.textContent =
          "Diese Datenschutzerklärung wurde zuletzt am 9. November 2026 aktualisiert und gilt für die Website von EasyTech IT-Solutions.";
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

    const types = Array.isArray(value["@type"]) ? value["@type"] : [value["@type"]];
    if (types.includes("Organization") || types.includes("LocalBusiness")) {
      value.sameAs = verifiedProfileUrls;
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

  function synchronizeBusinessStructuredData(path, metadata, canonical) {
    const scriptId = "easytech-seo-knowledge-graph";
    let script = document.getElementById(scriptId);

    if (path === "/") {
      script?.remove();
      return;
    }

    const organizationId = `${base}/#organization`;
    const websiteId = `${base}/#website`;
    const graph = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": organizationId,
          name: "EasyTech IT-Solutions",
          url: `${base}/`,
          logo,
          email: "info@easytechit.de",
          telephone: "+4960479974441",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Mittelstraße 63",
            postalCode: "63674",
            addressLocality: "Altenstadt",
            addressRegion: "Hessen",
            addressCountry: "DE",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+4960479974441",
            email: "info@easytechit.de",
            contactType: "customer service",
            availableLanguage: "German",
          },
          sameAs: verifiedProfileUrls,
        },
        {
          "@type": "WebSite",
          "@id": websiteId,
          name: "EasyTech IT-Solutions",
          url: `${base}/`,
          publisher: { "@id": organizationId },
          inLanguage: "de-DE",
        },
        {
          "@type": "WebPage",
          "@id": `${canonical}#webpage`,
          name: metadata.title,
          description: metadata.description,
          url: canonical,
          isPartOf: { "@id": websiteId },
          about: { "@id": organizationId },
          inLanguage: "de-DE",
        },
      ],
    };
    const content = JSON.stringify(graph);

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    if (script.textContent !== content) {
      script.textContent = content;
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

  function loadSiteEnhancements() {
    if (!document.querySelector('link[rel="stylesheet"][href="/css/digital-check.css?v=4"]')) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "/css/digital-check.css?v=4";
      document.head.appendChild(stylesheet);
    }

    for (const source of ["/js/digital-check.js?v=6"]) {
      const script = document.createElement("script");
      script.src = source;
      document.body.appendChild(script);
    }
  }

  function deferOffscreenImages() {
    const createElement = document.createElement;
    document.createElement = function createLazyImage(tagName, options) {
      const element = createElement.call(document, tagName, options);
      if (String(tagName).toLowerCase() === "img") {
        element.loading = "lazy";
      }
      return element;
    };

    const markAsLazy = (node) => {
      if (!(node instanceof HTMLImageElement)) {
        return;
      }

      if (
        node.fetchPriority === "high" ||
        node.getBoundingClientRect().top <= window.innerHeight
      ) {
        node.loading = "eager";
        return;
      }

      node.loading = "lazy";
      node.decoding = "async";
    };

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          markAsLazy(node);
          if (node instanceof Element) {
            node.querySelectorAll("img").forEach(markAsLazy);
          }
        }
      }
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });
    document.querySelectorAll("img").forEach(markAsLazy);
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

    synchronizeBusinessStructuredData(path, metadata, canonical);
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

  deferOffscreenImages();
  synchronizePageMetadata();
  setupAnalyticsConsent();
  updatePrivacyNotice();
  removeUnverifiedHomeClaims();
  addRatgeberNavigationLink();
  loadSiteEnhancements();
  new MutationObserver(synchronizePageMetadata).observe(document.head, {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
  });
  const root = document.getElementById("root");
  if (root) {
    new MutationObserver(updatePrivacyNotice).observe(root, {
      childList: true,
      subtree: true,
    });
  }
})();
