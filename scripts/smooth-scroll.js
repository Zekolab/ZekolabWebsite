let heightHeader = document.querySelector("header").offsetHeight;

let links = document.querySelectorAll(".toc > a");

links.forEach((link) => {
    link.addEventListener("click", () => {
        console.log("link");
    })
})