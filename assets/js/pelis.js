const listIcon = document.querySelector('#width-list');
const card = document.querySelector('.card');
const closeList = document.querySelector('.list-close');
const listCard = document.querySelector('.listCard');
const quantity = document.querySelector('.quantity');
const totalElement = document.querySelector('.total');

const moviesGrid = document.querySelector('#moviesGrid');






let movies = [
    { 
        id: 1, 
        title: "Red Notice", 
        genre: "Action/Comedy", 
        year: 2021, 
        rating: 6.4, 
        image: "./assets/img/movies/red-notice.jpg" 
    },
    { id: 2, title: "Spider-Man: Homecoming", genre: "Action/Adventure", year: 2017, rating: 6.4, image: "./assets/img/movies/spider-men.jpg" },
    { id: 3, title: "The Matrix Resurrections", genre: "Sci-fi/Action", year: 2021, rating: 6.4, image: "./assets/img/movies/matrix.jpg" },
    { id: 4, title: "Eternals", genre: "Adventure/Action", year: 2021, rating: 6.4, image: "./assets/img/movies/eternals.jpg" },
    { id: 5, title: "Dune", genre: "Sci-fi/Adventure", year: 2021, rating: 6.4, image: "./assets/img/movies/dune.jpg" },
    { id: 6, title: "1917", genre: "War/Drama", year: 2019, rating: 6.4, image: "./assets/img/movies/1917.jpg" },
    { id: 7, title: "Shang-Chi and The Legend of The Ten Rings", genre: "Action/Fantasy", year: 2021, rating: 6.4, image: "./assets/img/movies/shang-chi.jpg" },
    { id: 8, title: "Casino Royale", genre: "Action/Adventure", year: 2006, rating: 6.4, image: "./assets/img/movies/casino-royale.jpg" },
    { id: 9, title: "The Dark Knight", genre: "Action/Adventure", year: 2008, rating: 6.4, image: "./assets/img/movies/dark-knight.jpg" },
    { id: 10, title: "Black Panther", genre: "Action/Adventure", year: 2018, rating: 6.4, image: "./assets/img/movies/panther.jpg" },
    { id: 11, title: "Venom", genre: "Action/Adventure", year: 2018, rating: 6.4, image: "./assets/img/movies/venom.jpg" }
];

let listCards = {};

function initApp() {
    movies.forEach(value => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('movie-card');
        newDiv.innerHTML = `
            <div class="card-head">
                <img src="${value.image}" alt="" class="card-img">
                <div class="card-overlay">
                    <div class="bookmark">
                        <button onclick="addToList(${value.id})" class="add-list">
                            <i class='bx bxs-heart' ></i>
                        </button>
                    </div>
                    <div class="rating">
                        <i class='bx bx-star'></i><span>${value.rating}</span>
                    </div>
                    
                    <div class="play">
                      <i class='bx bx-play-circle'></i>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <h3 class="card-title">${value.title}</h3>
                <div class="card-info">
                    <span class="genre">${value.genre}</span>
                    <span class="year">${value.year}</span>
                </div>
            </div>`;
        moviesGrid.appendChild(newDiv);
    });
}

function addToList(id) {
    const movie = movies.find(m => m.id === id);
    if (!listCards[id]) {
        listCards[id] = { ...movie, quantity: 1 };
    } else {
        listCards[id].quantity++;
    }
    reloadCard();
}

function reloadCard() {
  listCard.innerHTML = ''; // Limpia la lista antes de volver a llenarla
  let count = 0;
  let total = 0;

  // Itera sobre los elementos de listCards
  Object.values(listCards).forEach(value => {
      count += value.quantity; // Incrementa el contador de películas seleccionadas
      total += value.quantity; // Acumula el total (cantidad de todas las películas)

      // Crea dinámicamente cada entrada de película
      const newDiv = document.createElement('li');
      newDiv.innerHTML = `
          <div><img src="${value.image}" alt="${value.title}" /></div>
          <div class="movies-title">${value.title}</div>
          <div class="genre">${value.genre}</div>
          <div>
              <button onclick="changeQuantity(${value.id}, ${value.quantity - 1})">-</button>
              <div class="count">${value.quantity}</div>
              <button onclick="changeQuantity(${value.id}, ${value.quantity + 1})">+</button>
          </div>`;
      listCard.appendChild(newDiv);
  });

  // Actualiza el contador de cantidad
  quantity.innerText = count;

  // Actualiza el total en el div correspondiente
  if (totalElement) {
      totalElement.innerText = total;
  } else {
      console.error('El elemento .total no se encontró en el DOM.');
  }
}

function changeQuantity(id, newQuantity) {
    if (newQuantity === 0) {
        delete listCards[id];
    } else {
        listCards[id].quantity = newQuantity;
    }
    reloadCard();
}

listIcon.addEventListener('click', () => card.classList.add('active'));
closeList.addEventListener('click', () => card.classList.remove('active'));

initApp();