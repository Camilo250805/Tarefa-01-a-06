console.log("JS externo OK");

// EXE01
function MostraMsg(){
  let nomeExe01, paragrafoExe01;
  nomeExe01 = document.getElementById("txtExe01");
  paragrafoExe01 = document.getElementById("pExe01");
  if(nomeExe01.value != "") {
    paragrafoExe01.innerText = "Olá, " + nomeExe01.value + ". Seja bem vindo";
  } else {
    paragrafoExe01.innerHTML = "<span style='color:red' background>Digite seu nome!!</span>";
  }
}

//EXE02
function TrocaEstilo(){
  let btnExe02, paragrafoExe02;
  btnExe02 = document.getElementById("btnExe02");
  paragrafoExe02 = document.getElementById("pExe02");
  if (btnExe02.innerText == "Trocar Estilo") {
    paragrafoExe02.style.color = 'blue';
    paragrafoExe02.style.fontSize = '30px';
    paragrafoExe02.style.background = 'pink';
    btnExe02.innerText = "Retornar Estilo";
  } else {
    paragrafoExe02.style.color = '';
    paragrafoExe02.style.fontSize = '';
    paragrafoExe02.style.background = '';
    btnExe02.innerText = "Trocar Estilo";
  }
}

//EXE03
function trocaCor(novaCor) {
  document.body.style.background = novaCor;
}

//EXE04
function addParagrafo(texto){
  let div, novoParagrafo;
  div = document.getElementById("conteudo");
  novoParagrafo = document.createElement("p");
  novoParagrafo.innerText="Parágrafo Adicionado via JS";
  div.appendChild(novoParagrafo);
}
function removeParagrafo(){
  let div, ultimoParagrafo;
  div = document.getElementById("conteudo");
  ultimoParagrafo = div.lastElementChild;
  if (ultimoParagrafo) {
    div.removeChild(ultimoParagrafo)
  } else {
    alert("Não há mais parágrafos para serem removidos!")
  }
}

//EXE05
function mostraImg() {
  let img;
  img = document.getElementById("imgExe05");
  img.style.display = 'block';
}
function escondeImg() {
  let img;
  img = document.getElementById("imgExe05");
  img.style.display = 'none';
}

//EXE06
function TrocaImg(tipo){
  img = document.getElementById("imgExe06");
  switch (tipo) {
    case "Bicicleta":
      img.src = "./img/bike.png";
      break;
    case "Carro":
      img.src = "./img/carro.png";
      break;
      
    case "Moto":
      img.src = "./img/moto.png";
      break;

    case "Onibus":
      img.src = "./img/onibus.png";
      break;
  
    default:
      img.src = "./img/download -.png";
      break;
  }
}