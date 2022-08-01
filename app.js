//Definimos por array 4 possibilidades, começando do índice 0 com cores pré-definidas.

const colors = ["green", "red", "rgb(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
  //A função irá gerar um número de 0 a 3, puxando a cor pelo índice.
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
})
function getRandomNumber(){
    //Utilizando o Math.random ele pode retornar literalmente qualquer número dentro de 0 a 3, incluíndo números quebrados.
    //Utilizamos o Math.floor para retornar o número inteiro mais próximo.
    return Math.floor(Math.random()*colors.length);
}