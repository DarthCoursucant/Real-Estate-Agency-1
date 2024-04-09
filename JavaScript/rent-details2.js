let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i; 
    let slideshow2 = document.getElementsByClassName("slides2");
    if (n > slideshow2.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slideshow2.length}
    for (i = 0; i < slideshow2.length; i++) {
        slideshow2[i].style.display = "none";
    }
    slideshow2[slideIndex2-1].style.display = "block";
}