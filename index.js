// variables menu
let closedMenu = true;
let burgerIcon = document.querySelector("#barsMenuIcon");
let crossIcon = document.querySelector("#crossMenuIcon");
let navigationElement = document.querySelector("nav");

// variable personalized cursor
let mousse = document.querySelector(".cursor");
let links = document.querySelectorAll("a");

// menu function
function changesMenuState() {
  closedMenu = !closedMenu;
  if (closedMenu) {
    burgerIcon.style.display = "block";
    crossIcon.style.display = "none";
    navigationElement.style.right = "-100%";
  } else {
    burgerIcon.style.display = "none";
    crossIcon.style.display = "block";
    navigationElement.style.right = "0";
  }
}

// personalized cursor
document.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;

  mousse.style.left = x + "px";
  mousse.style.top = y + "px";
});

// menu icon overing
function changesIconStateEnter(icon) {
  if (icon === "burger") {
    burgerIcon.classList.add("menuIcon_hover");
    mousse.classList.add("links_hover");
  } else if (icon === "cross") {
    crossIcon.classList.add("menuIcon_hover");
    mousse.classList.add("links_hover");
  }
}

function changesIconStateLeave(icon) {
  if (icon === "burger") {
    burgerIcon.classList.remove("menuIcon_hover");
    mousse.classList.remove("links_hover");
  } else if (icon === "cross") {
    crossIcon.classList.remove("menuIcon_hover");
    mousse.classList.remove("links_hover");
  }
}

// cursor style over links
links.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    mousse.classList.add("links_hover");
  });
  item.addEventListener("mouseleave", () => {
    mousse.classList.remove("links_hover");
  });
});


// horizontal scroll section portraits
const windowWidth = window.innerWidth;
let distanceFromTop = document.querySelector(".horizontal-section").offsetTop;
let horizontalLenght = document.querySelector(".element-section").scrollWidth;
let totalScoll = distanceFromTop + horizontalLenght;
let elementSection = document.querySelector(".element-section");
const setHorizontalSectionHeight = (document.querySelector(".horizontal-section").style.height = horizontalLenght + "px");
console.log(horizontalLenght)

window.addEventListener("scroll", function () {
  let scrollFromTop = window.pageYOffset;
  if (window.scrollY >= distanceFromTop && window.scrollY <= totalScoll) {
    elementSection.style.transform =
      "translateX(-" + (scrollFromTop - distanceFromTop) + "px";
  }
});


// horizontal scroll section lightpainting
let distanceFromTop2 = document.querySelector(".horizontal-section2").offsetTop;
let horizontalLenght2 = document.querySelector(".element-section2").scrollWidth;
let totalScoll2 = distanceFromTop2 + horizontalLenght2;
let elementSection2 = document.querySelector(".element-section2");
const setHorizontalSectionHeight2 = (document.querySelector(".horizontal-section2").style.height = horizontalLenght2 + "px");
console.log(horizontalLenght2)

window.addEventListener("scroll", function () {
  let scrollFromTop2 = window.pageYOffset;
  if (window.scrollY >= distanceFromTop2 && window.scrollY <= totalScoll2) {
    elementSection2.style.transform =
      "translateX(-" + (scrollFromTop2 - distanceFromTop2) + "px";
  }
});
