const API = 'https://api.tvmaze.com/shows';
const container = document.getElementById('moviesContainer');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');

let allMovies = [];

const fetchMovies = async () => {
    try {
        const response = await fetch(API);
        
        if (!response.ok) {
            throw new Error('Cannot fetch data from API');
        }
        
        const data = await response.json();
        allMovies = data;
        renderMovies(allMovies);
        
    } catch (error) {
        container.innerHTML = `<p class="error-msg"> Error: ${error.message}</p>`;
    }
};

const renderMovies = (movies) => {
    container.innerHTML = '';

    if (movies.length === 0) {
        container.innerHTML = '<p class="error-msg">No movies found </p>';
        return;
    }

    movies.forEach(movie => {
        const { name, rating, image, genres, language } = movie;
        
        const card = document.createElement('div');
        card.className = 'movie-card';
        

        card.innerHTML = `
            <img src="${image?.medium || 'https://via.placeholder.com/210x295?text=No+Image'}" alt="${name}">
            <div class="movie-info">
                <h3>${name}</h3>
                <p>Genre: ${genres.join(', ') || 'N/A'}</p>
                <p>Language: ${language}</p>
                <p class="rating">Rating: ${rating.average || '—'}</p>
            </div>
        `;
        container.appendChild(card);
    });
};


const filterMovies = () => {
    const searchTerm = searchInput.value.toLowerCase();
    
    const filtered = allMovies.filter(({ name }) => 
        name.toLowerCase().includes(searchTerm)
    );
    
    sortAndRender(filtered);
};

const sortAndRender = (moviesToDisplay) => {
    const sortBy = sortSelect.value;
    let sorted = [...moviesToDisplay];

    if (sortBy === 'az') {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'rating') {
        sorted.sort((a, b) => (b.rating.average || 0) - (a.rating.average || 0));
    }

    renderMovies(sorted);
};

searchInput.addEventListener('input', filterMovies);
sortSelect.addEventListener('change', () => filterMovies());

fetchMovies();