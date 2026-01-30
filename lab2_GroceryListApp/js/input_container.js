import { getOldValue } from "./helper.js";

const inputItem = document.querySelector("#inputItem");
const addButton = document.querySelector("#addButton");

const listItems = document.querySelector(".list_items");

const addItem = (e) => {
	let count = sessionStorage.getItem("count") || 0;
	if (e.target.innerText === "Add") {
		let items = JSON.parse(sessionStorage.getItem("items")) || [];
		const item = inputItem.value.trim();
		if (item == "") {
			return;
		}
		for (const x of items) {
			if (x === item) {
				alert(`Item (${item}) has already been added.`);
				return;
			}
		}
		items.unshift(item);
		count++;
		inputItem.value = "";
		sessionStorage.setItem("items", JSON.stringify(items));
		sessionStorage.setItem("count", count);

		listItems.innerHTML =
			`<div class="list_item flex items-center gap-2">
						<input type="checkbox" class="form-checkbox h-4 w-4 text-blue-400"/>
						<input type="text" class="bg-gray-800 text-gray-100 border border-gray-700 px-2 py-1 rounded" readonly value="${item}" name="${item}"/>
						<button class="btn_edit bg-gray-700 hover:bg-gray-600 text-gray-100 px-3 py-1 rounded ml-2 shadow">Edit</button>
						<button class="btn_delete bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded ml-2 shadow">Delete</button>
					</div>` + listItems.innerHTML;
	} else {
		let items = JSON.parse(sessionStorage.getItem("items")) || [];
		let new_value = e.target.previousElementSibling.value;
		let old_value = getOldValue();
		const new_items = items.map((item) => {
			if (item === old_value) {
				item = new_value;
			}
			return item;
		});
		sessionStorage.setItem("items", JSON.stringify(new_items));
		e.target.innerText = "Add";
		e.target.previousElementSibling.value = "";
		const listItemInputs = listItems.querySelectorAll("input[type='text']");
		listItemInputs.forEach((input) => {
			if (input.value === old_value) {
				input.value = new_value;
			}
		});
	}
};

addButton.addEventListener("click", addItem);
