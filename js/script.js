var projetos = []
projetos = [{
    nome: 'Skedoo - TCC',
    descricao: 'Sistema de gestão voltado a instituições de ensino infantil, desenvolvido em php juntamente com laravel, possui funções como Realtime Chat, cadastro de eventos em calendário, tabela de pagamentos e visualização em dashboard',
    link: '#',
    img: '',
    tipo:'grupo'
}, {
  nome: 'Biblioteca',
  descricao: 'Sistema desenvolvido em React consumindo a API Google Books',
  link: '#',
  img: '',
  tipo:'grupo'
},{
    nome: 'BuscaCep',
    descricao: 'Sistema de busca de cep utilizando a API BrasilAPI',
    link: '#',
    img:'',
    tipo: 'individual'
},{
  nome:'Hogwarts',
  descricao: 'Projeto de fanpage voltado ao universo de Harry Potter, desenvolvido em PHP',
  link: '#',
  img: '',
  tipo:'individual'
}]


function carregarProjetos() {
    listaEmGrupo = document.getElementById("listaProjetosEmGrupo");
    listaIndividual =document.getElementById("listaProjetosIndividuais");
    for (i = 0; i < projetos.length; i++) {
      projetos[i].tipo == 'individual' ? listaIndividual.innerHTML += `<div class="card"><h3>` + projetos[i].nome + `</h3><p>` + projetos[i].descricao + `</p></div>` : listaEmGrupo.innerHTML += `<div class="card"><h3>` + projetos[i].nome + `</h3><p>` + projetos[i].descricao + `</p></div>`
    }
}
var aberto = false;
function formContato(){
    var fundo = document.getElementById('fundo')
    aberto = !aberto;
    var form = document.getElementById('formContato')
    var scroll = document.getElementById('body')
    form.style.display = aberto ? 'block' : 'none' 
    fundo.style.display = aberto ? 'block' : 'none'
    scroll.className = aberto ? 'scrolldesabilitado' : ''
}
var percentual = 0;
function carregando() {
    if (percentual == 0) {
      percentual = 1;
      var elem = document.getElementById("carregando");
      var width = 1;
      var id = setInterval(frame, 15);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          document.getElementById("fundo").style.display = "none"
          document.getElementById("div-carregando").style.display = "none"
          document.getElementById("conteudo").style.display = "block"
          carregarProjetos();
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  }
  setInterval(carregando, 10);