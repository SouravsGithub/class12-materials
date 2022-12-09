const input = document.querySelector("#day");
const btn = document.querySelector("#check");
btn.addEventListener("click", () => {
  const value = input.value.toLowerCase();
  switch (value) {
    case "tuesday":
      console.log("Hey, It's class day!");
      break;
    case "thursday":
      console.log("Hey, It's class day!");
      break;
    case "saturday":
      console.log("Hurrayyy.... It's the weekend :)");
      break;
    case "sunday":
      console.log("Hurrayyy.... It's the weekend :)");
      break;
    default:
      console.log("BORING!!!!");
  }

  // The same thing with if else statements

  /*
  if (value === "tuesday" || value === "thursday") {
    console.log("Hey, It's class day!");
  } else if (value === "saturday" || value === "sunday") {
    console.log("Hurrayyy.... It's the weekend :)");
  } else {
    console.log("BORING!!!!");
  }
  */
});
