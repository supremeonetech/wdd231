
async function loadDiscoverItems() {
  try {
    const response = await fetch("data/discover.json");
    const items = await response.json();
    displayDiscover(items);
  } catch (error) {
    console.error("Error loading discover.json:", error);
  }
}

function displayDiscover(items) {
  const container = document.querySelector("#discover-container");

  items.forEach((item, index) => {
    const card = document.createElement("section");
    card.classList.add("discover-card");
    card.style.gridArea = `card${index + 1}`;

    const title = document.createElement("h2");
    title.textContent = item.title;

    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title;
    img.loading = "lazy";
    figure.appendChild(img);

    const address = document.createElement("address");
    address.textContent = item.address;

    const description = document.createElement("p");
    description.textContent = item.description;

    const button = document.createElement("button");
    button.textContent = "Learn More";

    card.appendChild(title);
    card.appendChild(figure);
    card.appendChild(address);
    card.appendChild(description);
    card.appendChild(button);

    container.appendChild(card);
  });
}

// Visit message using localStorage
function displayVisitMessage() {
  const messageContainer = document.querySelector("#visit-message");
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  if (!lastVisit) {
    messageContainer.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const msBetween = now - parseInt(lastVisit);
    const daysBetween = Math.floor(msBetween / (1000 * 60 * 60 * 24));

    if (daysBetween < 1) {
      messageContainer.textContent = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
      messageContainer.textContent = `You last visited ${daysBetween} day ago.`;
    } else {
      messageContainer.textContent = `You last visited ${daysBetween} days ago.`;
    }
  }

  localStorage.setItem("lastVisit", now);
}

loadDiscoverItems();
displayVisitMessage();
