(() => {
  const unsure = ["Weiß ich nicht", "help"];
  const sizeQuestion = ["Wie viele Personen arbeiten bei Ihnen?", [["1–5", "user"], ["6–20", "users"], ["21–50", "building"], ["Mehr als 50", "building"]]];
  const goalQuestion = ["Was ist Ihnen am wichtigsten?", [["Mehr Anfragen", "target"], ["Zeit sparen", "clock"], ["Mehr Sicherheit", "shield"], ["Besserer Auftritt", "sparkles"]]];

  const services = [
    {
      id: "it-support",
      title: "IT-Betreuung & Support",
      description: "Support, Wartung, Sicherheit",
      icon: "tools",
      questions: [
        ["Wie oft gibt es IT-Störungen?", [["Selten", "check"], ["Manchmal", "clock"], ["Oft", "alert"], unsure]],
        ["Wer hilft aktuell bei IT-Problemen?", [["Interner Ansprechpartner", "user"], ["Externer Dienstleister", "tools"], ["Niemand fest", "alert"], unsure]],
        ["Wie werden Updates erledigt?", [["Automatisch", "bolt"], ["Manuell", "tools"], ["Eher selten", "alert"], unsure]],
        ["Gibt es regelmäßige Backups?", [["Ja, getestet", "shield"], ["Ja, ungetestet", "cloud"], ["Nein", "alert"], unsure]],
        sizeQuestion,
      ],
    },
    {
      id: "netzwerk",
      title: "Netzwerk & WLAN",
      description: "Abdeckung, Ausfälle, Zugang",
      icon: "wifi",
      questions: [
        ["Wie stabil ist Ihr WLAN?", [["Überall stabil", "check"], ["Einzelne Funklöcher", "wifi"], ["Oft Abbrüche", "alert"], unsure]],
        ["Wo gibt es Probleme?", [["Büro", "building"], ["Lager / Halle", "devices"], ["Außenbereich", "globe"], ["Keine", "check"]]],
        ["Gibt es ein separates Gäste-WLAN?", [["Ja", "check"], ["Nein", "alert"], unsure]],
        ["Ist das Netzwerk dokumentiert?", [["Ja", "doc"], ["Teilweise", "doc"], ["Nein", "alert"], unsure]],
        sizeQuestion,
      ],
    },
    {
      id: "website",
      title: "Webdesign & Website",
      description: "Auftritt, Mobilansicht, Anfragen",
      icon: "globe",
      questions: [
        ["Haben Sie schon eine Website?", [["Ja, aktuell", "check"], ["Ja, veraltet", "clock"], ["Noch nicht", "alert"]]],
        ["Was soll die Website leisten?", [["Mehr Anfragen", "target"], ["Seriös wirken", "sparkles"], ["Produkte verkaufen", "euro"], ["Informieren", "doc"]]],
        ["Wie wirkt sie auf dem Handy?", [["Sehr gut", "mobile"], ["Okay", "mobile"], ["Schlecht", "alert"], unsure]],
        ["Wie schnell lädt sie?", [["Schnell", "bolt"], ["Mittel", "clock"], ["Langsam", "alert"], unsure]],
        ["Wann soll es losgehen?", [["So schnell wie möglich", "bolt"], ["In 1–3 Monaten", "clock"], ["Noch offen", "help"]]],
      ],
    },
    {
      id: "seo",
      title: "SEO & lokale Sichtbarkeit",
      description: "Auffindbarkeit bei Google",
      icon: "search",
      questions: [
        ["Werden Sie bei Google gefunden?", [["Ja, gut", "check"], ["Kaum", "search"], ["Gar nicht", "alert"], unsure]],
        ["Wo suchen Ihre Kunden?", [["In meiner Region", "target"], ["Deutschlandweit", "globe"], ["Beides", "users"]]],
        ["Gibt es ein Google-Unternehmensprofil?", [["Ja, gepflegt", "check"], ["Ja, ungepflegt", "clock"], ["Nein", "alert"], unsure]],
        ["Wie oft kommen neue Inhalte dazu?", [["Regelmäßig", "check"], ["Selten", "clock"], ["Nie", "alert"]]],
        goalQuestion,
      ],
    },
    {
      id: "automation",
      title: "KI & Automatisierung",
      description: "Prozesse und KI-Einsatz",
      icon: "sparkles",
      questions: [
        ["Welche Aufgaben kosten Zeit?", [["E-Mails & Anfragen", "mail"], ["Angebote & Rechnungen", "doc"], ["Terminplanung", "clock"], ["Daten übertragen", "cloud"]]],
        ["Wie viel Zeit geht dafür drauf?", [["Unter 2 Std./Woche", "clock"], ["2–10 Std.", "clock"], ["Über 10 Std.", "alert"], unsure]],
        ["Nutzen Sie bereits KI-Tools?", [["Ja, regelmäßig", "check"], ["Ausprobiert", "sparkles"], ["Noch nicht", "alert"]]],
        ["Welche Daten sind beteiligt?", [["Kundendaten", "users"], ["Interne Dokumente", "doc"], ["Nur öffentliche Daten", "globe"], unsure]],
        sizeQuestion,
      ],
    },
    {
      id: "social",
      title: "Social Media & Videografie",
      description: "Content, Videos, Reichweite",
      icon: "video",
      questions: [
        ["Was brauchen Sie?", [["Imagevideo", "video"], ["Social-Media-Content", "camera"], ["Drohnenaufnahmen", "camera"], ["Weiß ich noch nicht", "help"]]],
        ["Wo soll der Inhalt laufen?", [["Instagram / TikTok", "mobile"], ["Website", "globe"], ["YouTube", "video"], ["Überall", "users"]]],
        ["Wie oft wollen Sie posten?", [["Täglich", "bolt"], ["Wöchentlich", "clock"], ["Monatlich", "clock"], unsure]],
        ["Haben Sie schon Material?", [["Ja, viel", "check"], ["Etwas", "camera"], ["Nein", "alert"]]],
        goalQuestion,
      ],
    },
    {
      id: "digitalization",
      title: "Geräte-Setup & Digitalisierung",
      description: "Geräte, Daten, Abläufe",
      icon: "devices",
      questions: [
        ["Was soll eingerichtet werden?", [["Neuer PC / Laptop", "devices"], ["Smartphone / Tablet", "mobile"], ["Drucker & Zubehör", "tools"], ["Mehrere Geräte", "users"]]],
        ["Müssen Daten übernommen werden?", [["Ja, viele", "cloud"], ["Ein paar", "doc"], ["Nein", "check"]]],
        ["Wie sieht Ihre Sicherung aus?", [["Backup vorhanden", "shield"], ["Nur teilweise", "clock"], ["Keine", "alert"], unsure]],
        ["Brauchen Sie eine Einweisung?", [["Ja", "user"], ["Kurz", "clock"], ["Nein", "check"]]],
        ["Für wen ist es?", [["Privat", "user"], ["Familie", "users"], ["Kleine Firma", "building"]]],
      ],
    },
  ];
  const industryQuestion = ["Aus welcher Branche kommen Sie?", [["Handwerk / Bau", "tools"], ["Handel / Gastro", "euro"], ["Dienstleistung", "users"], ["Sonstiges", "building"]]];
  const budgetQuestion = ["Welches Budget ist geplant?", [["Unter 1.000 €", "euro"], ["1.000–5.000 €", "euro"], ["Über 5.000 €", "euro"], ["Noch offen", "help"]]];
  const timeQuestion = ["Wann soll es starten?", [["Sofort", "bolt"], ["In 1–3 Monaten", "clock"], ["Später", "clock"], ["Noch offen", "help"]]];
  const contactQuestion = ["Wie erreichen wir Sie am besten?", [["E-Mail", "mail"], ["Telefon", "user"], ["WhatsApp", "mobile"], ["Egal", "check"]]];
  const experienceQuestion = ["Wie zufrieden sind Sie aktuell?", [["Sehr zufrieden", "check"], ["Geht so", "clock"], ["Unzufrieden", "alert"], unsure]];

  const extraQuestions = {
    "it-support": [
      industryQuestion,
      ["Wie viele Geräte nutzen Sie?", [["1–10", "devices"], ["11–30", "devices"], ["Über 30", "building"], unsure]],
      ["Wo liegen Ihre Daten?", [["Lokal im Büro", "building"], ["In der Cloud", "cloud"], ["Gemischt", "devices"], unsure]],
      ["Gibt es Regeln für Passwörter & Zugänge?", [["Ja, klar geregelt", "shield"], ["Teilweise", "clock"], ["Nein", "alert"], unsure]],
      experienceQuestion,
      budgetQuestion,
      timeQuestion,
    ],
    netzwerk: [
      industryQuestion,
      ["Wie groß ist die Fläche?", [["Unter 100 m²", "building"], ["100–500 m²", "building"], ["Über 500 m²", "globe"], unsure]],
      ["Wie viele Geräte sind verbunden?", [["Unter 10", "devices"], ["10–30", "devices"], ["Über 30", "users"], unsure]],
      ["Gibt es Netzwerk-Geräte wie Drucker oder Kameras?", [["Drucker", "tools"], ["Kameras", "camera"], ["Beides", "devices"], ["Nein", "check"]]],
      experienceQuestion,
      budgetQuestion,
      timeQuestion,
    ],
    website: [
      industryQuestion,
      ["Wie viele Seiten brauchen Sie?", [["1–5", "doc"], ["6–15", "doc"], ["Über 15", "doc"], unsure]],
      ["Welche Funktionen sind wichtig?", [["Kontaktformular", "mail"], ["Terminbuchung", "clock"], ["Online-Shop", "euro"], ["Nur Infos", "doc"]]],
      ["Gibt es Logo und Texte?", [["Alles vorhanden", "check"], ["Teilweise", "clock"], ["Nichts", "alert"]]],
      budgetQuestion,
      timeQuestion,
      contactQuestion,
    ],
    seo: [
      industryQuestion,
      ["Wie viele Seiten hat Ihre Website?", [["1–5", "doc"], ["6–20", "doc"], ["Über 20", "doc"], unsure]],
      ["Gibt es Kundenbewertungen online?", [["Viele", "check"], ["Wenige", "clock"], ["Keine", "alert"], unsure]],
      ["Messen Sie Besucherzahlen?", [["Ja, regelmäßig", "check"], ["Selten", "clock"], ["Nein", "alert"], unsure]],
      budgetQuestion,
      timeQuestion,
      contactQuestion,
    ],
    automation: [
      industryQuestion,
      ["Welche Software nutzen Sie?", [["Office / Microsoft", "doc"], ["CRM / ERP", "building"], ["Branchensoftware", "tools"], ["Kaum Software", "alert"]]],
      ["Wer soll die Lösung nutzen?", [["Nur ich", "user"], ["Kleines Team", "users"], ["Ganzes Unternehmen", "building"]]],
      ["Wie wichtig ist Datenschutz?", [["Sehr wichtig", "shield"], ["Wichtig", "check"], ["Unsicher", "help"]]],
      budgetQuestion,
      timeQuestion,
      contactQuestion,
    ],
    social: [
      industryQuestion,
      ["Welche Kanäle nutzen Sie bereits?", [["Instagram", "camera"], ["Facebook", "users"], ["LinkedIn", "building"], ["Keine", "alert"]]],
      ["Sollen Personen im Video zu sehen sein?", [["Ja", "user"], ["Teilweise", "users"], ["Nein", "video"]]],
      ["Wo soll gedreht werden?", [["Vor Ort bei mir", "building"], ["Im Freien", "camera"], ["Im Studio", "video"], ["Noch offen", "help"]]],
      budgetQuestion,
      timeQuestion,
      contactQuestion,
    ],
    digitalization: [
      industryQuestion,
      ["Wie viele Geräte sind es?", [["1", "devices"], ["2–5", "devices"], ["Über 5", "users"]]],
      ["Welches System nutzen Sie?", [["Windows", "devices"], ["Mac", "devices"], ["Android / iOS", "mobile"], ["Gemischt", "users"]]],
      ["Brauchen Sie Hilfe bei E-Mail & Konten?", [["Ja", "mail"], ["Etwas", "clock"], ["Nein", "check"]]],
      budgetQuestion,
      timeQuestion,
      contactQuestion,
    ],
  };
  services.forEach((service) => service.questions.push(...(extraQuestions[service.id] || [])));

  const serviceByPath = [
    [/^\/webdesign(?:\/|$)/, "website"],
    [/^\/videografie(?:\/|$)/, "social"],
    [/^\/it\/business(?:\/|$)/, "it-support"],
    [/^\/it\/privat(?:\/|$)/, "digitalization"],
    [/^\/it\/ki-beratung(?:\/|$)/, "automation"],
  ];

  const iconPaths = {
    tools: '<path d="m14.7 6.3 3 3M4 20l7.5-7.5m-2-8.5a5 5 0 0 0 6.5 6.5L21 16l-5 5-5.5-5.5A5 5 0 0 0 4 9l4 1 1-4-1-1Z"/>',
    wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    sparkles: '<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3ZM19 14l1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z"/>',
    video: '<rect x="3" y="5" width="13" height="14" rx="2"/><path d="m16 10 5-3v10l-5-3"/>',
    devices: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4m-7-8h14"/>',
    cookie: '<path d="M12 3a3 3 0 0 0 3 3 3 3 0 0 0 3 3 3 3 0 0 0 3 3 9 9 0 1 1-9-9Z"/><path d="M8 12h.01M12 16h.01M16 12h.01"/>',
    arrow: '<path d="M5 12h14m-7-7 7 7-7 7"/>',
    close: '<path d="m18 6-12 12M6 6l12 12"/>',
    back: '<path d="M19 12H5m7-7-7 7 7 7"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    alert: '<path d="M12 3 2 20h20L12 3Z"/><path d="M12 10v4m0 3h.01"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7m0 3h.01"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 21a7 7 0 0 1 14 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.5a7 7 0 0 1 4 6.5"/>',
    building: '<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h2m4 0h-1M9 11h2m4 0h-1M9 15h2m4 0h-1"/>',
    shield: '<path d="M12 3 4 6v6c0 4.5 3.2 7.8 8 9 4.8-1.2 8-4.5 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/>',
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',
    cloud: '<path d="M7 18a4 4 0 0 1-.5-7.97A6 6 0 0 1 18 9.5 4.3 4.3 0 0 1 17.5 18H7Z"/>',
    doc: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M14 3v5h5M9 13h6m-6 4h6"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    mobile: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    euro: '<path d="M18 6.5A7 7 0 1 0 18 17.5M4 10h9M4 14h9"/>',
    camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4V8Z"/><circle cx="12" cy="13" r="3.5"/>',
  };

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);

  const icon = (name, className = "") => (
    `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || iconPaths.sparkles}</svg>`
  );

  const findPageService = () => {
    const entry = serviceByPath.find(([pattern]) => pattern.test(window.location.pathname));
    return entry ? services.find((service) => service.id === entry[1]) : null;
  };

  const dialog = document.createElement("dialog");
  dialog.className = "dc-dialog";
  dialog.setAttribute("aria-labelledby", "dc-dialog-title");
  dialog.innerHTML = `
    <div class="dc-dialog-shell">
      <div class="dc-dialog-heading">
        <div class="dc-dialog-brand">
          <span class="dc-dialog-icon">${icon("sparkles")}</span>
          <div><p class="dc-eyebrow">EasyTech IT-Solutions</p><h2 id="dc-dialog-title">Kostenloser Digital-Check</h2></div>
        </div>
        <button class="dc-close" type="button" aria-label="Digital-Check schließen" data-dc-close>${icon("close")}</button>
      </div>
      <div class="dc-dialog-content" data-dc-content></div>
    </div>`;
  document.body.append(dialog);

  const section = document.createElement("section");
  section.id = "digital-check";
  section.className = "dc-section";
  section.setAttribute("aria-labelledby", "dc-section-title");

  let pageService = findPageService();
  let selectedService = pageService;
  let routePath = window.location.pathname;
  let autoOpenTimer;
  let observerFrame = false;
  let sending = false;
  let step = 0;
  let answers = [];

  function renderSection() {
    const serviceId = pageService ? pageService.id : "all";
    if (section.dataset.serviceId === serviceId) return;
    section.dataset.serviceId = serviceId;
    const title = pageService ? `Kostenloser Check für ${pageService.title}` : "Kostenloser Digital-Check";
    const description = "12 kurze Fragen, ein Klick pro Antwort. Ihre Analyse kommt in wenigen Stunden oder Tagen per E-Mail.";
    section.innerHTML = `
      <div class="dc-section-card">
        <div class="dc-section-copy">
          <p class="dc-eyebrow">Kostenlos · Unverbindlich · ca. 2 Minuten</p>
          <h2 id="dc-section-title">${escapeHtml(title)}</h2>
          <p>${escapeHtml(description)}</p>
        </div>
        <button class="dc-button dc-button-primary" type="button" data-dc-open>
          Check starten ${icon("arrow")}
        </button>
      </div>`;
  }

  const progressMarkup = (current, total) => `
    <div class="dc-progress" role="progressbar" aria-valuemin="1" aria-valuemax="${total}" aria-valuenow="${current}">
      ${Array.from({ length: total }, (_, index) => `<span class="${index < current ? "is-done" : ""}"></span>`).join("")}
    </div>
    <p class="dc-step-label">Schritt ${current} von ${total}</p>`;

  function renderPicker() {
    return `
      <div class="dc-step">
        <h3 class="dc-question-bar">Worum geht es bei Ihnen?</h3>
        <p class="dc-hint">Wählen Sie ein Thema.</p>
        <div class="dc-tiles dc-tiles-wide">
          ${services.map((service) => `
            <button class="dc-tile" type="button" data-dc-service="${service.id}">
              <span class="dc-tile-icon">${icon(service.icon)}</span>
              <span class="dc-tile-label">${escapeHtml(service.title)}</span>
            </button>`).join("")}
        </div>
      </div>`;
  }

  function renderQuestion(service, index) {
    const total = service.questions.length + 1;
    const [question, options] = service.questions[index];
    const selected = answers[index];
    return `
      <div class="dc-step">
        ${progressMarkup(index + 1, total)}
        <h3 class="dc-question-bar">${escapeHtml(question)}</h3>
        <p class="dc-hint">Bitte eine Antwort wählen.</p>
        <div class="dc-tiles" role="radiogroup" aria-label="${escapeHtml(question)}">
          ${options.map(([label, iconName]) => `
            <button class="dc-tile${selected === label ? " is-selected" : ""}" type="button" role="radio" aria-checked="${selected === label}" data-dc-answer="${escapeHtml(label)}">
              <span class="dc-tile-icon">${icon(iconName)}</span>
              <span class="dc-tile-label">${escapeHtml(label)}</span>
            </button>`).join("")}
        </div>
        <div class="dc-nav-row">
          <button class="dc-back" type="button" data-dc-back aria-label="Zurück">${icon("back")}</button>
          <span class="dc-auto-hint">Antwort antippen, es geht automatisch weiter</span>
        </div>
      </div>`;
  }

  function renderContact(service) {
    const total = service.questions.length + 1;
    return `
      <form class="dc-step dc-form" data-dc-form novalidate>
        ${progressMarkup(total, total)}
        <h3 class="dc-question-bar">Wohin dürfen wir Ihre Analyse senden?</h3>
        <p class="dc-hint">Kostenlos und unverbindlich.</p>
        <div class="dc-fields-grid">
          <label class="dc-field"><span>Vorname <b aria-hidden="true">*</b></span><input name="firstName" autocomplete="given-name" maxlength="100" required></label>
          <label class="dc-field"><span>Nachname <b aria-hidden="true">*</b></span><input name="lastName" autocomplete="family-name" maxlength="100" required></label>
          <label class="dc-field dc-field-full"><span>E-Mail <b aria-hidden="true">*</b></span><input type="email" name="email" autocomplete="email" maxlength="254" required></label>
          <label class="dc-field dc-field-full"><span>Telefon <small>optional</small></span><input type="tel" name="phone" autocomplete="tel" maxlength="40"></label>
        </div>
        <label class="dc-consent"><input type="checkbox" name="consent" required><span>Ich stimme der Verarbeitung meiner Angaben zu. <a href="/datenschutz/" target="_blank" rel="noopener">Datenschutz</a> <b aria-hidden="true">*</b></span></label>
        <p class="dc-form-status" role="status" aria-live="polite" hidden></p>
        <div class="dc-nav-row">
          <button class="dc-back" type="button" data-dc-back aria-label="Zurück">${icon("back")}</button>
          <button class="dc-button dc-button-primary dc-submit" type="submit">Jetzt abschicken ${icon("arrow")}</button>
        </div>
        <p class="dc-response-note">Ihre Analyse erhalten Sie in wenigen Stunden oder Tagen per E-Mail.</p>
      </form>`;
  }

  function showSuccess(container) {
    container.innerHTML = `
      <div class="dc-success" role="status">
        <span class="dc-success-icon">${icon("check")}</span>
        <h3>Vielen Dank!</h3>
        <p>Ihre Analyse erhalten Sie in wenigen Stunden oder Tagen per E-Mail.</p>
        <button class="dc-button dc-button-secondary" type="button" data-dc-close>Schließen</button>
      </div>`;
  }

  function updateDialog() {
    const content = dialog.querySelector("[data-dc-content]");
    if (!selectedService) {
      content.innerHTML = renderPicker();
      content.querySelectorAll("[data-dc-service]").forEach((button) => {
        button.addEventListener("click", () => {
          selectedService = services.find((service) => service.id === button.dataset.dcService);
          step = 0;
          answers = [];
          updateDialog();
        });
      });
      return;
    }

    const lastQuestion = selectedService.questions.length;
    const goBack = () => {
      if (step > 0) {
        step -= 1;
      } else if (!pageService) {
        selectedService = null;
      }
      updateDialog();
    };

    if (step >= lastQuestion) {
      content.innerHTML = renderContact(selectedService);
      content.querySelector("[data-dc-form]").addEventListener("submit", submitForm);
      content.querySelector("[data-dc-back]").addEventListener("click", goBack);
      content.querySelector("input")?.focus({ preventScroll: true });
      return;
    }

    content.innerHTML = renderQuestion(selectedService, step);
    let advancing = false;
    content.querySelectorAll("[data-dc-answer]").forEach((tile) => {
      tile.addEventListener("click", () => {
        if (advancing) return;
        advancing = true;
        answers[step] = tile.dataset.dcAnswer;
        content.querySelectorAll("[data-dc-answer]").forEach((other) => {
          const active = other === tile;
          other.classList.toggle("is-selected", active);
          other.setAttribute("aria-checked", String(active));
        });
        window.setTimeout(() => {
          step += 1;
          updateDialog();
        }, 220);
      });
    });
    content.querySelector("[data-dc-back]").addEventListener("click", goBack);
  }

  async function submitForm(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const status = form.querySelector(".dc-form-status");
    const submit = form.querySelector(".dc-submit");
    if (sending || !selectedService) return;

    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const message = selectedService.questions
      .map(([question], index) => `${index + 1}. ${question} -> ${answers[index] || "-"}`)
      .join("\n");
    const payload = {
      firstName: String(formData.get("firstName") || "").trim(),
      lastName: String(formData.get("lastName") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      service: `Kostenloser Digital-Check – ${selectedService.title}`,
      message,
      consent: "true",
    };

    sending = true;
    submit.disabled = true;
    submit.setAttribute("aria-busy", "true");
    status.hidden = false;
    status.className = "dc-form-status";
    status.textContent = "Ihre Anfrage wird sicher übermittelt …";

    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Ihre Anfrage konnte nicht versendet werden. Bitte versuchen Sie es später erneut.");
      }
      showSuccess(dialog.querySelector("[data-dc-content]"));
    } catch (error) {
      status.className = "dc-form-status dc-form-status-error";
      status.textContent = error instanceof Error
        ? error.message
        : "Ihre Anfrage konnte nicht versendet werden. Bitte versuchen Sie es später erneut oder schreiben Sie an info@easytechit.de.";
      submit.disabled = false;
      submit.removeAttribute("aria-busy");
    } finally {
      sending = false;
    }
  }

  function openDialog() {
    if (!dialog.open) {
      selectedService = findPageService();
      step = 0;
      answers = [];
      updateDialog();
      dialog.showModal();
    }
    dialog.querySelector(".dc-close").focus();
  }

  function closeDialog() {
    if (dialog.open) dialog.close();
  }

  function setupHeader() {
    const nav = document.querySelector("nav");
    if (!nav) return;

    const desktopCta = nav.querySelector('a[href="/kontakt"], a[href="/kontakt/"]');
    if (desktopCta) desktopCta.classList.add("dc-hidden-cta");
    if (desktopCta && !nav.querySelector(".dc-inline-cta")) {
      const button = document.createElement("a");
      button.className = "dc-inline-cta";
      button.href = "#digital-check";
      button.dataset.dcOpen = "";
      button.innerHTML = `Kostenlose Analyse ${icon("arrow")}`;
      desktopCta.before(button);
    }

    const mobileMenuButton = nav.querySelector('button[class*="lg:hidden"]');
    if (mobileMenuButton && !nav.querySelector(".dc-mobile-nav-cta")) {
      const button = document.createElement("a");
      button.className = "dc-mobile-nav-cta";
      button.href = "#digital-check";
      button.dataset.dcOpen = "";
      button.setAttribute("aria-label", "Kostenlose Analyse starten");
      button.textContent = "Analyse";
      mobileMenuButton.before(button);
    }
  }

  function setupFooter() {
    const footer = document.querySelector("footer");
    if (!footer || footer.querySelector(".dc-footer-cta")) return;
    const contactLink = footer.querySelector('a[href="/kontakt"], a[href="/kontakt/"]');
    if (!contactLink) return;
    const button = document.createElement("a");
    button.className = `${contactLink.className} dc-footer-cta`;
    button.href = "#digital-check";
    button.dataset.dcOpen = "";
    button.textContent = "Kostenlosen Check starten";
    contactLink.after(button);
  }

  function setupHero() {
    const heading = document.querySelector("h1");
    const hero = heading?.closest("section");
    if (!hero || hero.querySelector(".dc-hero-cta")) return;

    const phoneLink = hero.querySelector('a[href^="tel:"]');
    const button = phoneLink || document.createElement("a");
    button.href = "#digital-check";
    button.classList.add("dc-hero-cta");
    button.dataset.dcOpen = "";
    button.removeAttribute("target");
    button.removeAttribute("rel");
    button.setAttribute("aria-label", "Kostenlose Analyse starten");
    button.innerHTML = `Kostenlose Analyse ${icon("arrow")}`;

    if (!phoneLink) {
      const actionGroup = [...hero.querySelectorAll("div")]
        .filter((element) => element.querySelectorAll("a").length >= 2)
        .sort((first, second) => first.querySelectorAll("a").length - second.querySelectorAll("a").length)[0];
      if (actionGroup) {
        actionGroup.append(button);
      } else {
        heading.after(button);
      }
    }
  }

  function setupSection() {
    renderSection();
    if (document.getElementById("digital-check")) return;

    const hero = document.querySelector("h1")?.closest("section");
    if (hero?.parentElement) {
      if (hero.nextElementSibling !== section) hero.insertAdjacentElement("afterend", section);
    } else {
      section.remove();
    }
  }

  function setupFloatingActions() {
    if (document.querySelector(".dc-floating-actions")) return;
    const actions = document.createElement("div");
    actions.className = "dc-floating-actions";
    actions.setAttribute("aria-label", "Schnellzugriff");
    actions.innerHTML = `
      <button type="button" class="dc-floating-check" data-dc-open aria-label="Kostenlosen Digital-Check starten">
        ${icon("sparkles")}<span>Kostenloser Check</span>
      </button>
      <button type="button" class="dc-floating-cookie" aria-label="Cookie-Einstellungen öffnen" title="Cookie-Einstellungen">
        ${icon("cookie")}<span class="dc-visually-hidden">Cookie-Einstellungen</span>
      </button>`;
    document.body.append(actions);
    actions.querySelector(".dc-floating-cookie").addEventListener("click", () => {
      const settingsButton = [...document.querySelectorAll("button")].find((button) => (
        button !== actions.querySelector(".dc-floating-cookie")
        && !button.closest(".dc-floating-actions")
        && button.textContent.replace(/\s+/g, " ").trim() === "Cookie-Einstellungen"
      ));
      if (settingsButton) {
        settingsButton.click();
      } else {
        window.dispatchEvent(new CustomEvent("ja-itc-reopen-cookie-banner"));
      }
    });
  }

  function setupPage() {
    setupHeader();
    setupFooter();
    setupHero();
    setupSection();
    setupFloatingActions();
  }

  document.addEventListener("click", (event) => {
    const openButton = event.target.closest("[data-dc-open]");
    if (openButton) {
      event.preventDefault();
      openDialog();
      return;
    }
    if (event.target.closest("[data-dc-close]")) closeDialog();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog();
  });

  function routeChanged() {
    const nextPath = window.location.pathname;
    if (nextPath === routePath) {
      setupPage();
      return;
    }
    routePath = nextPath;
    pageService = findPageService();
    selectedService = pageService;
    closeDialog();
    setupPage();
    scheduleAutoOpen();
  }

  function scheduleAutoOpen(delay = 3000) {
    window.clearTimeout(autoOpenTimer);
    autoOpenTimer = window.setTimeout(() => {
      if (!window.localStorage.getItem("ja-itc-cookie-consent")) {
        scheduleAutoOpen(800);
        return;
      }
      openDialog();
    }, delay);
  }

  function scheduleSetup() {
    if (observerFrame) return;
    observerFrame = true;
    window.requestAnimationFrame(() => {
      observerFrame = false;
      routeChanged();
    });
  }

  setupPage();
  scheduleAutoOpen();
  new MutationObserver(scheduleSetup).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
  window.addEventListener("popstate", scheduleSetup);
})();
