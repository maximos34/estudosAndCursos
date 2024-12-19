/*
.... pegue essa frase 
]]]]]]] Luiz Otávio Miranda tem 30 anos, pesa 84 kilos e tem 1,8 metros de altura e seu IMC é de            25.92592925925924
]]]]]]] Luiz Otávio nasceu em 1980.

~~~~ subistitua o  nome por uma variavel , sobrenome , idade e altura alem do ano de nascimento e termine calculando o imc 
*/


//! Resolvendo o problema 


let nome = "Luiz";
let sobrenome = "Otavio Miranda" ;
let peso = 84 ;
let altura = 1.8;
const imc = peso/(altura*altura);
let nascimento = 1980 ;
let thisYear = 2024;
let idade = thisYear - nascimento ;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kilos e tem ${altura} metros de altura e seu IMC é de ${imc}`)

console.log(`${nome} ${sobrenome}nasceu em ${nascimento}`)