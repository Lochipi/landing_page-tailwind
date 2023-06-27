const currentYear = document.getElementById('year')

const date = new Date()
const year = date.getFullYear();

currentYear.innerText = year;

console.log(year);