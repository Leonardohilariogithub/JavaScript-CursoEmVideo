function analisar () {
    var txtp = document.querySelector("input#txtn1")
    var res = document.querySelector("div#res")
    var pais = "brasil"

    res.innerHTML += `Vivendo no pais ${pais}! `

    if (pais != "brasil") {
        res.innerHTML += ("vc é estrangeiro!");
    } else {
        res.innerHTML += `vc é brasileiro! ` 
        res.innerHTML += ("BRASILEIRO COM ORGULHO!");
    }
}