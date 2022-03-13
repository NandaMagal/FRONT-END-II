let body = document.querySelector('body');
let titulo = document.querySelector('h1');
let item = document.querySelectorAll('.item');
let subtitulo = document.querySelectorAll('h2');
let conteudo = document.querySelectorAll('p');


function modoDark() {
    body.classList.toggle('darkMode');
    titulo.classList.toggle('darkTit');
    item.forEach(div => div.classList.toggle('darkItem'));
    subtitulo.forEach(h2 => h2.classList.toggle('darkConteudo'));
    conteudo.forEach(p => p.classList.toggle('darkConteudo'));
}
/*