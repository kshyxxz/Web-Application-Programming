import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import UserProfile from "./components/UserProfile";
import ProductCard from "./components/ProductCard";
import Counter from "./components/Counter";
import LoginStatus from "./components/LoginStatus";
import RegistrationForm from "./components/RegistrationForm";
import WindowResizeListener from "./components/WindowResizeListener";
import FetchUsers from "./components/FetchUsers";
import FocusInput from "./components/FocusInput";
import Card from "./components/Card";
import GrandParent from "./components/GrandParent";
import Parent from "./components/Parent";
import Child from "./components/Child";

export default function App() {
	const laptops = [
		{
			id: 1,
			name: "MacBook Pro",
			price: 1999,
			image: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/mbp14-m4-2024.png",
		},
		{
			id: 2,
			name: "Dell XPS 13",
			price: 1499,
			image: "https://img.drz.lazcdn.com/static/np/p/9c05622b2b539ed1349c3f2869757459.jpg_720x720q80.jpg",
		},
		{
			id: 3,
			name: "HP Spectre x360",
			price: 1299,
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm6_iB9fcXa0_PDASyHgLzuto1IPBM-kKRgA&s",
		},
	];
	return (
		<div>
			<ProductCard laptop={laptops[0]} />
			<ProductCard laptop={laptops[1]} />
			<ProductCard laptop={laptops[2]} />
			<Counter />
			<LoginStatus />
			<RegistrationForm />
			<WindowResizeListener />
			<FetchUsers />
			<FocusInput />
			<BrowserRouter>
				<Navigation />
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/user/:userId" element={<UserProfile />} />
				</Routes>
			</BrowserRouter>
			<Card>
				<p>This is a simple text paragraph inside the card.</p>
			</Card>
			<Card>
				<button>Click Me</button>
			</Card>
			<Card>
				<h3>List Example</h3>
				<ul>
					<li>Item One</li>
					<li>Item Two</li>
					<li>Item Three</li>
				</ul>
			</Card>
			<GrandParent />
			<p>kshyxxz</p>
		</div>
	);
}
