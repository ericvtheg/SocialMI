
var slideIndex = 0;
//if(status == false) {
   showSlides();
//}
/*statusChange(){
   if(this.status == false){
      this.status = true;
   } else {
      this.status = false;
   }
}*/

function showSlides() {
    var i;

    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 7000); // Change image every 2 seconds
}
