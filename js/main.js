let tamanho;
let url;
const API_KEY = process.env.API_KEY;

const mostraErro = (data) => {
    alert('Erro na requisição');
}

function tamanhoTela() {
    if((window.innerWidth >= 960))
    {
        tamanho = 4;
    }
    else
    {
        tamanho = 2;
    }
}

const init = () => {
    let xhr = new XMLHttpRequest();

    xhr.onerror = mostraErro;
    xhr.open('GET', url, true);
    xhr.send();
}

document.body.onload = function() {
    url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`;
    init()
}
window.onresize = init
document.getElementById('pesquisa').onkeyup = function() {
    let query = document.getElementById('pesquisa').value
    if(query != "")
    {
        url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}`;
    }
    else
    {
        url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`;
    }
    init()
}