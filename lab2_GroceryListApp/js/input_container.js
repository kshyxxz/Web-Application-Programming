const inputItem = document.querySelector("#inputItem");
const addButton = document.querySelector("#addButton");

const items = [];

const addItem = () => {
	const item = inputItem.value.trim();
	if (item == "") {
		return;
	}
	for (const x of items) {
		if (x == item) {
			alert(`Item (${item}) has already been added.`);
			return;
		}
	}
	items.push(item);
	inputItem.value = "";
	items.reverse();
	sessionStorage.setItem("items", items);
};

addButton.addEventListener("click", addItem);
