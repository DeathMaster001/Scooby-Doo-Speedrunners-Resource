const boxarts = [
    // GBA Games
    { image: "sd-gba.png", page: "games/gba/sd-gba.html" },
    { image: "sd2mu-gba.png", page: "games/gba/sd2mu-gba.html" },
    { image: "sdcc-gba.png", page: "games/gba/sdcc-gba.html" },
    { image: "sdmm-gba.png", page: "games/gba/sdmm-gba.html" },
    { image: "sdu-gba.png", page: "games/gba/sdu-gba.html" },

    // GBC Games
    { image: "sdccc-gbc.png", page: "games/gbc/sdccc-gbc.html" },

    // N64 Games
    { image: "sdccc-n64.png", page: "games/n64/sdccc-n64.html" },

    // DS Games
    { image: "sdu-ds.png", page: "games/ds/sdu-ds.html" },
    { image: "sdff-ds.png", page: "games/ds/sdff-ds.html" },
    { image: "sdss-ds.png", page: "games/ds/sdss-ds.html" },
    { image: "sdwww-ds.png", page: "games/ds/sdwww-ds.html" },

    // PSP Games
    { image: "sdwww-psp.png", page: "games/psp/sdwww-psp.html" }

    //Multiple Platforms
    // { image: "sdu-gcn.png", page: "games/multiple-platforms/sdu-gcn.html" }
    // { image: "sdmm-gcn.png", page: "games/multiple-platforms/sdmm-gcn.html" }
    // { image: "sdn100f-gcn.png", page: "games/multiple-platforms/sdn100f-gcn.html" }
];

const gameBoard = document.getElementById("boxarts");

boxarts.forEach(game => {
    const card = document.createElement("div");
    card.classList.add("card");

    const inner = document.createElement("div");
    inner.classList.add("card-inner");

    const front = document.createElement("div");
    front.classList.add("card-front");

    const link = document.createElement("a");
    link.href = game.page;

    const frontImage = document.createElement("img");
    frontImage.src = "images/boxarts/" + game.image;
    frontImage.alt = "Game Box Art";

    link.appendChild(frontImage);
    front.appendChild(link);
    inner.appendChild(front);
    card.appendChild(inner);

    gameBoard.appendChild(card);
});