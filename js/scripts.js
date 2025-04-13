const container = document.getElementById('catalogContainer');

artists.forEach(artist => {
  const card = document.createElement('div');
  card.classList.add('artist-card');

  card.innerHTML = `
    <img src="assets/img/${artist.name}.jpg" alt="${artist.name}">
    <h3>${artist.name}</h3>
    <p><strong>Popular Song:</strong> ${artist.song}</p>
    <p><strong>Age:</strong> ${artist.age}</p>
    <p><strong>From:</strong> ${artist.origin}</p>
  `;

  container.appendChild(card);
});





