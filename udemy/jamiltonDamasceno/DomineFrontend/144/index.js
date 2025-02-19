//. aparece um pop up com a mensagem olá mundo
//alert("olá mundo")

//. sistema que da bom dia , tarde ou noite dependendo do horario que o usuario ve seu site

const horario = new Date().getHours();
let saudacao;
if (horario < 12) {
  saudacao = "bom dia";
} else if (horario < 18) {
  saudacao = "boa tarde";
} else {
  saudacao = "bom noite";
}
document.getElementById("text").innerHTML = saudacao;

//. pega o nome sobrenome e idade do usuario e faz uma saudação
//const name = prompt("qual é o seu nome ?");
//const sobrenome = prompt("qual é seu sobrenome ?");
//const idade =prompt("quantos anos vc tem ?")

//alert(`seja bem vindo ao seu sistema ${name } ${sobrenome} sabemos agora que vc tem ${idade} anos`)
