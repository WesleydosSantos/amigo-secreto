let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value.trim(); 

    if (nomeAmigo === '') {
        alert('Por favor, digite o nome do amigo.');
        return; 
    }
    if (amigos.some(amigo => amigo.toLowerCase() === nomeAmigo.toLowerCase())) {
        alert('Este nome já foi adicionado. Por favor, insira um nome diferente.');
        inputAmigo.value = ''; 
        return;
    }
    amigos.push(nomeAmigo);
    atualizarListaAmigos();
    inputAmigo.value = '';
    inputAmigo.focus();
}

function atualizarListaAmigos() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ''; 

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaHTML.appendChild(item);
    }
}

function sortear() {
    if (amigos.length === 0 || amigos.length < 2) {
        alert('Por favor, adicione pelo menos dois nomes para realizar o sorteio!');
        return; 
    } 

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}

function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').value = '';
}