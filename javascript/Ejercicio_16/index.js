const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const seccionTrash = document.querySelectorAll(".seccion-trash")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
    })

    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
    })

    seccion.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})

seccionTrash.forEach(trash => {
    trash.addEventListener("dragover", event => {
        event.preventDefault()
    })

    trash.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        parrafo.remove(parrafo)
    })
})