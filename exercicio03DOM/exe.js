var area = window.document.getElementById("area") //escorpo global

area.addEventListener("click", clicar)
area.addEventListener("mouseenter", entrar)
area.addEventListener("mouseout", sair)

function clicar()  {
    area.innerHTML = "clicou"
    area.style.background ="red"
}

function entrar (arguments) {
    area.innerHTML =" entrou"
}
function sair (arguments) {
    area.innerHTML = "saiu"
}