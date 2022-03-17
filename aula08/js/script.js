let contador = 0;

function alertaOnLoad() {
    alert("alerta");
}

function textOver() {
    document.getElementById("textColor").style.color = "red";
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