const pricings = document.querySelectorAll('.pricing_choice');
const changingPrice = document.querySelector('#price_to_change')

pricings.forEach(elt => {
    elt.addEventListener('click', () => {
        const currentlyActive = document.querySelector(".pricing_choice.active");
        if (currentlyActive!==elt) {
            currentlyActive.classList.toggle("active");
            elt.classList.toggle("active");
            switch (elt.getAttribute('data-value')) {
                case '1' :
                    changingPrice.innerHTML = '<span class="euro">€ </span>49,99 <span class="month">/ 1 mois</span>';
                    break;
                case '6' :
                    changingPrice.innerHTML = '<span class="euro">€ </span>269,99 <span class="month">/ 6 mois</span>';
                    break;
                case '12' :
                    changingPrice.innerHTML = '<span class="euro">€ </span>499,99 <span class="month">/ 12 mois</span>';
                    break;
            }
        }
    })
})

/**
 * Smooth scroll
 */
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
    // console.log(section_promote.offsetWidth);
}

requestAnimationFrame(raf);

const section_promote = document.querySelector('.pricing_promote');
let box_items = gsap.utils.toArray(".promote_card");

console.log(- 100 * box_items.length);
// console.log(-100 * (box_items.length - 1));
// console.log(-100 * (box_items.length - 1));

gsap.to(box_items, {
  xPercent: -100 * (box_items.length - 0.75),
  ease: "sine.out",
  scrollTrigger: {
    trigger: section_promote,
    pin: true,
    scrub: 3,
    snap: 1 / (box_items.length - 1),
    end: "+=" + section_promote.offsetWidth
  }
});