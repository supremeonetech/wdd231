async function loadSpotlights() {
  const response = await fetch("data/members.json");
  const members = await response.json();
  const spotlightCandidates = members.filter(m => m.membership >= 2);
  const shuffled = spotlightCandidates.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);
  const container = document.getElementById("spotlight-container");
  container.innerHTML = "";
  selected.forEach(m => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="images/${m.image}" alt="${m.name}">
      <h3>${m.name}</h3>
      <p>${m.address}</p>
      <p>${m.phone}</p>
      <a href="${m.website}" target="_blank">Visit Website</a>
      <p><strong>${m.membership === 3 ? "Gold" : "Silver"} Member</strong></p>`;
    container.appendChild(card);
  });
}
loadSpotlights();