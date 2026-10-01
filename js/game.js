const boxarts = [
    //Ordered by Release Date
    { image: "sdccc-series.png", page: "games/multiplatform/sdccc.html" },
    { image: "sdcc-series.png", page: "games/multiplatform/sdcc.html" },
    { image: "sd2mu-series.png", page: "games/gba/sd2mu.html" },
    { image: "sdu-series.png", page: "games/multiplatform/sdu.html" },
    { image: "sdwww-series.png", page: "games/multiplatform/sdwww.html" },
    { image: "sdff-series.png", page: "games/multiplatform/sdff.html" },
    { image: "sdss-series.png", page: "games/multiplatform/sdss.html" },

    // GBA Games
    { image: "sd-gba.png", page: "games/gba/sd-gba.html" },
    { image: "sd2mu-gba.png", page: "games/gba/sd2mu-gba.html" },
    { image: "sdcc-gba.png", page: "games/gba/sdcc-gba.html" },
    { image: "sdmm-gba.png", page: "games/gba/sdmm-gba.html" }
];

const gameBoard = document.getElementById("boxarts");

boxarts.forEach(game => {
    const boxArt = document.createElement("div");
    boxArt.classList.add("box-art");

    const boxArtInner = document.createElement("div");
    boxArtInner.classList.add("box-art-inner");

    const boxArtFront = document.createElement("div");
    boxArtFront.classList.add("box-art-front");

    const link = document.createElement("a");
    link.href = game.page;

    const boxArtImage = document.createElement("img");
    boxArtImage.src = "images/boxarts/" + game.image;
    boxArtImage.alt = "Game Box Art";

    link.appendChild(boxArtImage);
    boxArtFront.appendChild(link);
    boxArtInner.appendChild(boxArtFront);
    boxArt.appendChild(boxArtInner);

    gameBoard.appendChild(boxArt);
});