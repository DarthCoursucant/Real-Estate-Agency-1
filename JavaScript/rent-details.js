let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i; 
    let slideshow = document.getElementsByClassName("slides");
    if (n > slideshow.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slideshow.length}
    for (i = 0; i < slideshow.length; i++) {
        slideshow[i].style.display = "none";
    }
    slideshow[slideIndex-1].style.display = "block";
}