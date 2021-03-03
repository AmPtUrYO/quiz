console.log("verlinkt");

let background1 = document.getElementById("background1");
let background2 = document.getElementById("background2");
let background3 = document.getElementById("background3");
let background4 = document.getElementById("background4");
let background5 = document.getElementById("background5");
let background6 = document.getElementById("background6");
let background7 = document.getElementById("background7");
let background8 = document.getElementById("background8");
let background9 = document.getElementById("background9");
let background10 = document.getElementById("background10");
let heart = document.getElementById("heart");
let love = document.getElementById("love");
let construction = document.getElementById("construction");
let loveYes = document.getElementById("loveYes");
let loveNo = document.getElementById("loveNo");
let trail = document.getElementById("trail");
let position = 1;

background1.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

background2.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});

background3.addEventListener("click", function () {
  document.body.style.backgroundColor = "yellow";
});

background4.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});

background5.addEventListener("click", function () {
  document.body.style.backgroundColor = " rgb(210, 119, 238)";
});

background6.addEventListener("click", function () {
  document.body.style.backgroundColor = "rgb(70, 198, 230)";
});

background7.addEventListener("click", function () {
  document.body.style.backgroundColor = "rgb(235, 205, 74)";
});

background8.addEventListener("click", function () {
  document.body.style.backgroundColor = " rgb(146, 53, 221)";
});

background9.addEventListener("click", function () {
  document.body.style.backgroundColor = " rgb(255, 139, 31)";
});

background10.addEventListener("click", function () {
  document.body.style.backgroundColor = "rgb(147, 238, 119)";
});

heart.addEventListener("click", function () {
  construction.classList.add("hidden");
  love.classList.remove("hidden");
});

loveNo.addEventListener("mouseover", function () {
  switch (position) {
    case 1:
      loveNo.classList.add("translate1");
      position = 2;
      break;
    case 2:
      loveNo.classList.add("translate2");
      position = 3;
      break;
    case 3:
      loveNo.classList.add("translate3");
      position = 4;
      break;
    case 4:
      loveNo.classList.add("translate4");
      position = 5;
      break;
    default:
      loveNo.classList.remove("translate1");
      loveNo.classList.remove("translate2");
      loveNo.classList.remove("translate3");
      loveNo.classList.remove("translate4");
      position = 1;
      break;
  }
});

loveNo.addEventListener("click", function () {
  alert(":(");
  trail.classList.add("hidden");
});

loveYes.addEventListener("click", function () {
  trail.classList.remove("hidden");
});

$(document).mousemove(function (e) {
  $(".pointer").css({
    left: e.pageX,
    top: e.pageY,
  });
});
