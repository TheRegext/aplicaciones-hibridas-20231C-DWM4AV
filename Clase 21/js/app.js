let contador = document.getElementById("contador")

let cant = contador.getAttribute("data-inicial")
contador.innerText = cant

contador.addEventListener('click', function () {
    if (cant < contador.getAttribute("data-finaly")) {
        cant++
        contador.innerText = cant
    }
})



let contador2 = document.getElementById("contador2")

let cant2 = contador2.getAttribute("data-inicial")
contador2.innerText = cant2

contador2.addEventListener('click', function () {
    if (cant2 < contador2.getAttribute("data-finaly")) {
        cant2++
        contador2.innerText = cant2
    }
})