const LightboxImg = document.querySelector("#lightbox img");
const lightBox = document.querySelector("#lightbox");

document.querySelectorAll("[data-full-img]").forEach((imgThumb) => {
    imgThumb.addEventListener("click", () => {
        LightboxImg.src = imgThumb.dataset.fullImg;
        lightBox.showModal();
    });
});

// Ferme la lightbox lorsqu'on clique à l'extérieur ou sur la lightbox
lightBox.addEventListener("click", (evt) => {
    if (evt.target === lightBox) { // Vérifie qu'on clique bien sur le dialog
        lightBox.close();
    }
});
