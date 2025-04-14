const container = document.getElementById('catalogContainer');
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

for (let i = 0; i < artists.length; i++) {
  const artist = artists[i];

  const card = document.createElement('div');
  card.classList.add('artist-card');

  card.innerHTML = `
    <img src="assets/img/${artist.name}.jpg" alt="${artist.name}">
    <h3>${artist.name}</h3>
    <p><strong>Popular Song:</strong> ${artist.popularSong}</p>
    <p><strong>Age:</strong> ${artist.age}</p>
    <p><strong>From:</strong> ${artist.hometown}</p>
    <p><strong>Fun fact::</strong> ${artist.funFact}</p>
  `;

  container.appendChild(card);
}

searchButton.addEventListener('click', function () {
  const keyword = searchInput.value.toLowerCase();
  container.innerHTML = '';

  for (let i = 0; i < artists.length; i++) {
    const artist = artists[i];

    if (artist.name.toLowerCase().includes(keyword)) {
      const card = document.createElement('div');
      card.classList.add('artist-card');

      card.innerHTML = `
        <img src="assets/img/${artist.name}.jpg" alt="${artist.name}">
        <h3>${artist.name}</h3>
        <p><strong>Popular Song:</strong> ${artist.popularSong}</p>
        <p><strong>Age:</strong> ${artist.age}</p>
        <p><strong>From:</strong> ${artist.hometown}</p>
        <p><strong>Fun fact::</strong> ${artist.funFact}</p>
      `;

      container.appendChild(card);
    }
  }
});

addButton.addEventListener('click', function () {
  window.open('add.html', 'AddArtist', 'width=400,height=500');
});

window.addEventListener('message', function (event) {
  const artist = event.data;

  artists.push(artist);

  const card = document.createElement('div');
  card.classList.add('artist-card');

  card.innerHTML = `
    <img src="${artist.imageData}" alt="${artist.name}">
    <h3>${artist.name}</h3>
    <p><strong>Popular Song:</strong> ${artist.song}</p>
    <p><strong>Age:</strong> ${artist.age}</p>
    <p><strong>From:</strong> ${artist.origin}</p>
    <p><strong>Fun Fact:</strong> ${artist.funFact}</p>
  `;

  container.appendChild(card);
});

