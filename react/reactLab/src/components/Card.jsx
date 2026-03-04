export default function Card({ children }) {
	const cardStyle = {
		border: "1px solid black",
		padding: "15px",
		margin: "10px 0",
	};
	return <div style={cardStyle}>{children}</div>;
}
