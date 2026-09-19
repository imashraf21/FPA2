import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import "./App.css";

function App() {
	return (
		<div className="app-layout">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movies" element={<Movies />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
