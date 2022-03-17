/* 
Unit 4 
Retreived from: https://www.w3schools.com/howto/howto_js_slideshow.asp
*/
var slideIndex = 1;
showSlides(slideIndex);

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 6000); // Change image every 6 seconds
}

// Toggle mobile menu on button click
function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

// Create a new class for displaying and handling pagination for tokens
class CryptoList {
  // class constructor
  constructor() {
    this.cryptoList = [];
    this.index = 0;
  }

  // Converge 2 arrays into one
  join(...values) {
    return this.cryptoList.push(...values);
  }

  // return current index (page)
  current() {
    if (this.index <= this.cryptoList.length - 1 && this.index >= 0) {
      return this.cryptoList[this.index];
    } else {
      return "Index exceeds cryptolist length";
    }
  }

  // increase index(page) by 1 and return the new page
  next() {
    console.log(this.current());
    this.index++;
    this.index > this.cryptoList.length - 1 ? (this.index = 0) : this.index;
    return this.cryptoList[this.index];
  }

  // decrease index by 1 and return previous page
  previous() {
    console.log(this.current());
    this.index--;
    this.index < 0 ? (this.index = this.cryptoList.length - 1) : this.index;
    return this.cryptoList[this.index];
  }
}
