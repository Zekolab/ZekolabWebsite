document.addEventListener("DOMContentLoaded", () => {
    const offset = document.querySelector("#scrollToContent").offsetTop;

    window.scrollTo({
        top: offset
    })
})