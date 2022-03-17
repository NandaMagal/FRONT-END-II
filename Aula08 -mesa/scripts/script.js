/*item 2 */
let botoes = document.getElementById('.buttons-div');

botoes.addEventListener(`click`,
    function(onclick) {
        console.log("Você  clicou");
        onclick.preventDefault();
    }
)

/*item 3*/
function alertaOnLoad() {
    alert("alertando !!!!");
}


/*item4*/
function alteraCor1() {
    document.getElementById("corTexto").style.color = "green";
}

function alteraCor2() {
    document.getElementById("corTexto").style.color = "#DDDDD";
}

/*
let alteraCor2 = document.querySelector('#botoes');
alteraCor.onmouseout = function() {
    console.log('Você retirou o mouse por cima deste elemento a cor será alterada');
    botoes.style.color = 'red';
}/*

/*item 5 */

let conteudo = document.querySelector('#nomes');
conteudo.onkeydown = function(event) {
    alert("A tecla foi acionada:" + event.key);
}

function exibeAlertaPressionarTecla() {
    alert("Uma tecla foi pressionada");
}
onkeydown = function() {
    exibeAlertaAoPressionarTecla()
}

let contador = 0;

function textOver() {
    document.getElementById("textColor").style.color = "red";
}

function alertaOnLoad() {
    alert("alerta");
}

function textOut() {
    document.getElementById("textColor").style.color = "blue";
}

function inputKey() {
    let inputValue = document.getElementById("nome").value;
    contador++;
    document.getElementById("nomeKeyFunctionValue").innerText = "On Key Up: " + inputValue;
    document.getElementById("contador").innerText = "Numero de vezes chamado: " + contador;
}