import "./styles.css";

let container = document.getElementById("star-container");
let container1 = document.getElementById("star-container1");
let star = document.querySelectorAll(".star");
let star1 = document.querySelectorAll(".star1");
let count = document.getElementById("count");
let button = document.getElementById("button");
let filled = 0;

container.addEventListener("click", function (e) {
  let currClicked = e.target.dataset.index;

  // console.log(currClicked);

  for (let i = 0; i < filled; i++) {
    star[i].classList.remove("star-filled");
  }

  for (let i = 0; i < currClicked; i++) {
    star[i].classList.add("star-filled");
  }

  filled = currClicked;
  count.innerHTML = `Rating Count ${filled}`;
});

container.addEventListener("click", function (e) {
  let currClicked = e.target.dataset.index;

  // console.log(currClicked);

  for (let i = 0; i < filled; i++) {
    star[i].classList.remove("star-filled");
  }

  for (let i = 0; i < currClicked; i++) {
    star[i].classList.add("star-filled");
  }

  filled = currClicked;
});

container.addEventListener("mouseover", function (e) {
  let currClicked = e.target.dataset.index;

  // console.log(currClicked);

  for (let i = 0; i < 5; i++) {
    star[i].classList.remove("star-filled");
  }

  for (let i = 0; i < currClicked; i++) {
    star[i].classList.add("star-filled");
  }
});

container.addEventListener("mouseleave", function () {
  for (let i = 0; i < 5; i++) {
    star[i].classList.remove("star-filled");
  }

  for (let i = 0; i < filled; i++) {
    star[i].classList.add("star-filled");
  }
});

button.addEventListener("click", function () {
  let data = document.getElementById("data").value;
  console.log(data);

  for (let i = 0; i < 5; i++) {
    star1[i].classList.remove("star-filled1");
    star1[i].classList.remove("star-half");
  }

  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(data)) {
      star1[i].classList.add("star-filled1");
    } else if (i === Math.floor(data)) {
      star1[i].classList.add("star-half");
    } else {
      star1[i].classList.remove("star-filled");
    }
  }
});
