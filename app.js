//variables
const body = document.querySelector("body");
const btn = document.querySelector(".btn");
const redGreenBlue = document.querySelector("#rgb")
const hex = document.querySelector("#hex");

//Converting RGB to Hex
function rgb(r, g, b){
  //hexadecimal count list
  let hexDec = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  let rHex = []; let gHex = []; let bHex = [];

  let firstDigit = Math.floor((r / 16)); // 14
  let secondDigit = Math.floor((g / 16));
  let thirdDigit = Math.floor((b / 16));


  for(let i in hexDec) {
      let index = parseInt(i);
      
      if(index === firstDigit) {
          rHex.push(hexDec[i]);
      }
      if(index === secondDigit) {
          gHex.push(hexDec[i]);
      }
      if(index === thirdDigit) {
          bHex.push(hexDec[i]);
      }
  }

  // Remainder
  let firstReminder = (r % 16);// 3
  let secondReminder = (g % 16);
  let thirdReminder = (b % 16);

  for(let i in hexDec) {
      let index = parseInt(i);
      
      if(index === firstReminder) {
          rHex.push(hexDec[i]);
      }
      if(index === secondReminder) {
          gHex.push(hexDec[i]);
      }
      if(index === thirdReminder) {
          bHex.push(hexDec[i]);
      }
  }
  return rHex.concat(gHex, bHex).join("");
}

//color generator function
function colorGenerator() {
  let red = Math.floor(Math.random() * 255) + 1;
  let green = Math.floor(Math.random() * 255) + 1;
  let blue = Math.floor(Math.random() * 255) + 1;

  body.style.background = "#" + rgb(red, green, blue);

  redGreenBlue.setAttribute("placeholder", `rgb(${red},${red},${red})`);
  hex.setAttribute("placeholder", "#" + rgb(red, green, blue));
}
btn.addEventListener("click", colorGenerator);