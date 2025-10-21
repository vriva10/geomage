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
        card.style.display =
          selected === "all" || type === selected ? "block" : "none";
      });
    });
  }

  // === GLOBAL SEARCH (on main page only) ===
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  if (searchInput) {
    // Simple database of all images with titles, descriptions, and category links
    const data = [
      {
        title: "Normal Fault",
        desc: "A normal fault results from extension.",
        category: "Tectonics",
        type: "scheme",
        url: "categories/tectonic.html",
      },
      {
        title: "Fold",
        desc: "Folds are formed during ductile deformation of rock layers.",
        category: "Tectonics",
        type: "scheme",
        url: "categories/tectonic.html",
      },
      {
        title: "Basalt Texture",
        desc: "Fine-grained volcanic rock composed mainly of pyroxene and plagioclase.",
        category: "Petrology",
        type: "photo",
        url: "categories/petrology.html",
      },
      // 👉 Add more items here as you expand your site
    ];

    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase().trim();
      searchResults.innerHTML = "";

      if (query.length < 2) return; // only start searching after 2 characters

      const matches = data.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.desc.toLowerCase().includes(query)
      );

      if (matches.length === 0) {
        searchResults.innerHTML = "<p>No results found.</p>";
      } else {
        matches.forEach((item) => {
          const div = document.createElement("div");
          div.classList.add("search-result");
          div.innerHTML = `
            <strong>${item.title}</strong> (${item.category})<br>
            <small>${item.desc}</small><br>
            <a href="${item.url}">View in ${item.category}</a>
          `;
          searchResults.appendChild(div);
        });
      }
    });
  }
});
