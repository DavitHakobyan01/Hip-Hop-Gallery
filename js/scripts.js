const container = document.getElementById('catalogContainer');
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');


// Adding artist cards
for (let i = 0; i < artists.length; i++) {
  const artist = artists[i];

  const card = document.createElement('div');
  card.classList.add('artist-card');

card.innerHTML = `
  <input type="checkbox" class="remove-checkbox" style="display: none;">
  <img src="${artist.imageData || `assets/img/${artist.name}.jpg`}" alt="${artist.name}">
  <h3>${artist.name}</h3>
  <p><strong>Popular Song:</strong> ${artist.popularSong}</p>
  <p><strong>Age:</strong> ${artist.age}</p>
  <p><strong>From:</strong> ${artist.hometown}</p>
  <p><strong>Fun Fact:</strong> ${artist.funFact}</p>
`;


  container.appendChild(card);
}


//Search button
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


//Add button
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


//Remove button
let removeMode = false;

removeButton.addEventListener('click', function () {
  const checkboxes = document.querySelectorAll('.remove-checkbox');
  const cards = document.querySelectorAll('.artist-card');

  if (!removeMode) {
    removeMode = true;
    removeButton.textContent = 'Confirm Remove';

    checkboxes.forEach(cb => {
      cb.style.display = 'inline-block';
      cb.checked = false;
    });

  } else {
    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        const name = cards[index].querySelector('h3').textContent;

        cards[index].remove();

        for (let i = 0; i < artists.length; i++) {
          if (artists[i].name === name) {
            artists.splice(i, 1);
            break;
          }
        }
      }
    });

    removeMode = false;
    removeButton.textContent = 'Remove';

    const remainingCheckboxes = document.querySelectorAll('.remove-checkbox');
    remainingCheckboxes.forEach(cb => {
      cb.style.display = 'none';
      cb.checked = false;
    });
  }
});


//Sort button
let sortBy = 'name';

const sortButton = document.getElementById('sortButton');

sortButton.addEventListener('click', function () {
  if (sortBy === 'name') {
    artists.sort((a, b) => a.age - b.age);
    sortBy = 'age';
    sortButton.textContent = 'Sort by Name';
  } else {
    artists.sort((a, b) => a.name.localeCompare(b.name));
    sortBy = 'name';
    sortButton.textContent = 'Sort by Age';
  }

  container.innerHTML = '';
  for (let i = 0; i < artists.length; i++) {
    const artist = artists[i];

    const card = document.createElement('div');
    card.classList.add('artist-card');

    card.innerHTML = `
      <input type="checkbox" class="remove-checkbox" style="display: none;">
      <img src="${artist.imageData || `assets/img/${artist.name}.jpg`}" alt="${artist.name}">
      <h3>${artist.name}</h3>
      <p><strong>Popular Song:</strong> ${artist.song}</p>
      <p><strong>Age:</strong> ${artist.age}</p>
      <p><strong>From:</strong> ${artist.origin}</p>
      <p><strong>Fun Fact:</strong> ${artist.funFact}</p>
    `;

    container.appendChild(card);
  }

  document.querySelectorAll('.remove-checkbox').forEach(cb => {
    cb.style.display = 'none';
    cb.checked = false;
  });

  removeMode = false;
  removeButton.textContent = 'Remove';
});



