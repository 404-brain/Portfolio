const slider = document.querySelector('.slider');
const contact = document.querySelector('#contact');
const projects = document.querySelector('#projects');
const skills = document.querySelector('#skills');
const about = document.querySelector('#about');

//Scroll to sections
document.getElementById("about").addEventListener("click", () =>{
	document.querySelector(".about").scrollIntoView({
		behavior: "instant",
		block: "start",
		inline: "nearest"
	});
	if(true){
		contact.style.color = 'white';
		projects.style.color = 'white';
		skills.style.color = 'white';
		about.style.color = 'gray';
	}
}, false);

document.getElementById("projects").addEventListener("click", () =>{
	document.querySelector(".projects").scrollIntoView({
		behavior: "instant",
		block: "start",
		inline: "nearest"
	});
	if(true){
		projects.style.color = 'gray';
		contact.style.color = 'white';
		skills.style.color = 'white';
		about.style.color = 'white';
	}
}, false);

document.getElementById("skills").addEventListener("click", () =>{
	document.querySelector(".skills").scrollIntoView({
		behavior: "instant",
		block: "start",
		inline: "nearest"
	});
	if(true){
		contact.style.color = 'white';
		projects.style.color = 'white';
		skills.style.color = 'gray';
		about.style.color = 'white';
	}
}, false);

document.getElementById("contact").addEventListener("click", (e) =>{
	document.querySelector(".contact").scrollIntoView({
		behavior: "instant",
		block: "end",
		inline: "end"
	});
	if(true){
		contact.style.color = 'gray';
		projects.style.color = 'white';
		skills.style.color = 'white';
		about.style.color = 'white';
	}
}, false);
