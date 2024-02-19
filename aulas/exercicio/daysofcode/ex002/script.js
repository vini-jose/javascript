var nome = prompt("Qual seu nome:")
var idade = prompt("Qual sua idade:")
var linguagem = prompt("Qual linguagem vc está estudando:")
var msg = `Olá ${nome}, você tem ${idade} anos e está estudando ${linguagem}`

alert(msg)

var gosta = prompt(`Você gosta de estudar ${linguagem}?`)

if (gosta == "Sim") {
    alert("Muito bom! Continue esJosétudando e você terá sucesso!")
} else {
    alert("Ahh que pena... Já tentou aprender outra linguagens")
}



