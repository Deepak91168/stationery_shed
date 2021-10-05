const formInput = document.querySelector("#form");
const usernameInput = document.querySelector("#yourname");
const passwordInput = document.querySelector("#psw");
const passConfirmInput = document.querySelector("#cpsw");
const scriptURL =
	"https://script.google.com/macros/s/AKfycbysvyoSazZ1WDlEKVNVwR1eyb3uZPvUMMdjlGiCxtzSW7rngVVkuKOMJYm8DV7klYXM/exec";
const errorsContainer = document.querySelector(".errors");
const errorsList = document.querySelector(".errors-list");
const phoneInput = document.querySelector("#number");

formInput.addEventListener("submit", (e) => {
	const phoneTest = new RegExp(
		/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/
	);
	const errorMessages = [];
	clearErrors();
	console.log("here");
	//      1. Ensure the username is at least 6 characters long
	if (usernameInput.value.length < 6) {
		errorMessages.push("Username must be at least 6 characters");
	}
	//      2. Ensure the password is at least 10 characters long
	if (passwordInput.value.length < 10) {
		errorMessages.push("Password must be at least 10 characters");
	}
	//      3. Ensure the password and confirmation password match
	if (passConfirmInput.value !== passwordInput.value) {
		errorMessages.push("Passwords must match");
	}
	if (!phoneTest.test(phoneInput)) {
		errorMessages.push("Please enter a valid phone number");
	}
	if (errorMessages.length > 0) {
		showErrors(errorMessages);
		e.preventDefault();
	}
	if ((errorMessages.length = 0)) {
		e.preventDefault();
		fetch(scriptURL, {
			method: "POST",
			body: new FormData(form),
		})
			.then((response) => alert("Logged in successfully"))
			.catch((error) => console.error("Error!", error.message));
	}
});

function clearErrors() {
	while (errorsList.children[0] != null) {
		errorsList.removeChild(errorsList.children[0]);
	}
	errorsContainer.classList.remove("show");
}

function showErrors(errorMessages) {
	errorMessages.forEach((errorMessage) => {
		const li = document.createElement("li");
		li.innerText = errorMessage;
		errorsList.appendChild(li);
	});
	errorsContainer.classList.add("show");
}
