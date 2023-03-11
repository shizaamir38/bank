// get references to the buttons
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

// add click event listeners to the buttons
button1.addEventListener('click', () => {
	window.location.href = 'mainuser.html';
});

button2.addEventListener('click', () => {
	window.location.href = 'statements.html';
});
function addMember() {
    var form = document.getElementById("add-member-form");
    var username = form.elements["username"].value;
    var fullName = form.elements["full-name"].value;
    var dob
}  