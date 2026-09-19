import { useState } from "react";
import "./Card.css";

export default function Card({ movie, onClick }) {
	const { Title, imdbRating, Poster, Plot } = movie;
	const FALLBACK_POSTER = "/placeholder.png";

	const initialPoster = Poster && Poster !== "N/A" ? Poster : FALLBACK_POSTER;
	const plot = Plot && Plot !== "N/A" ? Plot : "No summary available.";

	const [imgSrc, setImgSrc] = useState(initialPoster);
	const handleError = () => {
		if (imgSrc !== FALLBACK_POSTER) setImgSrc(FALLBACK_POSTER);
	};

	return (
		<div className="movie-card" onClick={onClick} role="button">
			<img
				className="movie-poster"
				src={imgSrc}
				alt={Title}
				onError={handleError}
			/>
			<div className="movie-info">
				<h3 className="movie-title">{Title}</h3>
				<span className="movie-rating">⭐ {imdbRating}</span>
				<p className="movie-summary">{plot}</p>
			</div>
		</div>
	);
}
