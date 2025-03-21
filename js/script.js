document.addEventListener("DOMContentLoaded", function () {
    // Fonction pour créer un élément et l'ajouter à un parent
    function create(tag, parent, className = "", text = "") {
        if (!parent) {
            console.error(`Erreur : parent null pour l'élément <${tag}>`);
            return null;
        }
        let e = document.createElement(tag);
        if (className) e.className = className;
        if (text) e.innerHTML = text;
        parent.appendChild(e);
        return e;
    }

    // Vérification de l'existence du conteneur
    let carousel = document.getElementById("carousel");
    if (!carousel) {
        console.error("Erreur : L'élément #carousel est introuvable.");
        return;
    }

    // Liste des images et descriptions
    let images = [
        "photo1.jpeg", "photo2.jpeg", "photo3.jpeg", "photo4.jpeg", "photo5.jpeg",
        "photo6.jpeg", "photo7.jpeg", "photo8.jpeg", "photo9.jpeg", "photo10.jpeg",
        "photo11.jpeg", "photo12.jpeg", "photo13.jpeg", "photo14.jpeg", "photo15.jpeg"
    ];
    
    let descriptions = [
        "Orientation avec une carte du réseau", "Exploration carrière souterraine", "Concrétions de calcaire",
        "Passages étroits", "Spéléologue et blocs de pierre", "Stalactites", "Stalactites et passage vers une autre salle",
        "Inscription laissée par les anciens", "Salle souterraine basse de plafond", "Voiture abandonnée",
        "Carrière souterraine avec mur effondré", "Passage étroit vers un niveau inférieur", "Concrétions",
        "Tas de guano (en noir)", "Inscriptions avec des noms et des dates"
    ];

    // Création du diaporama
    function createDiaporama(parent, images, descriptions) {
        images.forEach((image, i) => {
            let slide = create("div", parent, "slide");
            let figure = create("figure", slide);
            let img = create("img", figure);
            img.src = `images/${image}`;
            img.alt = descriptions[i];
            create("figcaption", figure, "", descriptions[i]);
        });
    }

    createDiaporama(carousel, images, descriptions);

    // Gestion du diaporama
    let slides = carousel.children;
    let index = 0;
    slides[index].classList.add("active");

    function diaporama() {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }

    let interval = setInterval(diaporama, 4000);

    carousel.addEventListener("mouseover", () => clearInterval(interval));
    carousel.addEventListener("mouseout", () => interval = setInterval(diaporama, 4000));

    // Ajout des boutons de navigation
    let controls = create("div", carousel.parentNode, "controls");
    let prevButton = create("button", controls, "prev", "Photo Précédente");
    let nextButton = create("button", controls, "next", "Photo Suivante");

    prevButton.addEventListener("click", function () {
        slides[index].classList.remove("active");
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add("active");
    });

    nextButton.addEventListener("click", function () {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    });
});
