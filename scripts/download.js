const sentence = document.querySelectorAll("h1 span");
const images = document.querySelectorAll("img");
const logo = document.querySelector(".download > a")
const cta = document.querySelector(".ctas_store")

let delay = 250;

sentence.forEach(elem => {
    setTimeout(() => {
        elem.style.opacity = "1";
        elem.style.transform = "translateY(0)";
    }, delay);
    delay += 250;
})

setTimeout(() => {
    cta.style.opacity = "1";
    logo.style.opacity = "1";
    images.forEach(img => {
        img.style.opacity = "1";
        console.log(img);
    })
// }, 3000);
}, 10);