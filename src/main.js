import './style.css'
import { feeds } from "./data";
import { feedUIComponent } from './feed';

const main = document.querySelector("main");

// How do we render our feeds dynamically using the data and 
// feedUIComponent function. Iterate through data

main.innerHTML = feeds.map(feedUIComponent).join("");

document.querySelectorAll(".like-button").forEach(button => {
    button.addEventListener("click", (evnt) => {
        const feedId = Number(button.getAttribute("data-feedid"));
        const feed = feeds.find(f => f.id === feedId)
        feed.likes += 1;

        button.querySelector(".num-likes").textContent = feed.likes;
    });
});
