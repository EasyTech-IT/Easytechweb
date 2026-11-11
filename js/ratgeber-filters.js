(() => {
  const list = document.querySelector(".article-list");
  if (!list) {
    console.error("Ratgeberfilter konnten nicht initialisiert werden: Artikelliste fehlt.");
    return;
  }

  const cards = Array.from(list.querySelectorAll(".article-card"));
  const categories = [...new Set(cards
    .map((card) => card.querySelector(".eyebrow")?.textContent.trim())
    .filter(Boolean))].sort((a, b) => a.localeCompare(b, "de"));
  const toolbar = document.createElement("form");
  toolbar.className = "article-filters";
  toolbar.setAttribute("role", "search");
  toolbar.innerHTML = `
    <label class="article-filter-search article-filter-field">
      <span>Ratgeber durchsuchen</span>
      <input type="search" name="q" placeholder="Thema oder Stichwort" autocomplete="off">
    </label>
    <label class="article-filter-category article-filter-field">
      <span>Thema</span>
      <select name="category">
        <option value="">Alle Themen</option>
        ${categories.map((category) => `<option value="${category.replaceAll("&", "&amp;").replaceAll('"', "&quot;")}">${category.replaceAll("&", "&amp;").replaceAll("<", "&lt;")}</option>`).join("")}
      </select>
    </label>
    <button class="article-filter-reset" type="reset">Zurücksetzen</button>
    <p class="article-filter-status" role="status" aria-live="polite"></p>`;
  list.before(toolbar);

  const search = toolbar.querySelector('input[name="q"]');
  const category = toolbar.querySelector('select[name="category"]');
  const status = toolbar.querySelector(".article-filter-status");

  function applyFilters() {
    const query = search.value.trim().toLocaleLowerCase("de");
    const selectedCategory = category.value;
    let visibleCount = 0;

    cards.forEach((card) => {
      const cardCategory = card.querySelector(".eyebrow")?.textContent.trim() || "";
      const matchesQuery = !query || card.textContent.toLocaleLowerCase("de").includes(query);
      const matchesCategory = !selectedCategory || cardCategory === selectedCategory;
      const visible = matchesQuery && matchesCategory;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    status.textContent = visibleCount
      ? `${visibleCount} von ${cards.length} Ratgebern`
      : `0 von ${cards.length} Ratgebern. Ändern Sie Suche oder Thema.`;
  }

  toolbar.addEventListener("submit", (event) => event.preventDefault());
  toolbar.addEventListener("input", applyFilters);
  toolbar.addEventListener("change", applyFilters);
  toolbar.addEventListener("reset", () => requestAnimationFrame(applyFilters));
  applyFilters();
})();
