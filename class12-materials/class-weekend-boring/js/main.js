document.querySelector("#check").addEventListener("click", check);
const output = document.querySelector("#placeToSee");

function check() {
  const day = document.querySelector("#day").value.toLowerCase();

  //Conditionals go here
  if (day === "tuesday" || day === "thursday") {
    output.innerText = "Class Day";
  } else if (day === "sunday" || day === "saturday") {
    output.innerText = "Weekend";
  } else {
    output.innerText = "Boring!!!";
  }
}
