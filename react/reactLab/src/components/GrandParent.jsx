import { useState } from "react";
import Parent from "./Parent";

export default function Grandparent() {
	const [userName] = useState("John Doe");
	return (
		<div>
			<h2>Grandparent Component</h2>
			<Parent userName={userName} />
		</div>
	);
}
