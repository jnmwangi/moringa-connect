import './style.css'
import { feeds } from "./data";
import { feedUIComponent } from './feed';

const main = document.querySelector("main");

// How do we render our feeds dynamically using the data and 
// feedUIComponent function. Iterate through data

main.innerHTML = feeds.map(feedUIComponent).join("");

document.querySelectorAll(".feed").forEach(feed => {

    feed.querySelector('.like-button').addEventListener("click", (evnt) => {

        // Hint: we can use the event object
        const button = evnt.currentTarget;

        const feedId = Number(button.getAttribute("data-feedid"));
        const feed = feeds.find(f => f.id === feedId)
        feed.likes += 1;

        button.querySelector(".num-likes").textContent = feed.likes;
    });

    feed.querySelector(".comment-form").addEventListener("submit", (evnt) => {
        evnt.preventDefault();

        const input = event.target.querySelector(".comment-input");
        const comment = input.value;

        console.log(comment);
        /** Assign
         * Add this comment to the list of comments below the specific post
         */
        
    });
});
