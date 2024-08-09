const campoFruta = document.querySelector('#campoFruta')
const campoBuscar = document.querySelector('#campoBuscar')
const campoBuscaAssincrona = document.querySelector('#campoBuscaAssincrona')
const botaoAdicionar = document.querySelector('#botaoAdicionar')
const botaoOrdenar = document.querySelector('#botaoOrdenar')
const listaFrutas = document.querySelector('#listaFrutas')
const botaoFiltrar = document.querySelector('#botaoFiltrar')

let vetorFrutas = []

const adicionarNaLista = () => {
    vetorFrutas.push(campoFruta.value)
    campoFruta.value = '';
    campoFruta.focus()
    atualizarLista(vetorFrutas)
}

const atualizarLista = (vetor) => {
    listaFrutas.innerHTML = '';
    vetor.forEach(fruta => {
        const li = document.createElement('li');
        li.textContent = fruta;
        listaFrutas.appendChild(li);
    });
};

botaoFiltrar.addEventListener('click', () => {
    const filtrados = vetorFrutas.filter(fruta => fruta.includes(campoBuscaAssincrona.value))
    atualizarLista(filtrados)
})

botaoAdicionar.addEventListener('click', adicionarNaLista);

botaoOrdenar.addEventListener('click', () => {
    vetorFrutas.sort();
    atualizarLista(vetorFrutas);
});

campoBuscar.addEventListener('input', () => {
    const filtrados = vetorFrutas.filter(fruta => fruta.includes(campoBuscar.value))
    atualizarLista(filtrados)
})



