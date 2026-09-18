const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

const FEATURED_IMDB_IDS = [
	"tt0468569", // The Dark Knight
	"tt1375666", // Inception
	"tt0111161", // The Shawshank Redemption
	"tt0137523", // Fight Club
	"tt0109830", // Forrest Gump
	"tt0133093", // The Matrix
	"tt0110912", // Pulp Fiction
	"tt0068646", // The Godfather
	"tt4154796", // Avengers: Endgame
	"tt0816692", // Interstellar
];

async function fetchMoviesById(imdbID) {
	const res = await fetch(
		"${BASE_URL}?apikey=${API_KEY}&i=${imdbId}&plot=short",
	);

	if (!res.ok) {
		throw new Error(`OMDb request failed: ${res.status}`);
	}

	const data = await res.json();

	if (data.Response === "False") {
		throw new Error(data.Error || "Movie not found");
	}

	return data;
}
