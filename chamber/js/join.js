// Add timestamp when form loads
document.getElementById("timestamp").value = new Date().toISOString();

// Modal functionality
const modals = document.querySelectorAll(".modal");
const links = document.querySelectorAll(".membership-cards a");
const closes = document.querySelectorAll(".close");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const modal = document.querySelector(link.getAttribute("href"));
    modal.style.display = "block";
  });
});

closes.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});

window.addEventListener("click", e => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});

// Animation on membership cards
window.addEventListener("load", () => {
  document.querySelectorAll(".membership-cards .card").forEach((card, i) => {
    card.style.opacity = 0;
    setTimeout(() => {
      card.style.transition = "opacity 1s ease-in";
      card.style.opacity = 1;
    }, i * 300);
  });
});
