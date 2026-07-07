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

function elemetor(tagname, ...children){
    const element = document.createElement(tagname);
    element.append(...children);
    return element;
}

const header = elemetor("header", 
    elemetor("h3", "Moringa Social"),
    elemetor("ul", 
        elemetor("li", "Sign In"),
        elemetor("li", "Registration")
    )
)

const main = elemetor("main", 
    elemetor("div", "I am main")
)

app.append(header, main)

/* const header = document.createElement("header");

const h3 = document.createElement("h3")
h3.innerText = "Moringa Social"

const a = document.createElement("a")
a.innerText = "Sign In"

const a1 = document.createElement("a")
a1.innerText = "Register";

header.append(h3, a, a1);

const main = document.createElement("main")
main.innerHTML = `<div><h6>Main</h6></div>`

const app = document.querySelector("#app");
app.appendChild(header);
app.appendChild(main);

const aside = document.createElement("aside")
aside.innerText = "Aside"
app.insertBefore(aside, main)


console.log(header); */