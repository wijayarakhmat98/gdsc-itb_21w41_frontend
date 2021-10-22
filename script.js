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
	data.forEach((
		movie
	) => {
		let catalog = template.cloneNode(true)

		let cover = catalog.getElementsByTagName("img")[0]
		let name = catalog.getElementsByTagName("p")[0]
		let ratings = catalog.getElementsByTagName("p")[1]

		cover.setAttribute("src", movie.cover)
		cover.innderHTML = movie.alternative
		name.innerHTML = movie.title

		container.appendChild(catalog)
	})
})
