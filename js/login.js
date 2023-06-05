const form = document.querySelector("form")
const login = document.querySelector("#login")

const API_KEY = "AIzaSyDZpe7XCfJ-XRmRmRZ4Bsbsz9EwvtfO5sU"
form.addEventListener('submit', (e) => {
	e.preventDefault()
	 const email = e.target[0].value;
	 const password = e.target[1].value;

	 const data = {
		 email,
		 password,
		 returnSecureToken:true,
	 }
	fetchAPI(signUp,data)


	})
	
	
	login.addEventListener('click', (e) => {
	 const data = {
		 email: form[0].value,
		 password: form[1].value,
		 returnSecureToken: true,
		}
		fetchAPI(signInWithPassword,data)
})

function fetchAPI(params) {
	fetch(`https://identitytoolkit.googleapis.com/v1/accounts:${params}?key=${API_KEY}`, {
		method: "POST",
		body: JSON.stringify(data)
	}).then(response => console.log(response))
}
