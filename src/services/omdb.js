import { FEATURED_IMDB_IDS } from "../data/featuredMovies";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

async function fetchMoviesById(imdbID) {
	const res = await fetch(
		`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=short`,
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

export async function getPopularMovies() {
	if (!API_KEY) {
		throw new Error(
			"Missing OMDb API key. Add VITE_OMDB_API_KEY to .env file.",
		);
	}

	const res = await Promise.all(
		FEATURED_IMDB_IDS.map((id) => fetchMoviesById(id)),
	);

	return res;
}

export async function searchMovies(query) {
	if (!API_KEY) {
		throw new Error(
			"Missing OMDb API key. Add VITE_OMDB_API_KEY to .env file.",
		);
	}

	const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);

	if (!res.ok) {
		throw new Error(`OMDb request failed: ${res.status}`);
	}

	const data = await res.json();

	if (data.Response === "False") {
		return [];
	}

	return data;
}
