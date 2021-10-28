async function get_json(file) {
	const response = await fetch(file)
	const json = response.json()
	return json
}

const container = document.getElementById("container")
const template = document.getElementById("template")
container.removeChild(template)
template.removeAttribute("id")

get_json("data.json").then((
	data
) => {
	for (let i = 0; i < data.length; ++i) {
		let movie = data[i]
		let catalog = template.cloneNode(true)

		let cover = catalog.getElementsByClassName("cover")[0]
		let action = catalog.getElementsByClassName("action")[0]
		let title = catalog.getElementsByClassName("title")[0]
		let year = catalog.getElementsByClassName("year")[0]
		let rating = catalog.getElementsByClassName("rating")[0]
		let description = catalog.getElementsByClassName("description")[0]

		cover.setAttribute("src", movie.cover)
		cover.innderHTML = movie.alternative
		action.setAttribute("onclick", "set_data("+i+")")
		title.innerHTML = movie.title
		year.innerHTML = movie.year
		rating.innerHTML = movie.rating
		description.innerHTML = movie.description

		container.appendChild(catalog)
	}
})

function set_data(index) {
	console.log(index)
}
