function handleSubmit(event) {
	event.preventDefault();
	const form = document.querySelector("#myform");
	const formData = new FormData(form);

	const email = formData.get("email");
	const phone = formData.get("phone");
	const password = formData.get("password");

	const emailRegex = /^[a-zA-Z0-9-_\.]+@[A-Za-z-_\.]+\.[a-zA-z]{2,}$/;
	const phoneRegex = /^(?:9[0-9]{9}|01[0-9]{7})$/;
	const passwordRegex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9\s]).{8,}$/;

	if (!emailRegex.test(email)) {
		alert("ERROR email");
		return;
	}
	if (!phoneRegex.test(phone)) {
		alert("ERROR phone");
		return;
	}
	if (!passwordRegex.test(password)) {
		alert("ERROR password");
		return;
	}

	console.log(email);
	console.log(phone);
	console.log(password);
}
