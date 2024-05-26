var area = prompt("Você quer seguir para área de Front-End ou Back-End")

if (area == 0) {
    window.alert("[ERRO] Tente novamente!")
} else {
    if (area == "Front-End" || area == "Front") {
        var front = prompt("Você quer aprender React ou Vue.")
    } else if (area == "Back-End" || area == "Back") {
        var back = prompt("Você quer aprender C# ou Java.")
    } 
    var area_escolhida = prompt(`Você quer continuar como ${area}`)
    if (area_escolhida == "Sim") {
        
    } else {
        var fullstack = prompt("Você quer ser FullStack")
    } 
}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok") {
    var tecnologia = prompt("Quais são as tecnologias que você gostaria de se especializar?");
    var continua = prompt("Tem mais alguma tecnologia que você gostaria de aprender? (Sim ou Não)");

    if (continua.toLowerCase() === "sim") {
        c++;
    } else {
        window.alert("Obrigado");
        break;
    }
    
}
