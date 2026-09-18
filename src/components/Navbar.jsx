import { NavLink } from "react-router";
import "./Navbar.css";

export default function Navbar() {
	const navClass = ({ isActive }) => `nav-btn ${isActive ? "active" : ""}`;
	return (
		<nav className="navbar">
			<div className="navbar-brand">🎬 MovieHub</div>
			<div className="navbar-links">
				<NavLink to="/" className={navClass}>
					Home
				</NavLink>
				<NavLink to="/movies" className={navClass}>
					Movies
				</NavLink>
			</div>
		</nav>
	);
}
