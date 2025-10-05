// 1. Create two arrays: movies (names) and ratings (numbers)
let movies = [];
let ratings = [];

// Helper function to add a movie and rating from input fields
function addMovieFromInput() {
    const movieName = document.getElementById('movieName').value;
    const movieRating = parseInt(document.getElementById('movieRating').value);

    if (movieName && movieRating >= 1 && movieRating <= 10) {
        addMovie(movieName, movieRating);
        document.getElementById('movieName').value = '';
        document.getElementById('movieRating').value = '';
        alert(`"${movieName}" with rating ${movieRating} added!`);
    } else {
        alert("Please enter a valid movie name and a rating between 1 and 10.");
    }
}

// 2. Write a function addMovie(movie, rating) that adds a new entry
function addMovie(movie, rating) {
    movies.push(movie);
    ratings.push(rating);
}

// 3. Write a function getAverageRating() to calculate the average rating
function getAverageRating() {
    if (ratings.length === 0) {
        return 0;
    }
    const sum = ratings.reduce((acc, current) => acc + current, 0);
    return sum / ratings.length;
}

// 4. Write a function getTopMovie() to find the highest-rated movie
function getTopMovie() {
    if (ratings.length === 0) {
        return "No movies added yet.";
    }
    const maxRating = Math.max(...ratings);
    const topMovieIndices = ratings.reduce((acc, rating, index) => {
        if (rating === maxRating) {
            acc.push(index);
        }
        return acc;
    }, []);

    if (topMovieIndices.length === 1) {
        return `${movies[topMovieIndices[0]]} (Rating: ${maxRating})`;
    } else {
        const topMovies = topMovieIndices.map(index => movies[index]);
        return `${topMovies.join(", ")} (Rating: ${maxRating})`;
    }
}

// 5. Print a summary of all movies with their ratings
function printSummary() {
    let summary = "--- Movie Summary ---\n";
    if (movies.length === 0) {
        summary += "No movies to display.";
    } else {
        for (let i = 0; i < movies.length; i++) {
            summary += `${movies[i]}: ${ratings[i]}\n`;
        }
    }
    document.getElementById('summaryOutput').textContent = summary;
}

// Challenge: Sort the movies by rating (highest → lowest) and display the sorted list.
function getSortedMoviesByRating() {
    if (movies.length === 0) {
        return [];
    }
    const movieObjects = movies.map((movie, index) => ({
        name: movie,
        rating: ratings[index]
    }));

    movieObjects.sort((a, b) => b.rating - a.rating); // Sort in descending order of rating
    return movieObjects;
}

function displayAverageRating() {
    document.getElementById('averageRatingOutput').textContent = `Average Rating: ${getAverageRating().toFixed(2)}`;
}

function displayTopMovie() {
    document.getElementById('topMovieOutput').textContent = `Highest Rated Movie(s): ${getTopMovie()}`;
}

function displaySortedMovies() {
    const sortedMovies = getSortedMoviesByRating();
    let sortedOutput = "--- Sorted Movies (Highest to Lowest) ---\n";
    if (sortedMovies.length === 0) {
        sortedOutput += "No movies to display.";
    } else {
        sortedMovies.forEach(movie => {
            sortedOutput += `${movie.name}: ${movie.rating}\n`;
        });
    }
    document.getElementById('sortedMoviesOutput').textContent = sortedOutput;
}