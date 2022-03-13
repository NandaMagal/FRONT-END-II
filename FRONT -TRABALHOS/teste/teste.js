function escreverHTML(titulo1, texto) {
    const body = documen.getElementById('body');
    const meuTemplate = `
<h1>titulo</h1>
<p>texto</p>
`;
    body.innerHTML += meuTemplate;
}