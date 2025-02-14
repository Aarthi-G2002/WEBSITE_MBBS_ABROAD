    // Background Image Slideshow
        const images = [
    "image/medicalclg1.jpg",
    "image/medicalclg2.jpg",
    "image/colleged4.jpg",
    "image/colleged5.jpg",
    "image/colleged6.jpg",
    "image/collegeuk2.jpg",
    
];

let index = 0;

function changeBackground() {
    document.querySelector('.bg-slider').style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
} 

setInterval(changeBackground, 2000);
changeBackground();

// Navbar scroll effect
window.addEventListener("scroll", () => {
    document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);
});

        
         document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".country-btn");
    const universityContainers = document.querySelectorAll(".university-container");

    // Default display UK universities when the page loads
    const defaultCountry = "uk"; // United Kingdom
    document.getElementById(defaultCountry).style.display = "grid";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let country = button.getAttribute("data-country");

            universityContainers.forEach(container => {
                container.style.display = container.id === country ? "grid" : "none";
            });
        });
    });
});
	

    function revealSteps() {
    let steps = document.querySelectorAll('.timeline-step');
    let windowHeight = window.innerHeight;

    steps.forEach((step, index) => {
        let position = step.getBoundingClientRect().top;
        
        if (position < windowHeight - 100) {
            setTimeout(() => {
                step.classList.add('show');
            }, index * 200);
        } else {
            step.classList.remove('show'); // Remove class when out of view
        }
    });
}

// Trigger animation on scroll
window.addEventListener('scroll', revealSteps);
document.addEventListener('DOMContentLoaded', revealSteps);   
      
      
      
      
      //contact 
      
      
	function submitbtn(){
	const form = document.getElementById('contactForm');
	
	const successMsg = document.getElementById('contactSuccessMsg');
	
	form.onsubmit = (e) => {
		e.preventDefault();
	successMsg.style.display = 'block';
	
	setTimeout(()=>
	{
		successMsg.style.display = 'none';
		form.reset();
	},2000);
	};
	}
	submitbtn();