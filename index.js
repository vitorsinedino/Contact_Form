function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "vitorsinedino@gmail.com",
	Password : "dd4771927d",
	To : 'vitorsinedino@gmail.com',
	From : "vitor",
	Subject : "TEST",
	Body : "Test 123",
	}).then(
		message => alert("mail sent successfully")
	);
}