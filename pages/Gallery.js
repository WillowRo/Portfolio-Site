class slide{
    constructor(title, caption, image){
        this.title = title;
        this.caption = caption;
        this.image = image;
    }
}

var currentSlide = 0;
var slides = [1, 2, 3, 4, 5, 6, 7] //generic info, placeholder


function nextSlide(){
    currentSlide++;
    updateSlide();
}

function lastSlide(){
    currentSlide--;
    updateSlide();
}

function updateSlide(){
    if (currentSlide > slides.length){
        currentSlide = 0;
    } else if (currentSlide < 0){
        currentSlide = slides.length;
    }

    console.log(currentSlide);
}