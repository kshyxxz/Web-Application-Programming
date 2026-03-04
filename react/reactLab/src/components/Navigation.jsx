import { Link } from "react-router-dom";

export default function Navigation() {
	return (
		<nav>
			<Link to="/home">Home</Link> | <Link to="/about">About</Link> |{" "}
			<Link to="/user/101">User 101</Link>
		</nav>
	);
}
