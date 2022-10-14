const header = document.querySelector("header");
const burgerToggle = document.querySelector("#toggle-burger");
let headerHeight = header.offsetHeight;
const heroSection = document.querySelector(".hero");

// Toggle burger menu
burgerToggle.addEventListener("click", () => {
    header.classList.toggle("active");
    document.body.classList.toggle("overflow-hidden");
    heroSection.style.paddingTop = `10.7rem`;
    if (!header.classList.contains("active")) {
        heroSection.style.paddingTop = "5rem";
    }
});

// Adding padding for blue background
heroSection.style.paddingTop = `${headerHeight}px`;