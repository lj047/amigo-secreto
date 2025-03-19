//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// array para armazenar os nomes
let nomes = [];

// função para adicionar nomes à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo'); // campo de texto
    const nome = input.value.trim(); // remove espaços em branco

    // valida se o campo está vazio
    if (nome === "") {
        alert("por favor, insira um nome válido.");
        return;
    }

    // valida se o nome já foi adicionado
    if (nomes.includes(nome)) {
        alert("este nome já foi adicionado.");
        return;
    }

    // adiciona o nome ao array e atualiza a lista na tela
    nomes.push(nome);
    atualizarLista();

    // limpa o campo de entrada
    input.value = "";
}

// função para atualizar a lista de nomes na tela
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // limpa a lista antes de atualizar

    // adiciona cada nome à lista
    nomes.forEach(nome => {
        const item = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);
    });
}

// função para sortear um nome aleatório
function sortearAmigo() {
    if (nomes.length === 0) {
        alert("adicione pelo menos um nome para sortear.");
        return;
    }

    // sorteia um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const nomeSorteado = nomes[indiceSorteado];

    // exibe o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>o amigo secreto é: <strong>${nomeSorteado}</strong></li>`;
}