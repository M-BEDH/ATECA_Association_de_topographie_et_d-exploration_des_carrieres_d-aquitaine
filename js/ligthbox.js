document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".photosCarrieres img");
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.innerHTML = `
        <button class="prev">&lt;</button>
        <div class="lightbox-content">
            <span class="close">&times;</span>
            <img class="lightbox-img" src="" alt="Image en grand">
        </div>
        <button class="next">&gt;</button>
    `;
    document.body.appendChild(lightbox);

    let currentIndex = 0;

    function showImage(index) {
        if (index >= 0 && index < images.length) {
            lightbox.querySelector(".lightbox-img").src = images[index].src;
            currentIndex = index;
            lightbox.style.display = "flex";
        }
    }

    images.forEach((img, index) => {
        img.addEventListener("click", () => showImage(index));
    });

    document.querySelector(".close").addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    document.querySelector(".prev").addEventListener("click", () => {
        if (currentIndex > 0) showImage(currentIndex - 1);
    });

    document.querySelector(".next").addEventListener("click", () => {
        if (currentIndex < images.length - 1) showImage(currentIndex + 1);
    });

    document.addEventListener("keydown", (e) => {
        if (lightbox.style.display === "flex") {
            if (e.key === "ArrowLeft") showImage(currentIndex - 1);
            if (e.key === "ArrowRight") showImage(currentIndex + 1);
            if (e.key === "Escape") lightbox.style.display = "none";
        }
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) lightbox.style.display = "none";
    });
});
