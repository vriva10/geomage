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
});
