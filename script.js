// NAV BAR MENU //

// Toggle class active mengambil dari style.css dan html
const navbarNav = document.querySelector(".nav-menu");
// saat hamburger menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//untuk menghilangkan nav side bar di luar tombol menu (klik dimana saja)
const hamburgerMenu = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (event) {
  if (!hamburgerMenu.contains(event.target) &&!navbarNav.contains(event.target))
  {
    navbarNav.classList.remove("active");
  }
});
const menuButtonElement = document.getElementById("hamburger-menu");
menuButtonElement.addEventListener("click", function (event) {
  event.preventDefault();
});

// NAV BAR MENU END //


var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
}