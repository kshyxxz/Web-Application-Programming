let oldValue = "";

export function setOldValue(val) {
	oldValue = val;
}

export function getOldValue() {
	return oldValue;
}

let count = 0;

export function countInput(val) {
	count = val;
}

export function countList() {
	return count;
}
