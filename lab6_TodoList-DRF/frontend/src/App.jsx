import { useState, useEffect } from "react";
import { fetchTodos, createTodo, updateTodo, deleteTodo } from "./api";
import "./App.css";

export default function App() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchTodos()
			.then((res) => setTodos(res.data))
			.finally(() => setLoading(false));
	}, []);

	const handleAdd = async () => {
		if (!input.trim()) return;
		const res = await createTodo({ title: input, completed: false });
		setTodos([res.data, ...todos]);
		setInput("");
	};

	const handleToggle = async (todo) => {
		const res = await updateTodo(todo.id, { completed: !todo.completed });
		setTodos(todos.map((t) => (t.id === todo.id ? res.data : t)));
	};

	const handleDelete = async (id) => {
		await deleteTodo(id);
		setTodos(todos.filter((t) => t.id !== id));
	};

	return (
		<div className="app">
			<h1>📝 Todo App</h1>

			<div className="input-row">
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && handleAdd()}
					placeholder="Add a new task..."
				/>
				<button onClick={handleAdd}>Add</button>
			</div>

			{loading ? (
				<p>Loading...</p>
			) : todos.length === 0 ? (
				<p className="empty">No todos yet. Add one above!</p>
			) : (
				<ul>
					{todos.map((todo) => (
						<li
							key={todo.id}
							className={todo.completed ? "done" : ""}
						>
							<input
								type="checkbox"
								checked={todo.completed}
								onChange={() => handleToggle(todo)}
							/>
							<span>{todo.title}</span>
							<button
								className="delete"
								onClick={() => handleDelete(todo.id)}
							>
								✕
							</button>
						</li>
					))}
				</ul>
			)}

			<p className="count">
				{todos.filter((t) => !t.completed).length} task(s) remaining
			</p>
		</div>
	);
}
