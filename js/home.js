function mostraFilmes() {
    let i;
    let filme;
    let dadosFilmes = JSON.parse(data.target.response);

    localStorage.setItem('db_filmes', data.target.response); //Jogando os dados dos filmes no local Storage

    let poster = document.getElementsByClassName('poster');
    dadosHTML = '';
    for(i = 0; i < poster.length; i++)
    {
        filme = dadosFilmes.results[i];
        dadosHTML = `
        <!--POSTER-->
        <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="Card image cap" data-toggle="modal" data-target="#modal${i}">
        <!--MODAL-->
        <div class="modal fade" id="modal${i}" tabindex="-1" role="dialog" aria-labelledby="modal${i}_titulo" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modal1_titulo">${filme.title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="modal_texto">
                            <p>Descrição: ${filme.overview}</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <p>Lançamento: ${filme.release_date}</p>
                        <a href="detalhes_filme.html?id=${filme.id}" class="btn btn-info">Mais info</a>
                    </div>
                </div>
            </div>
        </div>
        <!--FIM MODAL-->
        `
        poster[i].innerHTML = dadosHTML;
    }
}