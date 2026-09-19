import { useState } from "react";
import "./Modal.css";

export default function Modal({ movie, onClose }) {
	const { Title, imdbRating, Poster, Plot, Year } = movie;
	const FALLBACK_POSTER = "/placeholder.png";

	const initialPoster = Poster && Poster !== "N/A" ? Poster : FALLBACK_POSTER;
	const plot = Plot && Plot !== "N/A" ? Plot : "No summary available.";

	const [imgSrc, setImgSrc] = useState(initialPoster);
	const handleError = () => {
		if (imgSrc !== FALLBACK_POSTER) setImgSrc(FALLBACK_POSTER);
	};

	return (
		<div className="modal" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<div className="modal-backdrop-wrapper">
					<img
						className="modal-backdrop"
						src={imgSrc}
						alt={Title}
						onError={handleError}
					/>
				</div>

				<div className="modal-body">
					<h2 className="modal-title">{Title}</h2>
					<p className="modal-meta">
						⭐ Rating: {imdbRating} | 📅 Release: {Year}
					</p>
					<h4 className="modal-overview">Overview:</h4>
					<p className="modal-plot">{plot}</p>

					<button className="modal-close-btn" onClick={onClose}>
						Close
					</button>
				</div>
			</div>
		</div>
	);
}
