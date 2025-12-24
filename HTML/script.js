// // let god = ["ram", "krishna", "vishnu", "shiva", "ganesha"];
// // let weapons = ["sword", "mace", "discus", "bow", "arrow"];

// // for (let item of gods) {
// // 	console.log(item);
// // 	for (let weapon of weapons) {
// // 	}
// // 	console.log(item);
// // }

// //spread operator

// // const arr1 = [1, 2, 3];
// // const arr2 = [4, 5, 6];
// // const combined = [...arr1, ...arr2];
// // console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// const person = {
// 	name: "Alice",
// 	age: 20,
// };
// const person2 = person;
// person2.age = 30;
// console.log(person.age); // Output: 30

// const person3 = { ...person };
// person3.age = 40;
// console.log(person.age);

// const address = {
// 	city: "New York",
// 	country: "USA",
// };
// const personWithAddress = { ...person, ...address };
// console.log(personWithAddress);

// // function addNumbers(...nums) {
// // 	let total = 0;
// // 	for (let n of nums) {
// // 		total += n;
// // 	}
// // 	return console.log(total);
// // }

// // const anyNums = [20, 30, 40];
// // addNumbers(...anyNums, 100);

// // const addNum = (...nums) => {
// // 	let total = 0;
// // 	for (let n of nums) {
// // 		total += n;
// // 	}
// // 	return console.log(total);
// // };
// // addNum(10, 203, 40);

// // const fruits = ["appple", "banana"];
// // fruits.shift();
// // console.log(fruits);
// // fruits.unshift("litchi");
// // console.log(fruits);

// // fruits.forEach((fruit, key) => {
// // 	console.log(`${++key} ${fruit}`);
// // });

// // const fruitsNew = fruits.map((fruit) => {
// // 	return `${fruit} namesss`;
// // });

// const numbers = [10, 21, 41, 1, 5, 8, 65, 41, 87, 99];
// let min = numbers[0];
// let max = numbers[0];
// for (num of numbers) {
// 	if (num <= min) {
// 		min = num;
// 	}
// 	if (num >= max) {
// 		max = num;
// 	}
// }

// const multiply = (a, b) => {
// 	return a * b;
// };

// const btn = document.querySelector("button");
// const func = () => {
// 	alert("Button clicked!");
// };
// btn.addEventListener("click", func);
let fact = 1;
const factorial = (n) => {
	while (n > 0) {
		fact *= n;
		n--;
	}
	return fact;
};
result = factorial(5);
