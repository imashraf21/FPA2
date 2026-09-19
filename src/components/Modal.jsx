import "./Modal.css";

export default function Modal({ movie, onClose }) {
	const { Title, imdbRating, Poster, Plot, Year } = movie;

	return (
		<div className="modal" onClick={onClose}>
			<div className="modal-content">
				<div className="modal-backdrop-wrapper">
					<img className="modal-backdrop" src={Poster} alt={Title} />
				</div>

				<div className="modal-body">
					<h2 className="modal-title">{Title}</h2>
					<p className="modal-meta">
						⭐ Rating: {imdbRating} | 📅 Release: {Year}
					</p>
					<h4 className="modal-overview">Overview:</h4>
					<p className="modal-plot">{Plot}</p>

					<button className="modal-close-btn" onClick={onClose}>
						Close
					</button>
				</div>
			</div>
		</div>
	);
}
