let navbar = document.getElementsByClassName("navigation")[0];
const slides = document.getElementsByClassName("item");
const dots = document.getElementsByClassName("dot");
let sticky = navbar.offsetTop;

    let slideIndex = 1;
    showSlides(slideIndex);

    function nextImage(n) {
    showSlides(slideIndex += n);
    }

    function currentImage(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    let i;
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    
    }
    setInterval(function() { 
    $('.slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.slideshow');   
  }, 3000);
  window.onscroll = function() {myFunction()};
  function myFunction() {
  if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
  } else {
      navbar.classList.remove("sticky");
  }
  }
    function name(){
        const name = prompt("What is your name?")
        if(name.split('').shift().charAt(0) == "A"){
            alert('Hello ' + name + '. Thanks for visiting.')
        }
        else{
            alert('Hey ' + name + '. Thanks for checking us out.')
        }
       
    }
    function add(){
        alert('The item has been added to the cart.')
    }
    