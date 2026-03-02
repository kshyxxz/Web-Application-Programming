export default function ProductCard({ laptop }) {
	return (
		<div className="product-card">
			<img
				src={laptop.image}
				alt={laptop.name}
				height="100px"
				width="auto"
			/>
			<h2>{laptop.name}</h2>
			<p>${laptop.price}</p>
		</div>
	);
}
