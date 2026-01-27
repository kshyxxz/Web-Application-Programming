import { setOldValue } from "./helper.js";

const list_Items = document.querySelector(".list_items");

list_Items.addEventListener("change", (e) => {
	let Items = JSON.parse(sessionStorage.getItem("items")) || [];
	if (e.target.type === "checkbox") {
		if (e.target.checked) {
			e.target.parentElement.remove();
			list_Items.innerHTML =
				list_Items.innerHTML +
				`<div class="list_item">
					<input type="checkbox" checked/>
					<input type="text" class="strike" readonly value="${e.target.nextElementSibling.value}" name="${e.target.nextElementSibling.value}"/>
					<button class="btn_edit">Edit</button>
					<button class="btn_delete">Delete</button>
				</div>`;
			Items = Items.filter((item) => {
				return item !== e.target.nextElementSibling.value;
			});
			Items.push(e.target.nextElementSibling.value);
		} else {
			e.target.parentElement.remove();
			list_Items.innerHTML =
				`<div class="list_item">
					<input type="checkbox"/>
					<input type="text" readonly value="${e.target.nextElementSibling.value}" name="${e.target.nextElementSibling.value}"/>
					<button class="btn_edit">Edit</button>
					<button class="btn_delete">Delete</button>
				</div>` + list_Items.innerHTML;
			Items = Items.filter((item) => {
				return item !== e.target.nextElementSibling.value;
			});
			Items.unshift(e.target.nextElementSibling.value);
		}
		sessionStorage.setItem("items", JSON.stringify(Items));
	}
});

list_Items.addEventListener("click", (e) => {
	let Count = sessionStorage.getItem("count");
	if (e.target.tagName === "BUTTON") {
		const btn = e.target;
		const div = btn.parentElement;
		let textInput = div.querySelector("input[type='text']");
		let ss_Items = JSON.parse(sessionStorage.getItem("items")) || [];

		if (btn.classList.contains("btn_edit")) {
			const inputItem = document.querySelector("#inputItem");
			inputItem.value = textInput.value;
			inputItem.nextElementSibling.innerText = "Save";
			setOldValue(textInput.value);
		}
		if (btn.classList.contains("btn_delete")) {
			div.remove();
			ss_Items = ss_Items.filter(
				(item) =>
					item.toLowerCase() !== textInput.value.trim().toLowerCase(),
			);
			sessionStorage.setItem("items", JSON.stringify(ss_Items));
			Count = sessionStorage.getItem("count");
			sessionStorage.setItem("count", Count - 1);
		}
	}
});
