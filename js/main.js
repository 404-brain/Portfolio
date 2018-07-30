window.addEventListener('scroll', (e) =>{

	const el = document.querySelector(".header-scroll");
	
	// vertical scroll position
	if(this.scrollY >= 100 && this.scrollY <= 300){
		el.style.width = "15%";
	}else if(this.scrollY >= 300 && this.scrollY <= 500){
		el.style.width = "35%";
	}else if(this.scrollY >= 500 && this.scrollY <= 1000){
		el.style.width = "45%";
	}else if(this.scrollY >= 1000 && this.scrollY <= 1300){
		el.style.width = "65%";
	}else if(this.scrollY >= 1300 && this.scrollY <= 1650){
		el.style.width = "75%";
	}else if(this.scrollY >= 1650 && this.scrollY <= 1800){
		el.style.width = "85%";
	}else if(this.scrollY >= 1800 && this.scrollY <= 1980){
		el.style.width = "95%";
	}else if(this.scrollY >= 1985){
		el.style.width = "100%";
	}else{
		el.style.width = "0%";
	}
});
