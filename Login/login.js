// Use jQuery to handle the click event on the "c" element
$("#c").click(function() {
  // Get the values of the email and password input fields
  var email = $('#email').val();
  var password = $('#password').val();

  // Store the email and password values in localStorage
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

  // Display a confirmation message
  alert('Email and password saved successfully!');

  // Hide the "c" element and show the "login" element
  $("#c").hide();
  $("#login").show();

  // Update the text and class of the "create" element
  $("#create").html("Login");
  $("#create").addClass("ok");
});

// Define the login function to check if the email and password match
function login() {
  // Get the form data
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Check if the email and password match the stored values
  if (email === localStorage.getItem('email') && password === localStorage.getItem('password')) {
    alert("Login successful!");
    window.location.href = "../Home2.html";
  } else {
    alert("Invalid email or password. Please try again.");
  }
}
$("#f").click(function(){
  alert("Password Has been changed");
});