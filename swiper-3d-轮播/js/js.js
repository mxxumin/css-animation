var mySwiper = new Swiper(".swiper-container",{
	prevButton:".swiper-button-prev",
	nextButton:".swiper-button-next",
	loop:true,
	effect:"coverflow",
    slidesPerView:3,
    centeredSlides:true,
    coverflow:{
    	rotate:0,
    	stretch:20,
    	depth:80,
    	modifier:2,
    	slideShadows:false
    }
})