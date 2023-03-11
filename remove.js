const form = document.getElementById('removeMemberForm');

form.addEventListener('submit', (event) => {
	event.preventDefault(); // Prevent form from submitting

	// Get form values
	const username = document.getElementById('username').value;
	const fullName = document.getElementById('fullName').value;
	
	// Reset form fields
	form.reset();
});

// Get the button element
const myButton = document.getElementById("myButton");

// Add an event listener for the "click" event
myButton.addEventListener("click", function() {
  // Display a message using the alert function
  alert(" member removed successfully!");
});