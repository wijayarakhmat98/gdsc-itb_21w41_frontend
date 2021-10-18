(() => {
	let wiggle_box = document.getElementById("wiggle_box");
	let wiggle = document.getElementById("wiggle");

	wiggle.style.display = "inline-block";

	const s = 2;
	let t = 0;
	let d = true;

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
})();

async function get_json(file) {
	const response = await fetch(file);
	const json = response.json();
	return json;
}

get_json("data.json").then((data) => {
	const body = document.getElementsByTagName("body")[0];
	data.forEach((i) => {
		let heading = document.createElement("h1");
		heading.appendChild(document.createTextNode(i.title));

		let description = document.createElement("p");
		description.appendChild(document.createTextNode(i.description));

		let block = document.createElement("div");
		block.appendChild(heading);
		block.appendChild(description);

		body.appendChild(block);
	});
});
