// main.js
// Tech Trends in Africa Project
// Author: Wisdom Okafor

// =========================
// Element References
// =========================
const gallery = document.querySelector("#gallery");
const themeToggle = document.querySelector("#themeToggle");
const modal = document.querySelector("#trendModal");
const modalTitle = document.querySelector("#modalTitle");
const modalDetails = document.querySelector("#modalDetails");
const closeModal = document.querySelector("#closeModal");

// =========================
// Fetch and Display Data
// =========================
async function loadData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
        <h2>${item.name}</h2>
        <p><strong>Location:</strong> ${item.location}</p>
        <p><strong>Type:</strong> ${item.type}</p>
        <p>${item.description}</p>
        <button class="modal-btn" data-id="${item.id}">More Info</button>
      `;
      gallery.appendChild(card);
    });

    attachModalEvents(data);
  } catch (error) {
    console.error("Error loading data:", error);
    gallery.innerHTML = "<p>Unable to load content. Please try again later.</p>";
  }
}

// =========================
// Modal Logic
// =========================
function attachModalEvents(data) {
  const buttons = document.querySelectorAll(".modal-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const trendId = btn.getAttribute("data-id");
      const trend = data.find(t => t.id == trendId);
      if (trend) showModal(trend);
    });
  });

  // Safety checks for modal elements
  if (closeModal) {
    closeModal.addEventListener("click", hideModal);
  }

  if (modal) {
    window.addEventListener("click", (e) => {
      if (e.target === modal) hideModal();
    });
  }
}

function showModal(trend) {
  if (!modal || !modalTitle || !modalDetails) return;

  modalTitle.textContent = trend.name;
  modalDetails.innerHTML = `
    <p><strong>Country:</strong> ${trend.country}</p>
    <p><strong>Category:</strong> ${trend.category}</p>
    <p><strong>Year:</strong> ${trend.year}</p>
    <p>${trend.description}</p>
    <p><strong>Impact:</strong> ${trend.impact}</p>
  `;
  modal.style.display = "flex";
}

function hideModal() {
  if (modal) modal.style.display = "none";
}

// =========================
// Theme Toggle
// =========================
function applyTheme() {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark");
    document.querySelector("header")?.classList.add("dark");
    document.querySelector("footer")?.classList.add("dark");
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.querySelector("header")?.classList.toggle("dark");
    document.querySelector("footer")?.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

// =========================
// Initialize
// =========================
applyTheme();
loadData();
