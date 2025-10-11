import { fetchTrends } from './data.js';

export async function init() {
  const gallery = document.getElementById('gallery');
  if (!gallery) return;

  const trends = await fetchTrends();
  gallery.innerHTML = trends.map(trend => `
    <div class="card" data-id="${trend.id}">
      <img src="${trend.img}" alt="${trend.title}">
      <h3>${trend.title}</h3>
      <p>${trend.desc}</p>
      <p><strong>Category:</strong> ${trend.category}</p>
      <p><strong>Impact:</strong> ${trend.impact}</p>
    </div>
  `).join('');

  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const trend = trends.find(t => t.id == card.dataset.id);
      openModal(trend);
    });
  });
}

function openModal(trend) {
  const modal = document.getElementById('modal');
  document.getElementById('modalTitle').textContent = trend.title;
  document.getElementById('modalDesc').textContent = trend.desc;
  document.getElementById('modalImg').src = trend.img;
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');

  document.getElementById('saveBtn').onclick = () => saveFavorite(trend.id);
  document.getElementById('closeModal').onclick = closeModal;
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
}

function saveFavorite(id) {
  const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
  if (!favs.includes(id)) favs.push(id);
  localStorage.setItem('favorites', JSON.stringify(favs));
  alert('Saved to favorites!');
}
