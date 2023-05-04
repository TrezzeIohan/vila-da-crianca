let windowWidth = window.innerWidth;

if (windowWidth <= 547){
  let tabela = document.getElementById('tabela');

  tabela.classList.add("d-none");

  let aviso = document.createElement('div');
  var textoAviso = document.createTextNode("Coloque a tela em horizontal e atualize a página para continuar.");
  aviso.appendChild(textoAviso);
  aviso.classList.add("cor-branco");

  let cabecalho = document.getElementById('cabecalho');
  cabecalho.appendChild(aviso);
}

