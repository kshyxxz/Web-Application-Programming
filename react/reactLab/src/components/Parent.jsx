import Child from "./Child";

export default function Parent({ userName }) {
	return (
		<div>
			<h3>Parent Component</h3>
			<Child userName={userName} />
		</div>
	);
}
