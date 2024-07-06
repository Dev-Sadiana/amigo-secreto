let nomes = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    let lista = document.getElementById('lista-amigos');
    let sorteio = document.getElementById('lista-sorteio');
    
    nomes.push(` ${nome}`);
    document.getElementById('lista-amigos').textContent = nomes;
    document.getElementById('nome-amigo').value = '';

}

function sortear() {
    
}

function reiniciar() {
    
}