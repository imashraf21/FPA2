import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getPopularMovies, searchMovies } from "../services/omdb";
import "./Movies.css";
import Modal from "../components/Modal";

export default function Movies() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [query, setQuery] = useState("");
	const [selectedMovie, setSelectedMovie] = useState(null);
	const [heading, setHeading] = useState("Top 50 Movies");

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

	const handleSearch = async (e) => {
		e.preventDefault();
		const trimmed = query.trim();

		setLoading(true);
		setError(null);

		try {
			const res = await searchMovies(trimmed);
			setMovies(res);
			setHeading(`Results for "${trimmed}".`);
			console.log(trimmed);
			console.log(movies);

			if (res.length === 0) {
				setError(`No movies found for "${trimmed}".`);
			}
		} catch (err) {
			setError(err.message);
			setMovies([]);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className="movies-page">
			<h2>{heading}</h2>

			<form className="search-bar" onSubmit={handleSearch}>
				<input
					type="text"
					placeholder="Search movies by title..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="submit">Search</button>
			</form>

			{loading && <p>Loading Movies...</p>}
			{error && <p>{error}</p>}

			<div className="movies-grid">
				{movies.map((movie) => (
					<Card
						key={movie.imdbID}
						movie={movie}
						onClick={() => setSelectedMovie(movie)}
					/>
				))}
			</div>

			{selectedMovie && (
				<Modal
					movie={selectedMovie}
					onClose={() => setSelectedMovie(null)}
				/>
			)}
		</section>
	);
}
