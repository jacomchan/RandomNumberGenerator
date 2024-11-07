var button = document.getElementById("randomNumberButton")

function randNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
function generateNumber() {
    let min = document.getElementById('minNumber').value;
    let max = document.getElementById('maxNumber').value;
    let rand = randNum(min,max);
    document.getElementById("randomNumberOutput").innerHTML = rand;
}

// COde
var slideshows = document.querySelectorAll('[data-component="slideshow"]');

  // Apply to all slideshows that you define with the markup wrote
  slideshows.forEach(initSlideShow);

  function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

    var index = 0, time = 5000;
    slides[index].classList.add('active');  

    setInterval( () => {
      slides[index].classList.remove('active');

      //Go over each slide incrementing the index
      index++;

      // If you go over all slides, restart the index to show the first slide and start again
      if (index === slides.length) index = 0; 

      slides[index].classList.add('active');

    }, time);
  }
