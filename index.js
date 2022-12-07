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


window.onload = function(){
// horizontal scroll section portraits
let distanceFromTop = document.querySelector(".horizontal-section").offsetTop;
let horizontalLenght = document.querySelector(".element-section").scrollWidth;
let totalScoll = distanceFromTop + horizontalLenght;
let elementSection = document.querySelector(".element-section");
const setHorizontalSectionHeight = (document.querySelector(".horizontal-section").style.height = horizontalLenght + "px");
console.log(horizontalLenght);

// horizontal scroll section lightpainting
let distanceFromTop2 = document.querySelector(".horizontal-section2").offsetTop;
let horizontalLenght2 = document.querySelector(".element-section2").scrollWidth;
let totalScoll2 = distanceFromTop2 + horizontalLenght2;
let elementSection2 = document.querySelector(".element-section2");
const setHorizontalSectionHeight2 = (document.querySelector(".horizontal-section2").style.height = horizontalLenght2 + "px");
console.log(horizontalLenght2);

// horizontal scroll section exterieur
let distanceFromTop3 = document.querySelector(".horizontal-section3").offsetTop;
let horizontalLenght3 = document.querySelector(".element-section3").scrollWidth;
let totalScoll3 = distanceFromTop3 + horizontalLenght3;
let elementSection3 = document.querySelector(".element-section3");
const setHorizontalSectionHeight3 = (document.querySelector(".horizontal-section3").style.height = horizontalLenght3 + "px");
console.log(horizontalLenght3);

// horizontal scroll section drone
let distanceFromTop4 = document.querySelector(".horizontal-section4").offsetTop;
let horizontalLenght4 = document.querySelector(".element-section4").scrollWidth;
let totalScoll4 = distanceFromTop4 + horizontalLenght4;
let elementSection4 = document.querySelector(".element-section4");
const setHorizontalSectionHeight4 = (document.querySelector(".horizontal-section4").style.height = horizontalLenght4 + "px");
console.log(horizontalLenght4);

// horizontal scroll section drone
let distanceFromTop5 = document.querySelector(".horizontal-section5").offsetTop;
let horizontalLenght5 = document.querySelector(".element-section5").scrollWidth;
let totalScoll5 = distanceFromTop5 + horizontalLenght5;
let elementSection5 = document.querySelector(".element-section5");
const setHorizontalSectionHeight5 = (document.querySelector(".horizontal-section5").style.height = horizontalLenght5 + "px");
console.log(horizontalLenght5);

// event listenner
window.addEventListener("scroll", function () {
  let scrollFromTop = window.pageYOffset;
  
  if (window.scrollY >= distanceFromTop && window.scrollY <= totalScoll) {
    elementSection.style.transform =
      "translateX(-" + (scrollFromTop - distanceFromTop) + "px";
  } else if (window.scrollY >= distanceFromTop2 && window.scrollY <= totalScoll2) {
    elementSection2.style.transform =
      "translateX(-" + (scrollFromTop - distanceFromTop2) + "px";
  } else if (window.scrollY >= distanceFromTop3 && window.scrollY <= totalScoll3) {
    elementSection3.style.transform =
      "translateX(-" + (scrollFromTop - distanceFromTop3) + "px";
  } else if (window.scrollY >= distanceFromTop4 && window.scrollY <= totalScoll4) {
    elementSection4.style.transform =
      "translateX(-" + (scrollFromTop - distanceFromTop4) + "px";
  } else if (window.scrollY >= distanceFromTop5 && window.scrollY <= totalScoll5) {
    elementSection5.style.transform =
      "translateX(-" + (scrollFromTop - distanceFromTop5) + "px";
  }
});
};
