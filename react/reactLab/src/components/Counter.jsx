import { useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<h1>Counter</h1>
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)}>+</button>
			<button onClick={() => setCount(count - 1)}>-</button>
			<button onClick={() => setCount(0)}>Reset</button>
		</div>
	);
}
