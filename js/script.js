var projetos = []
projetos = [{
  nome: 'Skedoo - TCC',
  descricao: 'Sistema de gestão voltado a instituições de ensino infantil, desenvolvido em php juntamente com laravel, possui funções como Realtime Chat, cadastro de eventos em calendário, tabela de pagamentos e visualização em dashboard',
  link: '#',
  img: 'skedoo.png',
  tipo: 'grupo'
}, {
  nome: 'Biblioteca',
  descricao: 'Projeto de simulação de um sistema de biblioteca online, consumindo a API Google Books',
  link: 'https://biblioteca-pedro.netlify.app/',
  img: 'biblioteca.png',
  tipo: 'grupo'
}, {
  nome: 'SV Tour',
  descricao: 'Projeto de apresentação da cidade de São Vicente',
  link: 'https://svtour.netlify.app/',
  img: 'svtour.png',
  tipo: 'grupo'
}, {
  nome: 'BuscaCep',
  descricao: 'Sistema de busca de cep utilizando a API BrasilAPI',
  link: '#',
  img: '',
  tipo: 'individual'
}, {
  nome: 'Hogwarts',
  descricao: 'Projeto de fanpage voltado ao universo de Harry Potter, desenvolvido em PHP',
  link: 'https://hogwarts-pedro-portes.netlify.app/',
  img: 'hog.png',
  tipo: 'individual'
}, {
  nome: 'Castlevania',
  descricao: 'Projeto de fanpage voltado ao universo de castlevania, desenvolvido em PHP',
  link: '#',
  img: '',
  tipo: 'individual'
}, {
  nome: 'Pokedex',
  descricao: 'Projeto de fanpage voltado ao universo de Pokemon, desenvolvido em PHP',
  link: '#',
  img: '',
  tipo: 'individual'
}]


function carregarProjetos() {
  listaEmGrupo = document.getElementById("listaProjetosEmGrupo");
  listaIndividual = document.getElementById("listaProjetosIndividuais");
  for (i = 0; i < projetos.length; i++) {
    projetos[i].tipo == 'individual' ? listaIndividual.innerHTML += `<a class="link-card" target="_blank" href=`+projetos[i].link+`><div class="card"><div class="card-fundo"></div><img src='img/`+ projetos[i].img +`'><h3>` + projetos[i].nome + `</h3><p>` + projetos[i].descricao + `</p></div></a>` : listaEmGrupo.innerHTML += `<a  class="link-card" target="_blank" href=`+projetos[i].link+`><div class="card"><div class="card-fundo"></div><img src='img/`+ projetos[i].img +`'><h3>` + projetos[i].nome + `</h3><p>` + projetos[i].descricao + `</p></div></a>`
  }
}
var formAberto = false;
function formContato() {
  formAberto = !formAberto;
  var fundo = document.getElementById('fundo')
  var form = document.getElementById('formContato')
  var scroll = document.getElementById('body')
  form.style.display = formAberto ? 'block' : 'none'
  fundo.style.display = formAberto ? 'block' : 'none'
  scroll.className = formAberto ? 'scrolldesabilitado' : ''
}
var dropAberto = false;
function dropdown() {
  dropAberto = !dropAberto;
  var scroll = document.getElementById('body')
  var fundo = document.getElementById('fundo')
  var dropdown = document.getElementById('dropdown')
  var btnAbreDrop = document.getElementById('btnAbreDrop')
  var btnFechaDrop = document.getElementById('btnFechaDrop')
  dropdown.style.display = dropAberto ? 'block' : 'none'
  btnAbreDrop.style.display = dropAberto ? 'none' : 'block'
  btnFechaDrop.style.display = dropAberto ? 'block' : 'none'
  fundo.style.display = dropAberto ? 'block' : 'none'
  scroll.className = dropAberto ? 'scrolldesabilitado' : ''
}
setTimeout(carregarProjetos, 10);