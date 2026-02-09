$(document).ready(function () {
	let todos = JSON.parse(localStorage.getItem("todos")) || [];

	function renderTodos() {
		$("#todo_list").empty();
		todos.forEach((todo, index) => {
			const todoItem = `
				<li class="${todo.completed ? "completed" : ""}">
					<span data-index="${index}">${todo.text}</span>
					<button class="delete-btn" data-index="${index}">X</button>
				</li>
			`;
			$("#todo_list").append(todoItem);
		});
		localStorage.setItem("todos", JSON.stringify(todos));
	}

	$("#add_button").click(function () {
		const task = $("#todo_input").val().trim();
		if (task === "") return;
		todos.push({ text: task, completed: false });
		$("#todo_input").val("");
		renderTodos();
	});

	$("#todo_input").keypress(function (e) {
		if (e.which === 13) $("#add_button").click();
	});

	$(document).on("click", "li span", function () {
		const index = $(this).data("index");
		todos[index].completed = !todos[index].completed;
		renderTodos();
	});

	$(document).on("click", ".delete-btn", function () {
		const index = $(this).data("index");
		todos.splice(index, 1);
		renderTodos();
	});

	renderTodos();
});
