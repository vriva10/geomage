document.addEventListener("DOMContentLoaded", () => {
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

  // === FILTER FUNCTIONALITY ===
document.addEventListener("DOMContentLoaded", () => {
  const filterSelect = document.getElementById("typeFilter");
  if (!filterSelect) return; // Only run on category pages

  const imageCards = document.querySelectorAll(".image-card");

  filterSelect.addEventListener("change", () => {
    const selected = filterSelect.value;

    imageCards.forEach(card => {
      const type = card.dataset.type;
      if (selected === "all" || type === selected) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
 
