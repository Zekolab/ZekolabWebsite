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


// let getHeaderHeight = false;
// let isSticky = false;

// window.addEventListener("scroll", () => {

//     if (!getHeaderHeight) {
        headerHeight = header.offsetHeight;
//         getHeaderHeight = !getHeaderHeight;
//     }

//     const {
//         scrollTop,
//         clientHeight
//     } = document.documentElement;


//     if (scrollTop > clientHeight) {
//         header.classList.add("is-sticky");
//         document.body.style.paddingTop = `${headerHeight}px`;
//         // if (!isSticky) {
//         //     header.animate([
//         //         {
//         //             opacity: "0",
//         //             transform: "translateY(-100%)"
//         //         },
//         //         {
//         //             opacity: "1",
//         //             transform: "translateY(0px)"
//         //         }
//         //     ], {
//         //         duration: 400
//         //     });
//         //     // isSticky = true;
//         // }
//     } else {
//         // console.log(isSticky);
//         // if (isSticky) {
//         //     header.animate([
//         //         {
//         //             opacity: "1",
//         //             transform: "translateY(0px)"
//         //         },
//         //         {
//         //             opacity: "0",
//         //             transform: "translateY(-100%)"
//         //         }
//         //     ], {
//         //         duration: 400
//         //     });
//         //     console.log("OK");
//         // }
//         // isSticky = false;
//         header.classList.remove("is-sticky");
//         document.body.style.paddingTop = `0`;
//     }
//     // if (scrollTop > clientHeight) {
//     //     header.classList.add("is-sticky");
//     //     document.body.style.paddingTop = `${headerHeight}px`;
//     //     header.classList.remove("animation-undisplay");
//     //     header.classList.add("animation-display");
//     //     isSticky = true;
//     // } else {
//     //     header.classList.remove("is-sticky");
//     //     header.classList.remove("animation-display");
//     //     if(isSticky) {
//     //         header.classList.add("animation-undisplay");
//     //         isSticky = false;
//     //     }
//     //     document.body.style.paddingTop = `0`;
//     // }
// })

// // var cursor = document.getElementById("cursor");
// // document.body.addEventListener("mousemove", function(e) {
// //   cursor.style.left = e.clientX + "px",
// //     cursor.style.top = e.clientY + "px";
// // });