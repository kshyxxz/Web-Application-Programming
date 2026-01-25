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
	items.unshift(item);
	inputItem.value = "";
	sessionStorage.setItem("items", JSON.stringify(items));
};

addButton.addEventListener("click", addItem);

const foods = JSON.parse(sessionStorage.getItem("items")) || [];
