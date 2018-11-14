// vertical scroll position
window.addEventListener('scroll', (e) =>{

	const el = document.querySelector(".header-scroll");
	const contact = document.querySelector('#contact');
	const projects = document.querySelector('#projects');
	const skills = document.querySelector('#skills');
	const about = document.querySelector('#about');
	
	// ABOUT SECTION
	if(this.scrollY >= 100 && this.scrollY <= 300){
		el.style.width = "15%";
		about.style.color = 'grey';
		skills.style.color = 'white';
	// SKILLS SECTION	
	}else if(this.scrollY >= 300 && this.scrollY <= 500){
		el.style.width = "35%";
		about.style.color = 'white';
	}else if(this.scrollY >= 500 && this.scrollY <= 1000){
		el.style.width = "45%";
		skills.style.color = 'grey';
		projects.style.color = 'white';
	// PROJECT SECTION
	}else if(this.scrollY >= 1000 && this.scrollY <= 1300){
		el.style.width = "65%";
		skills.style.color = 'white';
	}else if(this.scrollY >= 1300 && this.scrollY <= 1650){
		el.style.width = "75%";
		projects.style.color = 'grey';
	}else if(this.scrollY >= 1650 && this.scrollY <= 1800){
		el.style.width = "85%";
		contact.style.color = 'white';
	// CONTACT SECTION		
	}else if(this.scrollY >= 1800 && this.scrollY <= 1980){
		el.style.width = "95%";
		projects.style.color = 'white';
		contact.style.color = 'grey';
	}else if(this.scrollY >= 1985){
		el.style.width = "100%";
	}else{
		el.style.width = "0%";
	}
});
