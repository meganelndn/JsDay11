// Exercise 63
// Create a button that counts each time you click on it.. one click = 1, two clicks = 2f etc. 
// Save the number of clicks in localstorage. 
// output the number of clicks in on the page. 
// Revisit the page after closing the browser to see the saved clicks. 

localStorage.setItem("name", "clicks");

let clicks = localStorage.getItem("clicks");
localStorage.clicks = "3";

console.log(clicks)


// Exercise 64
// Create a form that saves the input data from a user (name, lastname and email) with localStorage. 
// If the user doesn't finish typing all data into the form and maybe wants to finish it later. 
// When the user clicks the submit button, the localstorage items should be deleted 
// and the input fields should be cleared. 
// Revisit the page after closing the browser to see the form data. 