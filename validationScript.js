// JavaScript code for form validation
//Jessica Snider / 10-20-2025

//Add event listener to submit button
let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", checkVailidity);

// Check if the input value matches the pattern
function checkVailidity() {
  // Retrieve the input field value
  let inputField = document.getElementById("inputField");
  let inputValue = inputField.value;
  
  // Regular expression pattern for alphanumeric input
  let regPattern = /[a-zA-Z0-9]+$/;

  if (regPattern.test(inputValue) == true) {
    // Valid input: display confirmation and submit the form
    inputField.setCustomValidity("");
    alert("The input is valid, form submitted!");
  }
  else {
    // Prevent form from submitting
    // Invalid input: display error message
    inputField.setCustomValidity("Please enter only alphanumeric characters. No spaces or special characters.");
  }
}
