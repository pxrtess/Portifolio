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
          document.getElementById("div-carregando").style.display = "none"
          document.getElementById("conteudo").style.display = "block"
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  }
  setInterval(carregando, 10);