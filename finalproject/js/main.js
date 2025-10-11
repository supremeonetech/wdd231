const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("nav");
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const gallery = document.querySelector("#gallery");

async function loadData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();

    gallery.innerHTML = data.map(item => `
      <div class='card'>
        <img src='${item.image}' alt='${item.name}' loading='lazy'>
        <h3>${item.name}</h3>
        <p>${item.country}</p>
        <p>${item.description}</p>
      </div>
    `).join("");
  } catch (error) {
    console.error("Error loading data:", error);
  }
}
if (gallery) loadData();
