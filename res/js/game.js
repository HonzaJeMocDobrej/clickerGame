let countUp = parseInt(localStorage.getItem("countUp")) || 0;
let count = parseInt(localStorage.getItem("count")) || 0;
let countGoals = parseInt(localStorage.getItem("countGoals")) || 0;
let players1Up = parseInt(localStorage.getItem("players1Up"));
let boots1Up = parseInt(localStorage.getItem("boots1Up"));


localStorage.setItem("count", count);
localStorage.setItem("countGoals", countGoals);
localStorage.setItem("players1Up", players1Up);
localStorage.setItem("boots1Up", boots1Up);

const cookie = document.getElementById("cookie");
const counter1 = document.getElementById("counter1");
const counter2 = document.getElementById("counter2");

const cookieContainer = document.getElementById("cookieContainer");
const table1Img = document.getElementById("table1Img");
const table2Img = document.getElementById("table2Img");
const tableText = document.getElementById("tableText");
const table1Container = document.getElementById("table1Container");
const table2Container = document.getElementById("table2Container");

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
    if (players1Up == 0) {
      let random = Math.floor(Math.random(0) * 3);
      count = 0;
      countGoals = countGoals + random;
      counter2.innerHTML = countGoals;
      counter1.innerHTML = count;
    }
    if (players1Up == 1) {
      let random = Math.floor(Math.random(0) * 5);
      count = 0;
      countGoals = countGoals + random;
      counter2.innerHTML = countGoals;
      counter1.innerHTML = count;
    }
    if (players1Up == 2) {
      let random = Math.floor(Math.random(0) * 7);
      count = 0;
      countGoals = countGoals + random;
      counter2.innerHTML = countGoals;
      counter1.innerHTML = count;
    }
    if (players1Up == 3) {
      let random = Math.floor(Math.random() * (10-1) + 1);
      count = 0;
      countGoals = countGoals + random;
      counter2.innerHTML = countGoals;
      counter1.innerHTML = count;
    }
    if (players1Up == 4) {
      let random = Math.floor(Math.random() * (20-3) + 3);
      count = 0;
      countGoals = countGoals + random;
      counter2.innerHTML = countGoals;
      counter1.innerHTML = count;
    }
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
// cookie.onmousedown = () => {
//   if (count >= 90.1 && random>=1) {
//     tableText.style.backgroundColor = "rgb(119, 184, 240)";
//     table1Container.style.backgroundColor = "rgb(62, 138, 204)";
//     table2Container.style.backgroundColor = "rgb(28, 88, 140)";
//   }
// }
// cookie.onmouseup = () => {
//   if (count >= 90.1) {
//     tableText.style.backgroundColor = "rgb(136, 126, 126)";
//     table1Container.style.backgroundColor = "rgb(136, 126, 126)";
//     table2Container.style.backgroundColor = "rgb(136, 126, 126)";
//   }
// }
if (players1Up == 3) {
  cookie.style.backgroundImage = "url('../../res/img/Fandic.png')";
  table2Img.style.backgroundImage = "url('../../res/img/Fandic.png')";
  cookieContainer.style.height = "50%";
  cookieContainer.style.width = "50%";
  cookieContainer.style.marginTop = "-30%";
}
if (players1Up == 4) {
  cookie.style.backgroundImage = "url('../../res/img/honzaKotakto.png')";
  table2Img.style.backgroundImage = "url('../../res/img/honzaKotakto.png')";
  cookieContainer.style.height = "60%";
  cookieContainer.style.width = "60%";
  cookieContainer.style.marginTop = "-40%";
}
if (players1Up == 2) {
  cookie.style.backgroundImage = "url('../../res/img/majklJira.png')";
  table2Img.style.backgroundImage = "url('../../res/img/majklJira.png')";
  cookieContainer.style.height = "60%";
  cookieContainer.style.width = "60%";
  cookieContainer.style.marginTop = "-42%";
}
if (players1Up == 1) {
  cookie.style.backgroundImage = "url('../../res/img/Vojtacek.png')";
  table2Img.style.backgroundImage = "url('../../res/img/Vojtacek.png')";
  cookieContainer.style.height = "50%";
  cookieContainer.style.width = "50%";
  cookieContainer.style.marginTop = "-30%";
}
if (boots1Up == 1) {
  table1Img.style.backgroundImage = "url('../../res/img/boots1.png')"
}
if (boots1Up == 2) {
  table1Img.style.backgroundImage = "url('../../res/img/boots2.png')"
}
if (boots1Up == 3) {
  table1Img.style.backgroundImage = "url('../../res/img/boots3.png')"
}
if (boots1Up == 4) {
  table1Img.style.backgroundImage = "url('../../res/img/boots4.png')"
}
if (boots1Up == 5) {
  table1Img.style.backgroundImage = "url('../../res/img/boots5.png')"
}
if (boots1Up == 6) {
  table1Img.style.backgroundImage = "url('../../res/img/boots6.png')"
}