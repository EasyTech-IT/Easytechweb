const previewDialog = document.querySelector(".article-preview");

if (previewDialog instanceof HTMLDialogElement) {
  const category = previewDialog.querySelector("#preview-category");
  const title = previewDialog.querySelector("#preview-title");
  const description = previewDialog.querySelector("#preview-description");
  const link = previewDialog.querySelector("#preview-link");

  document.querySelectorAll("[data-preview]").forEach((button) => {
    button.addEventListener("click", () => {
      if (
        !(category instanceof HTMLElement) ||
        !(title instanceof HTMLElement) ||
        !(description instanceof HTMLElement) ||
        !(link instanceof HTMLAnchorElement)
      ) {
        throw new Error("Die Elemente der Ratgeber-Vorschau fehlen.");
      }

      category.textContent = button.dataset.category ?? "";
      title.textContent = button.dataset.title ?? "";
      description.textContent = button.dataset.description ?? "";
      link.href = button.dataset.href ?? "/";
      previewDialog.showModal();
    });
  });

  previewDialog.addEventListener("click", (event) => {
    if (event.target === previewDialog) {
      previewDialog.close();
    }
  });
}
