'use strict';
const list = document.getElementById('game-list');
let games = [];
function render(filter) {
  const filtered = games.filter(game => filter === 'All' || (filter === 'Word & trivia' ? ['Word', 'Trivia'].includes(game.category) : game.category === filter));
  list.replaceChildren(...filtered.map(game => {
    const link = document.createElement('a'); link.className = 'game-row'; link.href = game.url; link.target = '_blank'; link.rel = 'noopener noreferrer';
    const img = document.createElement('img'); img.src = game.image; img.alt = ''; img.width = 52; img.height = 52; img.loading = 'lazy';
    const text = document.createElement('div'); const title = document.createElement('h3'); title.textContent = game.name;
    const meta = document.createElement('p'); meta.textContent = `${game.category} / ${game.year}`;
    const arrow = document.createElement('span'); arrow.className = 'arrow'; arrow.textContent = '↗'; arrow.setAttribute('aria-hidden', 'true');
    text.append(title, meta); link.append(img, text, arrow); return link;
  }));
  document.getElementById('filter-status').textContent = `${filtered.length} games shown`;
}
fetch('games.json').then(response => { if (!response.ok) throw new Error('Unable to load games'); return response.json(); }).then(data => { games = data; render('All'); }).catch(() => { const message = document.createElement('p'); message.textContent = 'Please visit the App Store or Google Play links below to explore my games.'; list.append(message); });
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  render(button.dataset.filter);
}));
document.getElementById('year').textContent = new Date().getFullYear();
