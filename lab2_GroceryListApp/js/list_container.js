import { setOldValue } from "./helper.js";

const list_Items = document.querySelector(".list_items");

list_Items.addEventListener("change", (e) => {
	let Items = JSON.parse(sessionStorage.getItem("items")) || [];
	if (e.target.type === "checkbox") {
		if (e.target.checked) {
			e.target.parentElement.remove();
			list_Items.innerHTML =
				list_Items.innerHTML +
				`<div class="list_item flex items-center gap-3 rounded-xl bg-gray-900 p-3 border border-gray-700 shadow-sm hover:shadow-md transition">
						<input type="checkbox" class="form-checkbox h-4 w-4 text-blue-500 rounded flex-shrink-0" checked/>
						<input type="text" class="strike bg-gray-800 text-gray-100 border border-gray-700 px-2 py-1 rounded flex-1 min-w-0" readonly value="${e.target.nextElementSibling.value}" name="${e.target.nextElementSibling.value}"/>
						<button class="btn_edit bg-gray-700 hover:bg-gray-600 text-gray-100 px-3 py-1.5 rounded-lg text-sm shadow transition flex-shrink-0">Edit</button>
						<button class="btn_delete bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg text-sm shadow transition flex-shrink-0">Delete</button>
					</div>`;
			Items = Items.filter((item) => {
				return item !== e.target.nextElementSibling.value;
			});
			Items.push(e.target.nextElementSibling.value);
		} else {
			e.target.parentElement.remove();
			list_Items.innerHTML =
				`<div class="list_item flex items-center gap-3 rounded-xl bg-gray-900 p-3 border border-gray-700 shadow-sm hover:shadow-md transition">
						<input type="checkbox" class="form-checkbox h-4 w-4 text-blue-500 rounded flex-shrink-0"/>
						<input type="text" class="strike bg-gray-800 text-gray-100 border border-gray-700 px-2 py-1 rounded flex-1 min-w-0" readonly value="${e.target.nextElementSibling.value}" name="${e.target.nextElementSibling.value}"/>
						<button class="btn_edit bg-gray-700 hover:bg-gray-600 text-gray-100 px-3 py-1.5 rounded-lg text-sm shadow transition flex-shrink-0">Edit</button>
						<button class="btn_delete bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg text-sm shadow transition flex-shrink-0">Delete</button>
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
