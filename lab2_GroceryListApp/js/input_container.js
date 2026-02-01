import { getOldValue } from "./helper.js";

const inputItem = document.querySelector("#inputItem");
const addButton = document.querySelector("#addButton");

const listItems = document.querySelector(".list_items");

const addItem = (e) => {
	let count = localStorage.getItem("count") || 0;
	if (e.target.innerText === "Add") {
		let items = JSON.parse(localStorage.getItem("items")) || [];
		const item = inputItem.value.trim();
		if (item == "") {
			return;
		}
		for (const x of items) {
			if (x.value === item) {
				alert(`Item (${item}) has already been added.`);
				return;
			}
		}
		items.unshift({ value: item, completed: false });
		count++;
		inputItem.value = "";
		localStorage.setItem("items", JSON.stringify(items));
		localStorage.setItem("count", count);

		listItems.innerHTML =
			`<div class="list_item flex items-center justify-center gap-3 rounded-xl bg-white p-3 border border-gray-200 shadow-sm hover:shadow-md transition">
						<input type="checkbox" class="form-checkbox h-4 w-4 text-blue-500 rounded flex-shrink-0"/>
						<input type="text" class="bg-gray-100 text-gray-900 text-lg px-2 py-1 rounded-lg flex-1 min-w-0 focus:outline-none" readonly value="${item}" name="${item}"/>
						<button class="btn_edit bg-gray-100 hover:bg-gray-200 text-gray-900 px-3 py-1.5 rounded-lg text-sm shadow transition flex-shrink-0">Edit</button>
						<button class="btn_delete bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg text-sm shadow transition flex-shrink-0" aria-label="Delete">x</button>
					</div>` + listItems.innerHTML;
	} else {
		let items = JSON.parse(localStorage.getItem("items")) || [];
		let new_value = e.target.previousElementSibling.value;
		let old_value = getOldValue();
		const new_items = items.map((item) => {
			if (item.value === old_value) {
				item.value = new_value;
			}
			return item;
		});
		localStorage.setItem("items", JSON.stringify(new_items));
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
