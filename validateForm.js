const validData = {
	firstname: /^[a-zA-Z]+$/i,
	lastname: /^[a-zA-Z]+$/i,
	email: /^([\w.-]+)@([\w-]+\.)+([\w]{2,})$/i,
	phone: /^\+?\d+$/i,
	message: /.*/i,
};

let inputData = {
	firstname: "",
	lastname: "",
	email: "",
	phone: "",
	message: "",
};

let inputs = {
	firstname: document.querySelector("#firstname"),
	lastname: document.querySelector("#lastname"),
	email: document.querySelector("#email"),
	phone: document.querySelector("#phone"),
	message: document.querySelector("#message"),
	reason: document.querySelector("#reason"),
};

let errors = {
	firstname: document.querySelector(".error-firstname"),
	lastname: document.querySelector(".error-lastname"),
	email: document.querySelector(".error-email"),
	phone: document.querySelector(".error-phone"),
	message: document.querySelector(".error-message"),
	form: document.querySelector(".error-form"),
};

function validateField(name, value) {
	if (!value) return false;
	if (name === "firstname") {
		if (value && value.length < 3) return false;
		else if (value && !validData[name].test(value)) return false;
	} else if (name === "lastname") {
		if (value && value.length < 3) return false;
		else if (value && !validData[name].test(value)) return false;
	} else if (name === "email") {
		if (value && !validData[name].test(value)) return false;
	} else if (name === "phone") {
		if (value && !validData[name].test(value)) return false;
	}
	return true;
}

function validateOnBlur() {
	let { name, value } = event.target;
	// let divError = document.querySelector(`.error-${name}`);
	// divError.classList.remove("active");
	errors[name].classList.remove("active");
	if (!value) {
		// divError.innerHTML = "Value is required";
		// divError.classList.add("active");
		errors[name].innerHTML = "The field is required";
		errors[name].classList.add("active");
	} else if (!validateField(name, value)) {
		// divError.innerHTML = "Incorrect value";
		// divError.classList.add("active");
		errors[name].innerHTML = "Incorrect value";
		errors[name].classList.add("active");
	}
}

function validateOnInput() {
	let { name, value } = event.target;
	inputData[name] = value;
	// let divError = document.querySelector(`.error-${name}`);
	// divError.classList.remove("active");
	errors[name].classList.remove("active");
	errors["form"].classList.remove("active");
	if (value && !validData[name].test(value)) {
		// divError.innerHTML = "Incorrect value";
		// divError.classList.add("active");
		errors[name].innerHTML = "Incorrect value";
		errors[name].classList.add("active");
	}
}

function submitForm() {
	// console.log("submit");
	event.preventDefault();
	errors["form"].classList.remove("active");
	let formValid = 1;
	for (let key in inputData) {
		// formValid = validData[key].test(inputData[key]);
		let checkField = validateField(key, inputData[key]);
		if (!checkField) errors[key].classList.add("active");
		formValid *= checkField;
	}
	if (!Boolean(formValid)) {
		// divError.classList.add("active");
		errors["form"].classList.add("active");
		return;
	}
	for (let key in inputs) {
		// let control = document.querySelector(`#${key}`);
		// control.value = "";
		inputs[key].value = "";
	}
	// let control = document.querySelector(`#reason`);
	// control.value = "Reason1";
	inputs["reason"].value = "Reason1";
	alert("Message sent!");
}
