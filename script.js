document.addEventListener("DOMContentLoaded", () => {
  // === IMAGE ZOOM FUNCTIONALITY ===
  const images = document.querySelectorAll(".image-card img");
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  images.forEach(img => {
    img.addEventListener("click", () => {
      const clone = img.cloneNode();
      clone.classList.add("zoomed");
      overlay.innerHTML = "";
      overlay.appendChild(clone);
      overlay.style.display = "flex";
    });
  });

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    overlay.innerHTML = "";
  });

  // === FILTER FUNCTIONALITY (on category pages only) ===
  const filterSelect = document.getElementById("typeFilter");
  if (filterSelect) {
    const imageCards = document.querySelectorAll(".image-card");

    filterSelect.addEventListener("change", () => {
      const selected = filterSelect.value;
      imageCards.forEach(card => {
        const type = card.dataset.type;
        card.style.display = (selected === "all" || type === selected) ? "block" : "none";
      });
    });
  }
});
