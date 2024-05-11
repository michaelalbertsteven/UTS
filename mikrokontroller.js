let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// orderBook
const scriptURL = 'https://script.google.com/macros/s/AKfycbwLXzrUxi34BdzMpvQwt7Lg8tny6CcZ7ytoHUvmi4YrzN_E6kn-iO4vHntnl3tDjhmE/exec'
  const form = document.forms['orderBook'];

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        // reset
        form.reset();
        console.log('Success!', response);
      })
      .catch(error => console.error('Error!', error.message));
  })
// orderBook