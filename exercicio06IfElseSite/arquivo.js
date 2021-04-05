function calcular() {
    var txtv = document.querySelector("input#txtvel")
    var res = document.querySelector("div#res")
    var vel = Number(txtv.value)
    res.innerHTML = `sua velocidade atual é ${vel} km/h `
    if (vel > 60) {
        res.innerHTML += `vc esta multado `
    }
    res.innerHTML += `dirija com cuidado!`
}