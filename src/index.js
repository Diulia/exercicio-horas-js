function carregarInfos() {
  var mensagem = window.document.getElementById("hora");
  var imagem = window.document.getElementById("imagem");
  //var data = new Date();
  //var hora = data.getHours()
  var hora = 22;
  mensagem.innerHTML = `Agora são ${hora}h.`;
  if (hora >= 6 && hora < 12) {
    //Manhã (das 6h ao meio-dia)
    imagem.src = "src/assets/manha.png";
    document.body.style.background = "#ffff80";
    document.body.style.color = "#33334d";
    var abc = "abacate";
  } else if (hora >= 12 && hora < 18) {
    //Tarde (do meio-dia às 18h)
    imagem.src = "src/assets/tarde.png";
    document.body.style.background = "#cc99ff";
  } else {
    //Noite (18h às 6h)
    imagem.src = "src/assets/noite.png";
    document.body.style.background = "#00264d";
  }

  console.log(abc);
}
