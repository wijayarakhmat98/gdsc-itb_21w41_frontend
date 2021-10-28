let context = []

function set_data(i) {
	sessionStorage.setItem('data', JSON.stringify(context[i]))
}

function set_new_data(i) {
	localStorage.setItem('data', JSON.stringify(context[i]))
}

const container = document.getElementById("container")
const template = document.getElementById("template")
template.removeAttribute("id")

function render() {
	container.innerHTML = ""

	for (let i = 0; i < context.length; ++i) {
		let movie = context[i]
		let catalog = template.cloneNode(true)

		let cover = catalog.getElementsByClassName("cover")[0]
		let action = catalog.getElementsByClassName("action")[0]
		let title = catalog.getElementsByClassName("title")[0]
		let year = catalog.getElementsByClassName("year")[0]

		cover.setAttribute("src", movie.cover)
		cover.innerHTML = movie.alternative
		action.setAttribute("onclick", "set_data("+i+")")
		action.setAttribute("onauxclick", "set_new_data("+i+")")

		title.innerHTML = movie.title
		year.innerHTML = movie.year

		container.appendChild(catalog)
	}
}

async function get_json(file) {
	const response = await fetch(file)
	const json = response.json()
	return json
}

const json = get_json("data.json")

json.then((data) => {
	context = data
	render()
	container.removeAttribute("style")
})

const field = document.getElementById("search")
field.addEventListener('change', search)

function search() {
	json.then((data) => {
		const text = field.value.toLowerCase()
		context = []
		data.forEach((movie) => {
			const title = movie.title.toLowerCase()
			if (title.search(text) != -1) {
				context.push(movie)
			}
		})
		render()
	})
}

function reset() {
	json.then((data) => {
		field.value = ""
		context = data
		render()
	})
}
