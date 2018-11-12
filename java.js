let score = 0;

let timeLeft = 60;

let life = 3;

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
    document.querySelector("#menu_background").classList.add("hide");
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#menu_background").classList.remove("blur");



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

    timeLeftFc();
    document.querySelector("#game").classList.remove("hide");

    document.querySelector("#game_ui").classList.remove("hide");
    document.querySelector("#menu_background").classList.remove("hide");

    document.querySelector("#start").classList.add("hide");

    document.querySelector("#start").removeEventListener("animationend", startGame);

    document.querySelector("#start").classList.remove("fade_out");
    document.querySelector("#orm1").addEventListener("click", clickedbox2);
    document.querySelector("#orm1_1").addEventListener("click", clickedbox2);
    document.querySelector("#orm1_2").addEventListener("click", clickedbox2);
    document.querySelector("#orm1_3").addEventListener("click", clickedbox2);
    document.querySelector("#orm1_4").addEventListener("click", clickedbox2);
    document.querySelector("#orm2").addEventListener("click", clickedbox2);
    document.querySelector("#orm2_1").addEventListener("click", clickedbox2);
    document.querySelector("#orm2_2").addEventListener("click", clickedbox2);
    document.querySelector("#orm2_3").addEventListener("click", clickedbox2);
    document.querySelector("#orm2_4").addEventListener("click", clickedbox2);
    document.querySelector("#orm3").addEventListener("click", clickedbox2);
    document.querySelector("#orm3_1").addEventListener("click", clickedbox2);
    document.querySelector("#orm3_2").addEventListener("click", clickedbox2);
    document.querySelector("#orm3_3").addEventListener("click", clickedbox2);
    document.querySelector("#orm3_4").addEventListener("click", clickedbox2);
    document.querySelector("#orm4").addEventListener("click", clickedbox2);
    document.querySelector("#orm4_1").addEventListener("click", clickedbox2);
    document.querySelector("#orm4_2").addEventListener("click", clickedbox2);
    document.querySelector("#orm4_3").addEventListener("click", clickedbox2);
    document.querySelector("#orm4_4").addEventListener("click", clickedbox2);
    document.querySelector("#orm5").addEventListener("click", clickedbox2);
    document.querySelector("#orm5_1").addEventListener("click", clickedbox2);
    document.querySelector("#orm5_2").addEventListener("click", clickedbox2);
    document.querySelector("#orm5_3").addEventListener("click", clickedbox2);
    document.querySelector("#orm5_4").addEventListener("click", clickedbox2);
    document.querySelector("#orm6").addEventListener("click", clickedbox2);
    document.querySelector("#orm6_1").addEventListener("click", clickedbox2);
    document.querySelector("#orm6_2").addEventListener("click", clickedbox2);
    document.querySelector("#orm6_3").addEventListener("click", clickedbox2);
    document.querySelector("#orm6_4").addEventListener("click", clickedbox2);

    document.querySelector("#spawn1").addEventListener("click", foodClick);
    document.querySelector("#spawn2").addEventListener("click", foodClick);
    document.querySelector("#spawn3").addEventListener("click", foodClick);
    document.querySelector("#spawn4").addEventListener("click", foodClick);
    document.querySelector("#spawn5").addEventListener("click", foodClick);
    document.querySelector("#spawn6").addEventListener("click", foodClick);

    document.querySelector("#orm1").addEventListener("animationend", loseLife);
    document.querySelector("#orm1_1").addEventListener("animationend", loseLife);
    document.querySelector("#orm1_2").addEventListener("animationend", loseLife);
    document.querySelector("#orm1_3").addEventListener("animationend", loseLife);
    document.querySelector("#orm1_4").addEventListener("animationend", loseLife);
    document.querySelector("#orm2").addEventListener("animationend", loseLife);
    document.querySelector("#orm2_1").addEventListener("animationend", loseLife);
    document.querySelector("#orm2_2").addEventListener("animationend", loseLife);
    document.querySelector("#orm2_3").addEventListener("animationend", loseLife);
    document.querySelector("#orm2_4").addEventListener("animationend", loseLife);
    document.querySelector("#orm3").addEventListener("animationend", loseLife);
    document.querySelector("#orm3_1").addEventListener("animationend", loseLife);
    document.querySelector("#orm3_2").addEventListener("animationend", loseLife);
    document.querySelector("#orm3_3").addEventListener("animationend", loseLife);
    document.querySelector("#orm3_4").addEventListener("animationend", loseLife);
    document.querySelector("#orm4").addEventListener("animationend", loseLife);
    document.querySelector("#orm4_1").addEventListener("animationend", loseLife);
    document.querySelector("#orm4_2").addEventListener("animationend", loseLife);
    document.querySelector("#orm4_3").addEventListener("animationend", loseLife);
    document.querySelector("#orm4_4").addEventListener("animationend", loseLife);
    document.querySelector("#orm5").addEventListener("animationend", loseLife);
    document.querySelector("#orm5_1").addEventListener("animationend", loseLife);
    document.querySelector("#orm5_2").addEventListener("animationend", loseLife);
    document.querySelector("#orm5_3").addEventListener("animationend", loseLife);
    document.querySelector("#orm5_4").addEventListener("animationend", loseLife);
    document.querySelector("#orm6").addEventListener("animationend", loseLife);
    document.querySelector("#orm6_1").addEventListener("animationend", loseLife);
    document.querySelector("#orm6_2").addEventListener("animationend", loseLife);
    document.querySelector("#orm6_3").addEventListener("animationend", loseLife);
    document.querySelector("#orm6_4").addEventListener("animationend", loseLife);

}

