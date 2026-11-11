(() => {
  const root = document.querySelector("#root");
  if (!root) {
    console.error("Projektfilter konnten nicht initialisiert werden: React-Wurzel fehlt.");
    return;
  }

  const normalize = (value) => value.replace(/\s+/g, " ").trim().toLocaleLowerCase("de");

  function setup() {
    const heading = [...root.querySelectorAll("h2")]
      .find((item) => normalize(item.textContent).replace(/\s/g, "").includes("referenzenimdetail"));
    const section = heading?.closest("section");
    if (!section || section.querySelector(".et-project-filters")) return Boolean(section);

    const cards = [...section.querySelectorAll("h4")]
      .map((item) => item.closest(".group.h-full.flex.flex-col"))
      .filter((card) => card && card.querySelector("span.rounded-full"));
    if (!cards.length) return false;

    const categories = [...new Set(cards.flatMap((card) => [...card.querySelectorAll("span.rounded-full")]
      .map((tag) => tag.textContent.trim())
      .filter(Boolean)))].sort((a, b) => a.localeCompare(b, "de"));
    const toolbar = document.createElement("form");
    toolbar.className = "et-project-filters";
    toolbar.setAttribute("role", "search");

    const searchLabel = document.createElement("label");
    searchLabel.append("Projekt durchsuchen");
    const search = document.createElement("input");
    search.type = "search";
    search.name = "q";
    search.placeholder = "Name, Leistung oder Stichwort";
    search.autocomplete = "off";
    searchLabel.append(search);

    const categoryLabel = document.createElement("label");
    categoryLabel.append("Leistung");
    const category = document.createElement("select");
    category.name = "category";
    const allOption = document.createElement("option");
    allOption.value = "";
    allOption.textContent = "Alle Leistungen";
    category.append(allOption);
    categories.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      category.append(option);
    });
    categoryLabel.append(category);

    const reset = document.createElement("button");
    reset.type = "reset";
    reset.textContent = "Zurücksetzen";
    const status = document.createElement("p");
    status.className = "et-project-filter-status";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    toolbar.append(searchLabel, categoryLabel, reset, status);
    heading.closest("div")?.after(toolbar);

    const projectCards = cards.map((card) => {
      card.classList.add("et-project-card");
      return {
        card,
        text: normalize(card.textContent),
        categories: [...card.querySelectorAll("span.rounded-full")].map((tag) => tag.textContent.trim()),
      };
    });

    function applyFilters() {
      const query = normalize(search.value);
      let visibleCount = 0;
      projectCards.forEach((project) => {
        const matchesQuery = !query || project.text.includes(query);
        const matchesCategory = !category.value || project.categories.includes(category.value);
        const visible = matchesQuery && matchesCategory;
        project.card.hidden = !visible;
        if (visible) visibleCount += 1;
      });
      status.textContent = visibleCount
        ? `${visibleCount} von ${projectCards.length} Projekten`
        : `0 von ${projectCards.length} Projekten. Ändern Sie Suche oder Leistung.`;
    }

    toolbar.addEventListener("submit", (event) => event.preventDefault());
    toolbar.addEventListener("input", applyFilters);
    toolbar.addEventListener("change", applyFilters);
    toolbar.addEventListener("reset", () => requestAnimationFrame(applyFilters));
    applyFilters();
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
    console.error("Projektfilter konnten nicht initialisiert werden: Projektliste wurde nicht gefunden.");
  }, 15000);
})();
