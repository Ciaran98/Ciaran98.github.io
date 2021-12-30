// JQuery open snippet
$(document).ready(function(){
});

var counter = 0;

// On click function to make buttons act as hyperlinks to these websites
function redirect(buttonID){
	switch(buttonID) {
		case "LinkedIn":
			window.open("https://www.linkedin.com/in/ciaran-melarkey-694469194/", '_blank').focus();
			break;
		case "GitHub":
			window.open("https://github.com/Ciaran98", '_blank').focus();
			break;
		case "GitHubRepo":
			window.open("https://github.com/Ciaran98/Basic-Discord-Bot/tree/master", '_blank').focus();
			break;
	}
};

// Small joke function to replace background and mouse cursor
function replaceBG(){
	counter++;
	if(counter == 10){
		document.getElementById("header-img").style.backgroundImage = "url('assets/img/nessie-bg.png')";
		document.body.style.cursor = ("url(assets/img/nessie-cursor32.png),auto")
	}
}

// Function to have clicked button scroll user to the about section of the site
function smoothScroll(){
	document.getElementById("about-me").scrollIntoView({behavior: "smooth"});
}