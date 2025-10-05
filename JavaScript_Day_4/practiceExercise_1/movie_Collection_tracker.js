function createMovie(title, director, releaseYear,rating){
    return{
 title: title,
        director: director,
        releaseYear: releaseYear,
        rating: rating,
        isWatched: false,
        // method summary

        getSummary:function(){
            return `"${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}/10"`;
        }

    };
}
// create an array of movies
const movieCollection = [
       createMovie("Inception", "Christopher Nolan", 2010, 9),
    createMovie("The Dark Knight", "Christopher Nolan", 2008, 10),
    createMovie("Interstellar", "Christopher Nolan", 2014, 8),
    createMovie("Tenet", "Christopher Nolan", 2020, 7) 
];
// update iswatched to true.
movieCollection[0].isWatched = true;

// function to display movie
function displayHighRateMovies(movies){
const movieListDiv = document.getElementById('movie-list');
movieListDiv.innerHTML = '';
    const highRatedMovies = movies.filter(movie => movie.rating >= 8);
highRatedMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <h2>${movie.title}</h2>
            <p><strong>Summary:</strong> ${movie.getSummary()}</p>
            <p><strong>Watched:</strong> ${movie.isWatched ? 'Yes' : 'No'}</p>
        `;
        movieListDiv.appendChild(movieCard);
});
}
document.addEventListener('DOMContentLoaded', () => {
displayHighRateMovies(movieCollection)
});