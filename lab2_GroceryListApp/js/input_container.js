import { getOldValue } from "./helper.js";

const inputItem = document.querySelector("#inputItem");
const addButton = document.querySelector("#addButton");

const listItems = document.querySelector(".list_items");

const addItem = (e) => {
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
		inputItem.value = "";
		sessionStorage.setItem("items", JSON.stringify(items));

		listItems.innerHTML =
			`<div class="list_item">
					<input type="checkbox"/>
					<input type="text" readonly value="${item}" name="${item}"/>
					<button class="btn_edit">Edit</button>
					<button class="btn_delete">Delete</button>
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
