let wiggle_box = document.getElementById("wiggle_box");
let wiggle = document.getElementById("wiggle");

const s = 2;
let t = 0;
let d = true;

wiggle.style.display = "inline-block";

setInterval(()=>{
	if (d) {
		t += s;
		if (t >= wiggle_box.clientWidth-wiggle.offsetWidth) {
			d = false;
		}
	} else {
		t -= s;
		if (t <= 0) {
			d = true;
		}
	}

	wiggle.style.transform = "translateX(" + t + "px)";
}, 16.67);
