const LightboxImg = document.querySelector("#lightbox img");
const lightBox = document.querySelector("#lightbox");
const closeBtn = document.querySelector("#close-lightbox");

document.querySelectorAll("[data-full-img]").forEach((imgThumb) => {
    imgThumb.addEventListener("click", (evt) => {
LightboxImg.src = imgThumb.dataset.fullImg;
lightBox.showModal();
    });
});


closeBtn.addEventListener("click", (evt) =>  lightBox.close() );

