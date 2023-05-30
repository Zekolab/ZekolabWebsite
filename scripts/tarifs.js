const pricings = document.querySelectorAll('.pricing_choice');
const changingPrice = document.querySelector('.price_to_change')

pricings.forEach(elt => {
    elt.addEventListener('click', () => {
        const currentlyActive = document.querySelector(".pricing_choice.active");
        if (currentlyActive!==elt) {
            currentlyActive.classList.toggle("active");
            elt.classList.toggle("active");
            // console.log(elt.getAttribute('data-value'));
            switch (elt.getAttribute('data-value')) {
                case '1' :
                    changingPrice.innerText = '49,99';
                    break;
                case '6' :
                    changingPrice.innerText = '269,99';
                    break;
                case '12' :
                    changingPrice.innerText = '499,99';
                    break;
            }
        }
    })
})