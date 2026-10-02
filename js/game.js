const boxarts = [
    //Ordered by Release Date
    { image: "sdccc-series.png", page: "games/sdccc.html" },
    { image: "sdcc-series.png", page: "games/sdcc.html" },
    { image: "sd-gba.png", page: "games/sd.html" },
    { image: "sdn100f-series.png", page: "games/sdn100f.html" },
    { image: "sdmm-series.png", page: "games/sdmm.html" },
    { image: "sd2mu-series.png", page: "games/sd2mu.html" },
    { image: "sdu-series.png", page: "games/sdu.html" },
    { image: "sdwww-series.png", page: "games/sdwww.html" },
    { image: "sdff-series.png", page: "games/sdff.html" },
    { image: "sdss-series.png", page: "games/sdss.html" }
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