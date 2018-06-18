const element = document.getElementById("hello-intro");
const hello_world = "... Hello World!";
i = 0;

setInterval(function write(){
	if(i < hello_world.length){
		element.innerHTML += hello_world.charAt(i);
		i++;
		setTimeout(write, 200);
	}
}, 1000);
