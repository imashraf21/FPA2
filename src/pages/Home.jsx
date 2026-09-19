import { useNavigate } from "react-router";
import "./Home.css";

export default function Home() {
	const navigate = useNavigate();

	return (
		<section className="hero">
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
