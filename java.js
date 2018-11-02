let score = 0;

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
    showStart();
}

function showStart() {
    console.log("show start");

    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", hideStart);
}

function hideStart() {
    console.log("hide start");
    document.querySelector("#play").removeEventListener("click", hideStart);
    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").addEventListener("animationend", startGame);
}

function startGame() {
    console.log("start game");

    document.querySelector("#game").classList.remove("hide");
    document.querySelector("#menu_background").classList.remove("hide");

    document.querySelector("#start").classList.add("hide");

    document.querySelector("#start").removeEventListener("animationend", startGame);

    document.querySelector("#start").classList.remove("fade_out");

    document.querySelector("#draabe").addEventListener("click", clickedbox1);
    document.querySelector("#draabe1").addEventListener("click", clickedbox1);
    document.querySelector("#sol").addEventListener("click", clickedbox1);
    document.querySelector("#sol1").addEventListener("click", clickedbox1);
    document.querySelector("#orm1").addEventListener("click", clickedbox2);
    document.querySelector("#orm2").addEventListener("click", clickedbox2);
    document.querySelector("#orm3").addEventListener("click", clickedbox2);
    document.querySelector("#orm4").addEventListener("click", clickedbox2);
    document.querySelector("#orm5").addEventListener("click", clickedbox2);
    document.querySelector("#orm6").addEventListener("click", clickedbox2);
}

function clickedbox1() {
    console.log("clickedbox1");
    score = score + 10;
    //score += 5;
    //score++;
    console.log(score);

    document.querySelector("#score").innerHTML = ":  " + score;

    console.log(this);
    this.classList.add("hide");
}

function clickedbox2() {
    console.log(this);
    this.classList.add("hide");
}
