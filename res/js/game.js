let countUp = parseInt(localStorage.getItem("countUp")) || 0;
let count = parseInt(localStorage.getItem("count")) || 0;
let countGoals = parseInt(localStorage.getItem("countGoals")) || 0;
let players1Up = parseInt(localStorage.getItem("players1Up"));

localStorage.setItem("count", count);
localStorage.setItem("countGoals", countGoals);
localStorage.setItem("players1Up", players1Up);

const cookie = document.getElementById("cookie");
const counter1 = document.getElementById("counter1");
const counter2 = document.getElementById("counter2");

const cookieContainer = document.getElementById("cookieContainer");

counter1.innerHTML = count
counter2.innerHTML = countGoals

cookie.onclick = () => {
  localStorage.setItem("countUp", countUp);
  if (countUp == 0) {
    count += .5;
  }
  else if (countUp == 1) {
    count += 1;
  }
  else if (countUp == 2) {
    count += 2;
  }
  else if (countUp == 3) {
    count += 3;
  }
  else if (countUp == 4) {
    count += 5;
  }
  else if (countUp == 5) {
    count += 7;
  }
  else if (countUp == 6) {
    count += 15;
  }
  counter1.innerHTML = count;
  if (count >= 90.1) {
    let random = Math.floor(Math.random(0) * 3);
    count = 0;
    countGoals = countGoals + random;
    counter2.innerHTML = countGoals;
    counter1.innerHTML = count;
  }

  
  // count++;
  // counter1.innerHTML = count;
  // if (count == 91) {
  //   let random = Math.floor(Math.random(0) * 3);
  //   count = 0;
  //   countGoals = countGoals + random;
  //   counter2.innerHTML = countGoals;
  //   counter1.innerHTML = count;
  // }
  localStorage.setItem("count", count);
  localStorage.setItem("countGoals", countGoals);
};
if (players1Up == 1) {
  cookie.style.backgroundImage = "url('/img/Fandic.png')";
  cookieContainer.style.height = "50%";
  cookieContainer.style.width = "50%";
  cookieContainer.style.marginTop = "-30%";
}
if (players1Up == 2) {
  cookie.style.backgroundImage = "url('/img/honzaKotakto.png')";
  cookieContainer.style.height = "60%";
  cookieContainer.style.width = "60%";
  cookieContainer.style.marginTop = "-40%";
}
if (players1Up == 3) {
  cookie.style.backgroundImage = "url('/img/majklJira.png')";
  cookieContainer.style.height = "60%";
  cookieContainer.style.width = "60%";
  cookieContainer.style.marginTop = "-42%";
}
if (players1Up == 4) {
  cookie.style.backgroundImage = "url('/img/Vojtacek.png')";
  cookieContainer.style.height = "50%";
  cookieContainer.style.width = "50%";
  cookieContainer.style.marginTop = "-30%";
}



