// Page load element: Initializes the video element, turns off autoplay, and turns off looping

var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('#player1');

	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});


// Play button element: Plays the video and updates the volume information
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

	var volume = document.getElementById("slider").value;

	document.getElementById("volume").innerHTML = volume + "%";

	console.log("Volume is set to " + volume);
});

// Pause button element: Pauses the video
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

// Slow down element: Slows the current video speed by 10% each time the button is clicked 
// and log the new speed to the console.  
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
});

// Speed up element: Increase the current video speed each time the button is clicked and log the new speed to the console. 
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
});

// Skip ahead element: Advances the current video by 10 seconds
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	if (video.currentTime > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime += 10;
	}
	console.log("Video current time is " + video.currentTime);
});

// Mute/unmute the video and update the text in the button
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
		console.log("Mute");
	}
	else {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
		console.log("Unmute");
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value / 100;
	document.getElementById("volume").innerHTML = (video.volume * 100) + "%";
	console.log('<span id = "volume">' + document.getElementById("volume").innerHTML + "</span>");
	console.log("The current value is " + video.volume);
});


// Styled: Utilizes the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

// Original: Remove the oldSchool class from the video
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});