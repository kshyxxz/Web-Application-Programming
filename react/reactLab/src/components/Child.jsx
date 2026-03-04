export default function Child({ userName }) {
	return (
		<div>
			<h4>Child Component</h4>
			<p>User Name: {userName}</p>
			<p>(Prop passed from Grandparent → Parent → Child)</p>
		</div>
	);
}
