const naruto = document.querySelector(".naruto");
const sasuke = document.querySelector(".sasuke");
const itachi = document.querySelector(".itachi");
const nameOfCharacter = document.querySelector("h1");

naruto.addEventListener("click", showNaruto);
sasuke.addEventListener("click", showSasuke);
itachi.addEventListener("click", showItachi);

function showNaruto(event) {
  document.querySelector("body").style.background =
    "url(https://www.nawpic.com/media/2020/naruto-4k-nawpic-11.jpg)";
  document.querySelector("body").style.backgroundSize = "cover";
  document.querySelector("body").style.backgroundRepeat = "no-repeat";
  document.querySelector("body").style.backgroundPosition = "center";
  nameOfCharacter.innerText = "NARUTO";
  document.querySelector("body").style.animation = "appear 5s linear infiite";
}
function showSasuke(event) {
  document.querySelector("body").style.background =
    "url(https://free4kwallpapers.com/uploads/originals/2015/08/30/sasuke-uchiha-shippuden.jpg)";
  document.querySelector("body").style.backgroundSize = "cover";
  document.querySelector("body").style.backgroundRepeat = "no-repeat";
  document.querySelector("body").style.backgroundPosition = "bottom";
  nameOfCharacter.innerText = "SASUKE";
}
function showItachi(event) {
  document.querySelector("body").style.background =
    "url(https://wallpaperaccess.com/full/4834078.jpg)";
  document.querySelector("body").style.backgroundSize = "cover";
  document.querySelector("body").style.backgroundRepeat = "no-repeat";
  document.querySelector("body").style.backgroundPosition = "center";
  nameOfCharacter.innerText = "ITACHI";
}
