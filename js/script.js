// Form validation
document.getElementById('contactForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  let name=document.getElementById('name').value;
  let email=document.getElementById('email').value;
  let message=document.getElementById('message').value;
  if(name && email && message){
    alert("Thank you for contacting us, "+name+"!");
    this.reset();
  } else {
    alert("Please fill in all fields.");
  }
});

// Image slider
let slides=document.querySelectorAll('.slider img'); 
let currentSlide=0;
function nextSlide(){
  slides[currentSlide].style.display='none'; 
  currentSlide=(currentSlide+1)%slides.length; 
  slides[currentSlide].style.display='block';
}
slides.forEach((slide,i)=>{if(i!==0) slide.style.display='none';});
setInterval(nextSlide,3000);
