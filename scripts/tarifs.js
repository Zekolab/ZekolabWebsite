const pricings = document.querySelectorAll('.pricing_choice');

pricings.forEach(elt => {
    console.log(elt);
    elt.addEventListener('click', () => {
        const currentlyActive = document.querySelector(".pricing_choice.active");
        if (currentlyActive && currentlyActive!==elt) {
            currentlyActive.classList.toggle("active");
            elt.classList.toggle("active");
        } else {
            elt.classList.toggle("active");
        }
    })
})