function mostraFilmes() {
    let i;
    let filme;
    let dadosFilmes = JSON.parse(data.target.response);

    localStorage.setItem('db_filmes', data.target.response); //Jogando os dados dos filmes no local Storage

    let dadosHTML = '<div class="card-deck">';
    let descricao;
    for(i = 0; i < dadosFilmes.results.length; i++)
    {
        descricao = '';
        filme = dadosFilmes.results[i];
        if(filme.overview == "")
        {
            descricao = "Sem descrição!";
        }
        else
        {
            for(let cont = 0; cont < 280; cont++)
            {
                descricao += filme.overview[cont];
                if(descricao.length == filme.overview.length)
                {
                    break;
                }
            }
            descricao += '...'
        }
        tamanhoTela();
        if(((i % tamanho) == 0) && i != 0)
        {
            dadosHTML += `
            </div>
            <div class="card-deck">
            `
        }
        dadosHTML += `
        <div class="card">
            <img class="card-img-top" src="https://image.tmdb.org/t/p/original${filme.poster_path}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${filme.title}</h5>
                <p class="card-text">${descricao}</p>
                <a href="detalhes_filme.html?id=${filme.id}" class="btn btn-secondary float-right">Mais info</a>
            </div>
            <div class="card-footer">
                <small class="text-muted">Lançamento: ${filme.release_date}</small>
            </div>
        </div>
        `
    }

    document.getElementById('filmes').innerHTML = dadosHTML;
}