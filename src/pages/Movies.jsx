import { useEffect, useState } from "react";
import "./Movies.css";
import Card from "../components/Card";
import { getPopularMovies } from "../services/omdb";

export default function Movies() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		let isLoaded = true;

		getPopularMovies()
			.then((res) => {
				if (isLoaded) setMovies(res);
			})
			.catch((err) => {
				if (isLoaded) setError(err.message);
			})
			.finally(() => {
				if (isLoaded) setLoading(false);
			});

		return () => {
			isLoaded = false;
		};
	}, []);

	return (
		<section className="movies-page">
			<h2>Popular Movies</h2>
			{loading && <p>Loading Movies...</p>}
			{error && <p>{error}</p>}

			<div className="movies-grid">
				{movies.map((movie) => (
					<Card key={movie.imdbID} movie={movie} />
				))}
			</div>
		</section>
	);
}
