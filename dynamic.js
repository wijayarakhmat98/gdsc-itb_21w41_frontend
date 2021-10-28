if (sessionStorage.getItem('data') == null) {
	sessionStorage.setItem('data', localStorage.getItem('data'))
}

const data = JSON.parse(sessionStorage.getItem('data'))

let cover = document.getElementsByClassName("cover")[0]
cover.setAttribute("src", data.cover)
cover.innerHTML = data.alternative

document.getElementsByClassName("title")[0].innerHTML = data.title
document.getElementsByClassName("year")[0].innerHTML = data.year
document.getElementsByClassName("rating")[0].innerHTML = data.rating
document.getElementsByClassName("description")[0].innerHTML = data.description
document.getElementsByClassName("synopsis")[0].innerHTML = data.synopsis
document.getElementsByClassName("writers")[0].innerHTML = data.writers
document.getElementsByClassName("directors")[0].innerHTML = data.directors
document.getElementsByClassName("actors")[0].innerHTML = data.actors
