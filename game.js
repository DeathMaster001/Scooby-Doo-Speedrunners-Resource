const boxarts = [
    // GBA Games
    { image: "sd-gba.png", page: "games/gba/sd-gba.html" },
    { image: "sd2mu-gba.png", page: "games/gba/sd2mu-gba.html" },
    { image: "sdcc-gba.png", page: "games/gba/sdcc-gba.html" },
    { image: "sdmm-gba.png", page: "games/gba/sdmm-gba.html" },

    //Multiple Platforms
    { image: "sdu-series.png", page: "games/multiplatform/sdu.html" },
    { image: "sdwww-series.png", page: "games/multiplatform/sdwww.html" },


    // GBC Games
    { image: "sdccc-gbc.png", page: "games/gbc/sdccc-gbc.html" },

    // N64 Games
    { image: "sdccc-n64.png", page: "games/n64/sdccc-n64.html" },

    // DS Games
    { image: "sdff-nds.png", page: "games/nds/sdff-nds.html" },
    { image: "sdss-nds.png", page: "games/nds/sdss-nds.html" },
    { image: "sdwww-nds.png", page: "games/nds/sdwww-nds.html" },

    // PSP Games
    { image: "sdwww-psp.png", page: "games/psp/sdwww-psp.html" },
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