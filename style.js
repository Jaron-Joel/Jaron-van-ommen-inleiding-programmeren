let kleurOptieMain = ["images/redmain1.png", "images/blauwmain2.png", "images/witmain2.png"];

let mainShirt = document.querySelector("#mainShirt");
let backgroundShirt = document.querySelector("#backgroundShirt");

let blauwMain = document.querySelector("#hoofdKleurBlauw");
let roodMain = document.querySelector("#hoofdKleurRood");
let witMain = document.querySelector("#hoofdKleurWit");

let btnBlauwMain = document.querySelector("#btnBlauw1");
let btnRoodMain = document.querySelector("#btnRood1");
let btnWitMain = document.querySelector("#btnWit1");

btnRoodMain.addEventListener("click", () => {
    roodMain.classList.remove("hidden");
    blauwMain.classList.add("hidden");
    witMain.classList.add("hidden");
    mainShirt.src = kleurOptieMain[0];
});

btnBlauwMain.addEventListener("click", () => {
    roodMain.classList.add("hidden");
    blauwMain.classList.remove("hidden");
    witMain.classList.add("hidden");
    mainShirt.src = kleurOptieMain[1];
});

btnWitMain.addEventListener("click", () => {
    roodMain.classList.add("hidden");
    blauwMain.classList.add("hidden");
    witMain.classList.remove("hidden");
    mainShirt.src = kleurOptieMain[2];
});

let kleurOptieSecond = ["images/redsecundair2.png", "images/blauwsecundair2.png", "images/witsecundair2.png"]

let blauwSecundair = document.querySelector("#secundaireKleurBlauw");
let roodSecundair = document.querySelector("#secundaireKleurRood");
let witSecundair = document.querySelector("#secundaireKleurWit");

let btnBlauwSecundair = document.querySelector("#btnBlauw2");
let btnRoodSecundair = document.querySelector("#btnRood2");
let btnWitSecundair = document.querySelector("#btnWit2");

btnRoodSecundair.addEventListener("click", () => {
    roodSecundair.classList.remove("hidden");
    blauwSecundair.classList.add("hidden");
    witSecundair.classList.add("hidden");
    mainShirt.src = kleurOptieSecond[0];
});

btnBlauwSecundair.addEventListener("click", () => {
    roodSecundair.classList.add("hidden");
    blauwSecundair.classList.remove("hidden");
    witSecundair.classList.add("hidden");
    mainShirt.src = kleurOptieSecond[1];
});

btnWitSecundair.addEventListener("click", () => {
    roodSecundair.classList.add("hidden");
    blauwSecundair.classList.add("hidden");
    witSecundair.classList.remove("hidden");
    mainShirt.src = kleurOptieSecond[2];
});