// pegando elemento pelo id
const container = document.querySelector("#container");
// criando elementos
const inputNome = document.createElement("input");
const inputVitorias = document.createElement("input");
const inputDerrotas = document.createElement("input");
const inputEmpates = document.createElement("input");
const inputLink = document.createElement("input");

const botaoAdd = document.createElement("button");

const table = document.createElement("table");
const trElement = document.createElement("tr");
const thNomeElement = document.createElement("th");
const thVitoriaElement = document.createElement("th");
const thDerrotaElement = document.createElement("th");
const thEmpateElement = document.createElement("th");
const thPontoElement = document.createElement("th");

// setando atributos aos elementos
inputNome.setAttribute("id", "nome");
inputNome.setAttribute("type", "text");
inputNome.setAttribute("name", "nome");
inputNome.setAttribute("placeholder", "Digite o nome do time");

inputVitorias.setAttribute("id", "vitoria");
inputVitorias.setAttribute("type", "number");
inputVitorias.setAttribute("name", "vitoria");
inputVitorias.setAttribute("placeholder", "Digite o nº de vitórias");

inputDerrotas.setAttribute("id", "derrota");
inputDerrotas.setAttribute("type", "number");
inputDerrotas.setAttribute("name", "derrota");
inputDerrotas.setAttribute("placeholder", "Digite o nº de derrotas");

inputEmpates.setAttribute("id", "empate");
inputEmpates.setAttribute("type", "number");
inputEmpates.setAttribute("name", "empate");
inputEmpates.setAttribute("placeholder", "Digite o nº de empates");

inputLink.setAttribute("id", "link");
inputLink.setAttribute("type", "text");
inputLink.setAttribute("name", "link");
inputLink.setAttribute("placeholder", "Insira a URL do time");

botaoAdd.setAttribute("id", "btnAdd");
const textbotaoAdd = document.createTextNode("Adicionar time");
botaoAdd.appendChild(textbotaoAdd);

// inserindo elementos na div container
container.appendChild(inputNome);
container.appendChild(inputVitorias);
container.appendChild(inputDerrotas);
container.appendChild(inputEmpates);
container.appendChild(inputLink);
container.appendChild(botaoAdd);
container.appendChild(table);

thNomeElement.innerHTML = "Nome time";
thVitoriaElement.innerHTML = "Vitórias";
thDerrotaElement.innerHTML = "Derrotas";
thEmpateElement.innerHTML = "Empates";
thPontoElement.innerHTML = "Pontos";

trElement.appendChild(thNomeElement);
trElement.appendChild(thVitoriaElement);
trElement.appendChild(thDerrotaElement);
trElement.appendChild(thEmpateElement);
trElement.appendChild(thPontoElement);

table.appendChild(trElement);

const vitoria = 3;
const empate = 1;
var pontuacao = 0;

botaoAdd.onclick = function () {
  if (
    inputNome.value == "" ||
    inputVitorias.value == "" ||
    inputDerrotas.value == "" ||
    inputEmpates.value == "" ||
    inputLink.value == ""
  ) {
    alert("Preencha todos os campos!");
    return "";
  }

  // calculando os pontos
  pontuacao = inputVitorias.value * vitoria + inputEmpates.value * empate;

  const trElement = document.createElement("tr");
  const tdNome = document.createElement("td");
  const tdVitorias = document.createElement("td");
  const tdDerrotas = document.createElement("td");
  const tdEmpates = document.createElement("td");
  const tdPontos = document.createElement("td");

  // atribuindo valor do input a const para mostrar na tela
  tdNome.innerHTML = `<a href=${inputLink.value}>${inputNome.value}</a>`
  tdVitorias.innerHTML = inputVitorias.value;
  tdDerrotas.innerHTML = inputDerrotas.value;
  tdEmpates.innerHTML = inputEmpates.value;
  tdPontos.innerHTML = pontuacao;
  
  trElement.appendChild(tdNome);
  trElement.appendChild(tdVitorias);
  trElement.appendChild(tdDerrotas);
  trElement.appendChild(tdEmpates);
  trElement.appendChild(tdPontos);

  table.appendChild(trElement);

  alert("Time adicionado com sucesso!");

  inputNome.value = "";
  inputVitorias.value = "";
  inputDerrotas.value = "";
  inputEmpates.value = "";
  inputLink.value = "";
};
