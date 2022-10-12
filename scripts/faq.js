const allQuestions = document.querySelectorAll('.questions'); // On récupère les question

allQuestions.forEach((elt) => {
    elt.addEventListener('click', () => {

        const currentlyActive = document.querySelector(".questions.active"); // On récupère la question déjà ouverte
        if (currentlyActive && currentlyActive!==elt) { // On ferme la question déjà ouverte
            currentlyActive.classList.toggle("active");
            elt.classList.toggle("active");
        } else {
            elt.classList.toggle("active");
        }
    });
})