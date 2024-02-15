function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    //var hora = data.getHours()
    var hora = 18 
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = "imagens/manha.png"
        document.body.style.background = "rgb(217, 205, 135)"
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = "imagens/tarde.png"
        document.body.style.background = "rgb(226, 126, 3)"
    } else {
        // BOA NOITE!
        img.src = "imagens/noite.png"
        document.body.style.background = "rgb(41, 53, 65)"
    }
}

