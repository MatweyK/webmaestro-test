import '../sass/styles.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

let featuresItem = document.querySelectorAll('.features__item');
featuresItem.forEach(function(element){
	element.addEventListener('mouseenter', function(e){
		console.log(e);
		this.lastElementChild.style.display = "block";
	}, false);
	element.addEventListener('mouseleave', function(e){
		this.lastElementChild.style.display = "none";
	}, false);
})

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:1,
  	loop:true,
  	autoplay:true,
  	nav:true,
  });
});