function loseLife() {
    console.log("loselife");

    document.querySelector("#heart" + life).classList.add("hide");
    life--;
    gameStatus();

}


function gameStatus() {
    console.log("gameStatus");
    console.log(life);
    if (life == 0) {
        document.querySelector("#gameover").classList.remove("hide");
        document.querySelector("#game").classList.add("hide");

        document.querySelector("#levelcomplete").classList.add("hide");

        document.querySelector("#score1").innerHTML = "score:  " + score;
        document.querySelector("#score").classList.add("hide");

        document.querySelector("#menu_background").classList.add("blur");

        document.querySelector("#spiligen").addEventListener("click", showStart);

    }

}

function stopFunction() {
    console.log("stoptime");
    timeLeft = 100;
}

function foodClick() {
    console.log("foodClick");

    if (this.classList.contains("sol")) {
        console.log("du har klikket på sol")
        this.classList.remove("sol");
        score++;
        document.querySelector("#score").innerHTML = ":  " + score;
        mySolMove();

    } else {
        this.classList.remove("draabe");
        console.log("du har klikket på draabe");
        score++;
        document.querySelector("#score").innerHTML = ":  " + score;
        myDraabeMove();

    }

}

function mySolMove() {
    console.log("mySolMove");
    document.querySelector("#spawn" + Math.floor((Math.random() * 3) + 1)).classList.add("sol")
}

function myDraabeMove() {
    console.log("myDraabeMove");
    document.querySelector("#spawn" + Math.floor((Math.random() * 2) + 4.5)).classList.add("draabe")
}

function myRandom() {
    let tilfaeldigttal = Math.floor(Math.random() * 10) + 1;
    return tilfaeldigttal;
}


function clickedbox2() {
    console.log(this);
    this.classList.add("hide");

}


function timeLeftFc() {
    console.log("timeleftFC" + timeLeft);
    document.querySelector("#time").innerHTML = ":" + timeLeft;


    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(timeLeftFc, 1000);
    } else {
        levelcomplete();
    }
}

function levelcomplete() {
    console.log("levelcomplete");
    document.querySelector("#levelcomplete").classList.remove("hide");
    document.querySelector("#game").classList.add("hide");
    document.querySelector("#menu_background").classList.add("blur");

    document.querySelector("#score2").innerHTML = "score:  " + score;
    document.querySelector("#score").classList.add("hide");
}

document.querySelector("#score1").innerHTML = "score:  " + score;
document.querySelector("#score").classList.add("hide");
