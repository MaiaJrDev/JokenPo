var joken = [];
let escolhaUser = "a";
let escolhaPc;

let pedra = document.getElementById("pedra");
let papel = document.getElementById("papel");
let tesoura = document.getElementById("tesoura");
let result = document.getElementById("result");

function chamaPedra() {
  escolhaUser = "pedra";
  sortearPc();
}
function chamaPapel() {
  escolhaUser = "papel";
  sortearPc();
}
function chamaTesoura() {
  escolhaUser = "tesoura";
  sortearPc();
}

function sortearPc() {
  let img = document.getElementById("img");

  let pedra = "<img src='img/pedra.png'></img>";
  let papel = "<img src='img/papel.png'></img>";
  let tesoura = "<img src='img/tesoura.png'></img>";

  joken.push(pedra, papel, tesoura);

  var randomItem = joken[Math.floor(Math.random() * joken.length)];

  if (randomItem == pedra) {
    escolhaPc = "pedra";
  } else if (randomItem == papel) {
    escolhaPc = "papel";
  } else {
    escolhaPc = "tesoura";
  }

  if (escolhaUser === escolhaPc) {
    result.innerHTML = `Você Escolheu ${escolhaUser} e o PC ${escolhaPc}<br>Deu Empate !`;
  } else if (
    (escolhaUser === "pedra" && escolhaPc === "papel") ||
    (escolhaUser === "tesoura" && escolhaPc === "pedra") ||
    (escolhaUser === "papel" && escolhaPc === "tesoura")
  ) {
    result.innerHTML = `Você Escolheu ${escolhaUser} e o PC ${escolhaPc}<br>o PC Ganhou !`;
  } else {
    result.innerHTML = `Você Escolheu ${escolhaUser} e o PC ${escolhaPc}<br>Você Ganhou !`;
  }

  return (img.innerHTML = randomItem);
}
