const naruto = document.querySelector(".naruto");
const sasuke = document.querySelector(".sasuke");
const itachi = document.querySelector(".itachi");
const nameOfCharacter = document.querySelector("h1");
const body = document.querySelector("body");

naruto.addEventListener("click", showNaruto);
sasuke.addEventListener("click", showSasuke);
itachi.addEventListener("click", showItachi);

function showNaruto(event) {
  document.querySelector("body").style.background =
    "url(https://www.nawpic.com/media/2020/naruto-4k-nawpic-11.jpg)";
  body.style.backgroundSize = "cover";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundPosition = "center";
  nameOfCharacter.innerText = "NARUTO";
}
function showSasuke(event) {
  document.querySelector("body").style.background =
    "url(https://free4kwallpapers.com/uploads/originals/2015/08/30/sasuke-uchiha-shippuden.jpg)";
  body.style.backgroundSize = "cover";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundPosition = "bottom";
  nameOfCharacter.innerText = "SASUKE";
}
function showItachi(event) {
  document.querySelector("body").style.background =
    "url(https://wallpaperaccess.com/full/4834078.jpg)";
  body.style.backgroundSize = "cover";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundPosition = "center";
  nameOfCharacter.innerText = "ITACHI";
}
