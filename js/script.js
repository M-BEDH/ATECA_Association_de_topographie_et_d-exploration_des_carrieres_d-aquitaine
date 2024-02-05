document.addEventListener("DOMContentLoaded", function () {
    //On va définir une fonction qui va créer les éléments
    function create(tag, parent, className = "", text = "") {
        let e = document.createElement(tag);
        e.className = className;
        e.innerHTML = text;
        parent.appendChild(e);
        return e;
    }

    //On va créer la fonction qui va créer le diaporama
function createDiaporama(parent, images, descriptions) {
    for (let i = 0; i < images.length; i++) {
        let slide = create("div", parent, `slide${i}`);
        let figure = create("figure", slide);
        let img = create("img", figure);
        img.src = 'images/' + images[i];
        img.alt = descriptions[i];
        let figcaption = create("figcaption", figure, "", descriptions[i]);

    }
}
    //On va créer la fonction qui va gérer le diaporama
    let index = 0;
    function diaporama() {
        let slides = document.getElementById("carousel").children;
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }

    //On appelle la fonction
    let images = ["photo1.jpeg", "photo2.jpeg", "photo3.jpeg", "photo4.jpeg", "photo5.jpeg",
        "photo6.jpeg", "photo7.jpeg", "photo8.jpeg", "photo9.jpeg", "photo10.jpeg", "photo11.jpeg",
        "photo12.jpeg", "photo13.jpeg", "photo14.jpeg", "photo15.jpeg"];
    
    let descriptions = ["Orientation avec une carte du réseau faite par notre cartographe",
        "Exploration carrière souterraine", "Concrétions de calcaire", "Passages étroits",
        "Spéléologue et blocs de pierre soutenant le ciel de carrière", "Stalactites",
        "Stalactites et passage vers une autre salle", "Inscription laissée par les anciens",
        "Salle souterraine basse de plafond", "Voiture abandonée dans un couloir souterrain",
        "Carriere souterraine avec mur construit de blocs de pierre éffondré",
        "Passage étroit vers un niveau inférieur", "Concrétions",
        "Tas de guano (en noir)", "Inscriptions avec des noms et des dates"];
    
    let carousel = document.getElementById("carousel");
    createDiaporama(carousel, images, descriptions);

    //On initialise le diaporama
    let slides = carousel.children;
    slides[index].classList.add("active");

    let interval = setInterval(diaporama, 2000);

    // Arrêter le diaporama lorsque la souris est dessus
    carousel.addEventListener('mouseover', function() {
        clearInterval(interval);
    });

    // Reprendre le diaporama lorsque la souris n'est plus dessus
    carousel.addEventListener('mouseout', function() {
        interval = setInterval(diaporama, 2000);
    });

    // Ajouter des flèches pour faire défiler les photos
    let controls = create("div", carousel.parentNode, "controls");
    let prevButton = create("button", controls, "", "Photo Précédente");
    let nextButton = create("button", controls, "", "Photo Suivante");

    prevButton.addEventListener('click', function() {
        slides[index].classList.remove("active");
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add("active");
    });

    nextButton.addEventListener('click', function() {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    });
});s