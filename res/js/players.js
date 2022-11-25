let players1Up = parseInt(localStorage.getItem("players1Up")) || 0;
let countGoals = parseInt(localStorage.getItem("countGoals"));

localStorage.setItem("players1Up", players1Up);
localStorage.setItem("countGoals", countGoals);

const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const player3 = document.getElementById("player3");
const player4 = document.getElementById("player4");

goals.innerHTML = `Góly : ${countGoals}`;

player1.onclick = () => {
    players1Up = 1;
    if (players1Up == 1) {        
        console.log("Fandak");
        localStorage.setItem("players1Up", players1Up);
        player1.style.display = "none";
    }
    player2.style.display = "block";
    player3.style.display = "block";
    player4.style.display = "block";
}
player2.onclick = () => {
    players1Up = 2;
    if (players1Up == 2) {        
        console.log("Honzicek");
        localStorage.setItem("players1Up", players1Up);
        player2.style.display = "none";
    }
    player1.style.display = "block";
    player3.style.display = "block";
    player4.style.display = "block";
}
player3.onclick = () => {
    players1Up = 3;
    if (players1Up == 3) {        
        console.log("Majkl");
        localStorage.setItem("players1Up", players1Up);
        player3.style.display = "none";
    }
    player1.style.display = "block";
    player2.style.display = "block";
    player4.style.display = "block";
}
player4.onclick = () => {
    players1Up = 4;
    if (players1Up == 4) {        
        console.log("Vojtacek");
        localStorage.setItem("players1Up", players1Up);
        player4.style.display = "none";
    }
    player1.style.display = "block";
    player2.style.display = "block";
    player3.style.display = "block";
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
}