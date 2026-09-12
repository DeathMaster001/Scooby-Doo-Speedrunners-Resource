/*Navbar*/

function myFunction() {
    var x = document.getElementById("myTopnav");

    if (x.className === "topnav") {
        x.className += " responsive";
    }
    else {
        x.className = "topnav";
    }
}

/*Box Art Gallery*/

let currentImage = 0;

function changeImage(direction) {
    const images = document.querySelectorAll(".gallery-image-data");

    currentImage = (currentImage + direction + images.length) % images.length;

    const image = document.getElementById("gallery-image");
    const caption = document.getElementById("gallery-caption");

    image.src = images[currentImage].src;
    image.alt = images[currentImage].alt;
    caption.textContent = images[currentImage].dataset.caption;
}