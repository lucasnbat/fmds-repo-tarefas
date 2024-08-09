const frutas = []; // vetor que armazenará as frutas inseridas pelo usuário

const campo = document.querySelector('#fruta');
const botao = document.querySelector('#adicionar');
const lista = document.querySelector('#lista');
const botaoOrdernar = document.querySelector('#ordenar');
const campoBuscar = document.querySelector('#buscar');

botao.addEventListener('click', () => {
    frutas.push(campo.value);
    campo.value = '';
    campo.focus();
    atualizarLista(frutas);
});

botaoOrdernar.addEventListener('click', () => {
    frutas.sort();
    atualizarLista(frutas);
});

const atualizarLista = (vetor) => {
    lista.innerHTML = '';
    vetor.forEach(fruta => {
        lista.innerHTML += `<li>${fruta}</li>`;
    });
}

campoBuscar.addEventListener('input', () => {
    const filtrados = frutas.filter(fruta => fruta.includes(campoBuscar.value));
    atualizarLista(filtrados);
});