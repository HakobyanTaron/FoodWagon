const form = document.querySelector("form")
const login = document.querySelector("#login")

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const email = e.target[0].value;
	const password = e.target[1].value;
	const data = {
		email,
		password,
		returnSecureToken: true,
	}

	fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZpe7XCfJ-XRmRmRZ4Bsbsz9EwvtfO5sU", {
		method: "post",
		body: JSON.stringify(data)
	}).then(response => console.log(response))

})

login.addEventListener('click', (e) => {
	const data = {
		email: "asa@mail.ru",
		password: "hayko808080",
		returnSecureToken: true,
	}

	fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZpe7XCfJ-XRmRmRZ4Bsbsz9EwvtfO5sU", {
		method: "POST",
		body: JSON.stringify(data)
	}).then(response => console.log(response))
})