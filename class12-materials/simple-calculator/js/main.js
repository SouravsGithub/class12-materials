let total = 0;
const zero = document.querySelector("#pumpkin");
const three = document.querySelector("#dominosPizza");
const nine = document.querySelector("#zebra");
const minusTwo = document.querySelector("#cantThinkOfAnything");
const minusFive = document.querySelector("#newli");

zero.addEventListener("click", () => {
  total = 0;
  document.querySelector("#placeToPutResult").innerHTML = total;
});
three.addEventListener("click", () => {
  total = total + 3;
  document.querySelector("#placeToPutResult").innerHTML = total;
});
nine.addEventListener("click", () => {
  total = total + 9;
  document.querySelector("#placeToPutResult").innerHTML = total;
});
minusTwo.addEventListener("click", () => {
  total = total - 2;
  document.querySelector("#placeToPutResult").innerHTML = total;
});
minusFive.addEventListener("click", () => {
  total = total - 5;
  document.querySelector("#placeToPutResult").innerHTML = total;
});
