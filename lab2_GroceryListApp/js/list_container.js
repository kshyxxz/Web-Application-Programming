import { setOldValue } from "./helper.js";

const list_Items = document.querySelector(".list_items");

list_Items.addEventListener("change", (e) => {
	if (e.target.type === "checkbox") {
		e.target.nextElementSibling.classList.toggle("strike");
	}
});

list_Items.addEventListener("click", (e) => {
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
		}
	}
});
