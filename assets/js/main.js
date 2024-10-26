document.addEventListener("DOMContentLoaded", () => {
    setTimeout(function () {
        document.body.classList.add('loaded')

        if (window.matchMedia('(min-width: 992px)').matches) { // If not mobile
            Draggable.create('.gallery', {
                bounds: 'body',
                inertia: true
            });
        }
    }, 200);
});


document.querySelectorAll(".gallery__item").forEach(function (e) {
    let img = new Image();
    let hrefURL = e.getAttribute("href");

    img.onload = function () {
        e.dataset.pswpWidth = this.width * 0.8;
        e.dataset.pswpHeight = this.height * 0.8;
    };

    img.src = hrefURL;
});


import PhotoSwiperLightbox from "../libs/PhotoSwipe/photoswipe-lightbox.esm.min.js";

const lightbox = new PhotoSwiperLightbox({
    gallery: ".gallery",
    children: ".gallery__item",
    pswpModule: () => import("../libs/PhotoSwipe/photoswipe.esm.min.js")
});

lightbox.init();