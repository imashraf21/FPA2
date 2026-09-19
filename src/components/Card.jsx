import "./Card.css";

export default function Card(movie) {
	const { Title, imdbRating, Poster, Plot } = movie.movie;
	console.log(Title);

	return (
		<div className="movie-card">
			<img className="movie-poster" src={Poster} alt={Title} />
			<div className="movie-info">
				<h3 className="movie-title">{Title}</h3>
				<span className="movie-rating">⭐ {imdbRating}</span>
				<p className="movie-summary">{Plot}</p>
			</div>
		</div>
	);
}
