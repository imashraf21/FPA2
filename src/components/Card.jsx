import "./Card.css";

export default function Card({ movie, onClick }) {
	const { Title, imdbRating, Poster, Plot } = movie;

	return (
		<div className="movie-card" onClick={onClick} role="button">
			<img className="movie-poster" src={Poster} alt={Title} />
			<div className="movie-info">
				<h3 className="movie-title">{Title}</h3>
				<span className="movie-rating">⭐ {imdbRating}</span>
				<p className="movie-summary">{Plot}</p>
			</div>
		</div>
	);
}
