let pedra = 1;
let papel = 2;
let tesoura = 3;
let numeroUsuario = parseInt(prompt("Digite um numero:, 1 = Pedra, 2 = Papel, 3 = Tesoura"));
let numeroComputador = Math.round(Math.random() * 3 + 1);
let pontosUsuario;
let pontosComputador;

if (numeroUsuario == 1 && numeroComputador == 3) {
    alert("Você ganhou um ponto nesta rodada") +
        pontosUsuario = pontosUsuario + 1;
} else if (numeroUsuario == 3 && numeroComputador == 1) {
    alert("Voce perdeu a rodada e o computador ganhou um ponto");
    pontosComputador = pontosComputador + 1;
} else if (numeroUsuario == 3 && numeroComputador == 2) {
    alert("Você ganhou um ponto nesta rodada")
    pontosUsuario = pontosUsuario + 1;
} else if (numeroUsuario == 2 && numeroComputador == 3) {
    alert("Voce perdeu a rodada e o computador ganhou um ponto"); +

} else if (numeroUsuario == 2 && numeroComputador == 1) {
    alert("Voce ganhou")
    pontosUsuario + 1;
} else if (numeroUsuario == 1 && numeroComputador == 2) {
    alert("Voce perdeu");
    pontosComputador + 1;
}