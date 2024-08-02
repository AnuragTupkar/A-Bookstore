


const image = document.getElementById("Fbooks");

image.style.opacity = 0;


function fadeIn() {

  image.style.opacity = Number(image.style.opacity) + 0.10;
  if (image.style.opacity >= 1) {
    clearInterval(interval);
  }
}

const interval = setInterval(fadeIn, 50);
const images = document.querySelectorAll(".detail");

images.forEach(image => {

  image.style.opacity = 0;
  image.style.transform = "translateX(-50px)";

  function fadeIn() {

    image.style.opacity = Number(image.style.opacity) + 0.10;

    image.style.transform = `translateX(${Number(image.style.transform.match(/-?\d+/)[0]) + 5}px)`;

    if (image.style.opacity >= 1) {
      clearInterval(interval);
    }
  }

  const interval = setInterval(fadeIn,50);
});

$("#submit1").click(function(){
  alert("Your Feedback has been recorded");
});


