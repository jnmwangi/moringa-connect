import './style.css'


/**
 * When encounter a js file
 * Take all the html elements and create a 
 * js object that references all the current html elements
 * called the DOM(Document Object Model)
 */

// if document is an object, what does it give us as devs
document

// Difference between querySelector and querySelectorAll
// Node
const header = document.createElement("header");
header.innerText = "Moringa Social";

const app = document.querySelector("#app");
app.appendChild(header);


console.log(header);