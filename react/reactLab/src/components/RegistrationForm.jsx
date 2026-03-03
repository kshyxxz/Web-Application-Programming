import { use, useState } from "react";

export default function RegistrationForm() {
	const [details, setDetails] = useState({
		username: "",
		email: "",
		age: "",
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`Welcome, ${details.username}!`);
	};
	return (
		<div>
			<h2>Registration Form</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Username"
					value={details.username}
					onChange={(e) =>
						setDetails({ ...details, username: e.target.value })
					}
				/>{" "}
				<br />
				<input
					type="email"
					placeholder="Email"
					value={details.email}
					onChange={(e) =>
						setDetails({ ...details, email: e.target.value })
					}
				/>{" "}
				<br />
				<input
					type="number"
					placeholder="Age"
					value={details.age}
					onChange={(e) =>
						setDetails({ ...details, age: e.target.value })
					}
				/>{" "}
				<br />
				<button type="submit">Register</button>
			</form>
		</div>
	);
}
