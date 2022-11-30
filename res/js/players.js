let players1Up = parseInt(localStorage.getItem("players1Up")) || 0;
let playersEquip1Up = parseInt(localStorage.getItem("playersEquip1Up")) || 0;
let playersTutorial1Up = parseInt(localStorage.getItem("playersTutorial1Up")) || 0;
let countGoals = parseInt(localStorage.getItem("countGoals")) | 0;

localStorage.setItem("players1Up", players1Up);
localStorage.setItem("playersEquip1Up", playersEquip1Up);
localStorage.setItem("countGoals", countGoals);
localStorage.setItem("playersTutorial1Up", playersTutorial1Up);

const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const player3 = document.getElementById("player3");
const player4 = document.getElementById("player4");

const tut1 = document.getElementById("tut1");
const tutP1 = document.getElementById("tutP1");

goals.innerHTML = `Góly : ${countGoals}`;

player1.onclick = () => {
    if (countGoals >= 50 && players1Up == 0 && playersEquip1Up == 0) {
    countGoals-=50;    
    players1Up = 1;
    playersEquip1Up = 1;
    if (players1Up == 1) {        
        console.log("Vojtak");
        localStorage.setItem("players1Up", players1Up);
        player1.style.display = "none";
    }
    player2.style.display = "block";
    player3.style.display = "block";
    player4.style.display = "block";
    localStorage.setItem("countGoals", countGoals);
    localStorage.setItem("playersEquip1Up", playersEquip1Up);
    goals.innerHTML = `Góly : ${countGoals}`;
}
else if (playersEquip1Up>=1) {
    countGoals-=0;    
    players1Up = 1;
    if (players1Up == 1) {        
        console.log("Vojtak");
        localStorage.setItem("players1Up", players1Up);
        player1.style.display = "none";
    }
    player2.style.display = "block";
    player3.style.display = "block";
    player4.style.display = "block";
    localStorage.setItem("countGoals", countGoals);
    goals.innerHTML = `Góly : ${countGoals}`;
}
}
player2.onclick = () => {
    if (countGoals >= 100 && players1Up == 1 && playersEquip1Up == 1) {
        countGoals-=100;
        players1Up = 2;
        playersEquip1Up = 2;
        if (players1Up == 2) {        
            console.log("Majkl");
            localStorage.setItem("players1Up", players1Up);
            player2.style.display = "none";
        }
        player1.style.display = "block";
        player3.style.display = "block";
        player4.style.display = "block";
        localStorage.setItem("countGoals", countGoals);
        localStorage.setItem("playersEquip1Up", playersEquip1Up);
        goals.innerHTML = `Góly : ${countGoals}`;
    }
    else if (playersEquip1Up>=2) {
        countGoals-=0;
        players1Up = 2;
        if (players1Up == 2) {        
            console.log("Majkl");
            localStorage.setItem("players1Up", players1Up);
            player2.style.display = "none";
        }
        player1.style.display = "block";
        player3.style.display = "block";
        player4.style.display = "block";
        localStorage.setItem("countGoals", countGoals);
        goals.innerHTML = `Góly : ${countGoals}`;
    }
}
player3.onclick = () => {
    if (countGoals >= 250 && players1Up == 2 && playersEquip1Up == 2) {
        countGoals-=250;
        players1Up = 3;
        playersEquip1Up = 3;
        if (players1Up == 3) {        
            console.log("Fandak");
            localStorage.setItem("players1Up", players1Up);
            player3.style.display = "none";
        }
        player1.style.display = "block";
        player2.style.display = "block";
        player4.style.display = "block";
        localStorage.setItem("countGoals", countGoals);
        localStorage.setItem("playersEquip1Up", playersEquip1Up);
        goals.innerHTML = `Góly : ${countGoals}`;
    }
    else if (playersEquip1Up>=3) {
        countGoals-=0;
        players1Up = 3;
        if (players1Up == 3) {        
            console.log("Fandak");
            localStorage.setItem("players1Up", players1Up);
            player3.style.display = "none";
        }
        player1.style.display = "block";
        player2.style.display = "block";
        player4.style.display = "block";
        localStorage.setItem("countGoals", countGoals);
        goals.innerHTML = `Góly : ${countGoals}`;
    }
}
player4.onclick = () => {
    if (countGoals >= 500 && players1Up == 3 && playersEquip1Up == 3) {
        countGoals-=500;
        players1Up = 4;
        playersEquip1Up = 4;
        if (players1Up == 4) {        
            console.log("Honzicek");
            localStorage.setItem("players1Up", players1Up);
            player4.style.display = "none";
        }
        player1.style.display = "block";
        player2.style.display = "block";
        player3.style.display = "block";
        localStorage.setItem("countGoals", countGoals);
        localStorage.setItem("playersEquip1Up", playersEquip1Up);
        goals.innerHTML = `Góly : ${countGoals}`;
    }
    else if (playersEquip1Up>=4) {
        countGoals-=0;
        players1Up = 4;
        if (players1Up == 4) {        
            console.log("Fandak");
            localStorage.setItem("players1Up", players1Up);
            player4.style.display = "none";
        }
        player1.style.display = "block";
        player2.style.display = "block";
        player3.style.display = "block";
        localStorage.setItem("countGoals", countGoals);
        goals.innerHTML = `Góly : ${countGoals}`;
    }
}
window.onload = () => {
    if (players1Up == 1) {
        player1.style.display = "none";
    }
    if (players1Up == 2) {
        player2.style.display = "none";
    }
    if (players1Up == 3) {
        player3.style.display = "none";
    }
    if (players1Up == 4) {
        player4.style.display = "none";
    }
    if (playersTutorial1Up >= 2) {
        tut1.style.display = "none";
    }
}
tut1.onclick = () => {
    playersTutorial1Up++;
    if (playersTutorial1Up == 1) {
        tutP1.innerHTML = "Vypadá to, že už jsi připravenej vyhrávat... <br> Děkuju ti, že hraješ mojí hru! "
    }
    if (playersTutorial1Up == 2) {
        tut1.style.display = "none";
    }
    localStorage.setItem("playersTutorial1Up", playersTutorial1Up);
}