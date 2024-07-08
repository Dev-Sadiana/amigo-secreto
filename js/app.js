let nomes = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    let lista = document.getElementById('lista-amigos');
    
    //adicionar o nome inserido na lista do array
    if (lista.textContent == '') {
        nomes.push(`${nome}`);                                  
        document.getElementById('lista-amigos').textContent = nomes;                            //verifica se é o primeiro elemento - não necessita de vírgula
    } else {
        nomes.push(` ${nome}`);
        document.getElementById('lista-amigos').textContent = nomes;                            //a partir do segundo elemento - adiciona ", " (vírgula e espaço)
    }
    document.getElementById('nome-amigo').value = '';                                           //limpa o campo de preenchimento do nome

    atualizarLista();
    atualizarSorteio();

}

function sortear() {
    let sorteio = document.getElementById('lista-sorteio');
    embaralha(nomes);

    //Um loop para percorrer o array embaralhado e atribuir um amigo secreto para cada nome
    for (let i = 0; i < nomes.length; i++) {
        if (i == nomes.length -1) {                                                             //adiciona o -1 pois o array inicia da posição 0
            sorteio.innerHTML = sorteio.innerHTML + nomes[i] + ' --> ' + nomes[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + nomes[i] + ' --> ' + nomes[i + 1] + '<br>'; //garante que o último elemento da lista sorteie o primeiro
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    //limpa os campos dos nomes sorteados e dos nomes inseridos
    nomes = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').textContent = '';
}

//função para excluir um dos nomes da lista
function excluirAmigo(index) {
    nomes.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < nomes.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = nomes[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}