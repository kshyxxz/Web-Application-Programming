import { useRef, useState } from "react";

export default function FocusInput() {
	const inputRef = useRef(null);
	const [name, setName] = useState("");
	const handleFocus = () => {
		inputRef.current.focus();
	};
	return (
		<div>
			<input
				ref={inputRef}
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Enter your name"
			/>
			<button onClick={handleFocus}>Focus Input</button>
			<p>Name: {name}</p>
		</div>
	);
}
