const OMDbUrlSearch = "http://www.omdbapi.com/?apikey=3a5f1c27&r=json&page=1&s=";
const OMDbUrlDetails = "http://www.omdbapi.com/?apikey=3a5f1c27&r=json&page=1&i=";

const main = document.getElementById('main');
const searchText = document.getElementById('searchText');
const searchBtn = document.getElementById('searchBtn');

let currentResults = [];

searchBtn.addEventListener('click', searchMovie);

document.addEventListener('click', function (e) {
    if (e.target.dataset.additem) {
        handleAddWatchList(e.target.dataset.additem);
    }
});

async function searchMovie() {
    let searchTerm = searchText.value;
    if (!searchTerm) return;

    const res = await fetch(OMDbUrlSearch + searchTerm);
    const data = await res.json();
    currentResults = [];

    if (data["Response"] === 'True') {
        let resultsHTML = ``;
        for (let movie of data["Search"]) {
            resultsHTML += await addMovie(movie);
        }
        main.innerHTML = resultsHTML;
    } else if (data["Response"] === 'False') {
        main.innerHTML = `Unable to find what you're looking for. Please try another search.`
    }

    console.log(currentResults);
}

async function addMovie(movie) {
    let movieHtml = '';
    const res = await fetch(OMDbUrlDetails + movie.imdbID);
    const data = await res.json();
    currentResults.pop(data);

    movieHtml = `
            <div class="result-item">
                <img src="${data["Poster"]}" alt="movie="/>
                <div class="result-details">
                    <div class="title">
                        <div class="title-text">${data["Title"]}</div>
                        <img src="images/star.svg" alt="star"/>
                        <div class="rating">${data["imdbRating"]}</div>
                    </div>
                    <div class="subtitle">
                        <div>${data["Runtime"]}</div>
                        <div>${data["Genre"]}</div>
                        <div>
                            <img  src="images/add.png" alt="add icon" data-additem="${data.imdbID}" />
                        </div>
                        <div>Watchlist</div>
                    </div>
                    <div class="summary">${data["Plot"]}</div>
                </div>
            </div>
        `;

    return movieHtml;
}

function handleAddWatchList(item) {
console.log(currentResults);
    console.log(`Add to watch list ${item}`);
}

main.innerHTML = `
   <div class="empty-search">
        <img src="images/movie.png" alt="movie icon"/>
        <p>Start exploring</p>
   </div>
`;