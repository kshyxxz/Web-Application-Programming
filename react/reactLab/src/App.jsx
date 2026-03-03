import ProductCard from "./components/ProductCard";
import Counter from "./components/Counter";
import LoginStatus from "./components/LoginStatus";
import RegistrationForm from "./components/RegistrationForm";
import WindowResizeListener from "./components/WindowResizeListener";

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
			<p>kshyxxz</p>
		</div>
	);
}
