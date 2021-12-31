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
		case "Email":
			navigator.clipboard.writeText("ciaran.melarkey@hotmail.com");
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
};

// Function to have clicked button scroll user to the about section of the site
function smoothScroll(){
	document.getElementById("about-me").scrollIntoView({behavior: "smooth"});
};

function collapseToggle(coll){
	if(document.getElementById(coll).style.maxHeight){
				document.getElementById(coll).style.maxHeight = null;
				document.getElementById(coll).style.overflow = "hidden";
				setTimeout(function(){
						hideElement(coll);
					}, 175);
			}
			else{
				document.getElementById(coll).style.display = "block";
				document.getElementById(coll).style.overflow = "auto";
				document.getElementById(coll).style.maxHeight = document.getElementById(coll).scrollHeight + "px";
			}
	/*switch(coll){
		case "xkcd":
			if(document.getElementById("xkcd").style.maxHeight){
				document.getElementById("xkcd").style.maxHeight = null;
				document.getElementById("xkcd").style.overflow = "hidden";
				setTimeout(function(){
						hideElement(coll);
					}, 175);
			}
			else{
				document.getElementById("xkcd").style.display = "block";
				document.getElementById("xkcd").style.overflow = "auto";
				document.getElementById("xkcd").style.maxHeight = document.getElementById("xkcd").scrollHeight + "px";
			}
			break;
		case "recover":
			if(document.getElementById("recover").style.maxHeight){
				document.getElementById("recover").style.maxHeight = null;
				document.getElementById("xkcd").style.overflow = "hidden";
				setTimeout(function(){
						hideElement(coll);
					}, 175);
				
			}
			else{
				document.getElementById("recover").style.display = "block";
				document.getElementById("xkcd").style.overflow = "auto";
				document.getElementById("recover").style.maxHeight = document.getElementById("recover").scrollHeight + "px";
			}
			break;
	}*/
	
};

function hideElement(id) {
	document.getElementById(id).style.display = "none"
}