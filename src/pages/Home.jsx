import { useNavigate } from "react-router";
import "./Home.css";

export default function Home() {
	const navigate = useNavigate();

	return (
		<section className="hero">
			<div className="hero-content">
				<h1>Unlimited Movies, Anytime!</h1>
				<p>Discover trending and popular films powered by OMDb.</p>
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
