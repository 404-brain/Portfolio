//Scroll to sections
document.getElementById("about").addEventListener("click", (e) =>{
	document.querySelector(".about").scrollIntoView({
		behavior: "instant",
		block: "start",
		inline: "nearest"
	});
});

document.getElementById("projects").addEventListener("click", (e) =>{
	document.querySelector(".projects").scrollIntoView({
		behavior: "instant",
		block: "start",
		inline: "nearest"
	});
});

document.getElementById("skills").addEventListener("click", (e) =>{
	document.querySelector(".skills").scrollIntoView({
		behavior: "instant",
		block: "start",
		inline: "nearest"
	});
});

document.getElementById("contact").addEventListener("click", (e) =>{
	document.querySelector(".contact").scrollIntoView({
		behavior: "instant",
		block: "end",
		inline: "end"
	});
});



