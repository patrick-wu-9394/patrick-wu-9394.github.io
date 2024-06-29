// Define the starting year
const startingYear = 2017;

// Get the current year
const currentYear = new Date().getFullYear();

// Calculate the years of experience
const yearsOfExperience = currentYear - startingYear;

// Display the years of experience in the HTML
document.getElementById('years-experience').textContent = yearsOfExperience;