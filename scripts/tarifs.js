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

/**
 * Smooth scroll
 */
const lenis = new Lenis(
//     {
//     duration: 1.2,
//     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
// }
);

function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const section_2 = document.querySelector('.pricing_promote');
let box_items = gsap.utils.toArray(".promote_card");

gsap.to(box_items, {
  xPercent: -100 * (box_items.length - 3),
  ease: "sine.out",
  scrollTrigger: {
    trigger: section_2,
    pin: true,
    scrub: 3,
    snap: 1 / (box_items.length - 1),
    end: "+=" + section_2.offsetWidth
  }
});