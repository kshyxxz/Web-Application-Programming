import { useState } from "react";

export default function LoginStatus() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (
		<div>
			<p>{isLoggedIn ? "Welcome back!" : "Please log in"}</p>
			<p>{isLoggedIn && "You have 3 new messages"}</p>
			<p>{!isLoggedIn && "Log in to see your messages"}</p>
			<button onClick={() => setIsLoggedIn(!isLoggedIn)}>
				{isLoggedIn ? "Logout" : "Login"}
			</button>
		</div>
	);
}
