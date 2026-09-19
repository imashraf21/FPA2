import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { fetchMoviesById } from "../services/omdb";
import { HERO_IMDB_IDS } from "../data/heroPoster";
import "./Home.css";

export default function Home() {
	const navigate = useNavigate();
	const [poster, setPoster] = useState(null);

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * HERO_IMDB_IDS.length);
		const selectedID = HERO_IMDB_IDS[randomIndex];

		fetchMoviesById(selectedID)
			.then((movie) => {
				if (movie?.Poster && movie.Poster !== "N/A")
					setPoster(movie.Poster);
			})
			.catch(() => {});
	}, []);

	return (
		<section
			className="hero"
			style={{ "--hero-bg": poster ? `url(${poster})` : "none" }}
		>
			<div className="hero-content">
				<h1>Uncover Your Next Great Watch</h1>
				<p>Discover popular movies powered by OMDb.</p>
				<button
					className="browse-btn"
					onClick={() => navigate("/movies")}
				>
					Browse Movies
				</button>
			</div>
		</section>
	);
}
