let idade = prompt("introduza sua idade");
console.log(idade + 2021);
parseInt("22");
parseInt(prompt("Introduza idade"));
let a = parseInt("22");
let b = parseInt(prompt("Introduza idade"));
let c = parseInt("22" + "150");
let d = parseInt(22 + 150)
let e = parseInt(22 + parseInt("150"));
let f = parseInt(22.55);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(parseFloat(22.34));
console.log(parseFloat(22.3456284));
Se testamos estas funções e também por curiosidade, ou engano— ambos são extremamente úteis🙂—, tentamos analisar um texto, vimos que o resultado obtido não é um número.
let edad = parseInt(prompt("Introduza sua idade"));
if (edad > 18) {
    console.log("É maior de idade");
} else {
    console.log("É menor de idade");
}


🚨
Claramente não estamos isentos do fato do utilizador ser um troll, portanto, temos sempre de procurar formas de validar os dados que o utilizador pode manipular.