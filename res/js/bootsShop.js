let boots1Up = parseInt(localStorage.getItem("boots1Up")) || 0;
let countUp = parseInt(localStorage.getItem("countUp")) || 0;
let bootsShopTutorial1Up = parseInt(localStorage.getItem("bootsShopTutorial1Up")) || 0;
let countGoals = parseInt(localStorage.getItem("countGoals")) || 0;



localStorage.setItem("boots1Up", boots1Up);
localStorage.setItem("countUp", countUp);
localStorage.setItem("countGoals", countGoals);
localStorage.setItem("bootsShopTutorial1Up", bootsShopTutorial1Up);

const boots1 = document.getElementById("boots1");
const boots2 = document.getElementById("boots2");
const boots3 = document.getElementById("boots3");
const boots4 = document.getElementById("boots4");
const boots5 = document.getElementById("boots5");
const boots6 = document.getElementById("boots6");
const goals = document.getElementById("goals");

const tut1 = document.getElementById("tut1");
const tutP1 = document.getElementById("tutP1");
 
goals.innerHTML = `Góly : ${countGoals}`;

boots1.onclick = () => {
  if (countGoals >= 3 && boots1Up == 0) {
    bootsShopTutorial1Up = 1;
    if (bootsShopTutorial1Up == 1) {
      tutP1.innerHTML = "Dobrá práce, máš první boty... Teda spíš ponožky... <br> Klikni na šipku a běž se podívat na nějaký hráče"
      tut1.onclick = () => {
        tut1.style.display = "none";
        bootsShopTutorial1Up = 2;
        localStorage.setItem("bootsShopTutorial1Up", bootsShopTutorial1Up);
      }
    }
    boots1Up = 1;
    countGoals -= 3;
    console.log("Banger");
    if (boots1Up >= 1) {
      boots1.style.display = "none";
      countUp = 1; 
    }
    else if (boots1Up != 1) {
      countGoals -= 0;
    }
  }
  localStorage.setItem("boots1Up", boots1Up);
  localStorage.setItem("countUp", countUp);
  localStorage.setItem("countGoals", countGoals);
  localStorage.setItem("bootsShopTutorial1Up", bootsShopTutorial1Up);
  goals.innerHTML = `Góly : ${countGoals}`;
}
boots2.onclick = () => {
  if (countGoals >= 7 && boots1Up == 1) {
    boots1Up = 2;
    countGoals -= 7;
    console.log("Banger2");
    if (boots1Up >= 2) {
      boots2.style.display = "none";
      countUp = 2; 
    }
    else if (boots1Up != 2) {
      countGoals -= 0;
    }
  }
  localStorage.setItem("boots1Up", boots1Up);
  localStorage.setItem("countUp", countUp);
  localStorage.setItem("countGoals", countGoals);
  goals.innerHTML = `Góly : ${countGoals}`;
}
boots3.onclick = () => {
  if (countGoals >= 16 && boots1Up == 2) {
    boots1Up = 3;
  countGoals -= 16;
  console.log("Banger3");
  if (boots1Up >= 3) {
    boots3.style.display = "none";
    countUp = 3; 
  }
  else if (boots1Up != 3) {
    countGoals -= 0;
  }
  }
  localStorage.setItem("boots1Up", boots1Up);
  localStorage.setItem("countUp", countUp);
  localStorage.setItem("countGoals", countGoals);
  goals.innerHTML = `Góly : ${countGoals}`;
}
boots4.onclick = () => {
  if (countGoals >= 30 && boots1Up == 3) {
    boots1Up = 4;
    countGoals -= 30;
    console.log("Banger4");
    if (boots1Up >= 4) {
      boots4.style.display = "none";
      countUp = 4; 
    }
    else if (boots1Up != 4) {
      countGoals -= 0;
  }
}
localStorage.setItem("boots1Up", boots1Up);
localStorage.setItem("countUp", countUp);
localStorage.setItem("countGoals", countGoals);
goals.innerHTML = `Góly : ${countGoals}`;
}
boots5.onclick = () => {
  if (countGoals >= 75 && boots1Up == 4) {
    boots1Up = 5;
    countGoals -= 75;
    console.log("Banger5");
    if (boots1Up >= 5) {
      boots5.style.display = "none";
      countUp = 5; 
    }
    else if (boots1Up != 5) {
    countGoals -= 0;
  }
}
localStorage.setItem("boots1Up", boots1Up);
localStorage.setItem("countUp", countUp);
localStorage.setItem("countGoals", countGoals);
goals.innerHTML = `Góly : ${countGoals}`;
}
boots6.onclick = () => {
  if (countGoals >= 300 && boots1Up == 5) {
    boots1Up = 6;
    countGoals -= 300;
    console.log("Banger6");
    if (boots1Up >= 6) {
      boots6.style.display = "none";
      countUp = 6; 
    }
    else if (boots1Up != 6) {
      countGoals -= 0;
    }
  }
  localStorage.setItem("boots1Up", boots1Up);
  localStorage.setItem("countUp", countUp);
  localStorage.setItem("countGoals", countGoals);
  goals.innerHTML = `Góly : ${countGoals}`;
}
window.onload = () => {
  if (boots1Up >= 1) {
    boots1.style.display = "none";
    if (bootsShopTutorial1Up == 2) {
      tut1.style.display = "none";
    }
    if (boots1Up >= 2) {
      boots2.style.display = "none";
      if (boots1Up >= 3) {
        boots3.style.display = "none";
        if (boots1Up >= 4) {
          boots4.style.display = "none";
      if (boots1Up >= 5) {
      boots5.style.display = "none";
      if (boots1Up >= 6) {
        boots6.style.display = "none";
      }
    }
  }
}
}
}
}
