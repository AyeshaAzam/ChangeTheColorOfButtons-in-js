//will return an array with all buttons inside of it
let all_buttons = document.getElementsByClassName("btn");
console.log("all_buttons", all_buttons);

let allButtons = document.getElementsByTagName("button");
console.log("allButton", allButtons);

// loop through all buttons
var copyAllButtons = [];
console.log(allButtons.length);

for (let i = 0; i < allButtons.length; i++) {
  console.log("i is ", i);
  copyAllButtons.push(allButtons[i].classList[1]); // pushing the second class into the array (like: btn-success)
}
console.log("copyAllButtons", copyAllButtons);

function buttonColorChange(buttons) {
  //console.log(buttons.value);
  if (buttons.value === "red") {
    buttonRed();
  } else if (buttons.value === "green") {
    buttonGreen();
  } else if (buttons.value === "blue") {
    buttonBlue();
  } else if (buttons.value === "random") {
    randomColors();
  } else if (buttons.value === "reset") {
    buttonColorReset();
  }
}

function buttonRed() {
  // loop through all buttons
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]); // remove all second class with 'btn-success'/'btn-danger'/'btn-primary
    allButtons[i].classList.add("btn-danger");
  }
}

function buttonGreen() {
  for (let i = 0; i < allButtons.length; i++) {
    //console.log("i is what", i, allButtons[i]);
    allButtons[i].classList.remove(allButtons[i].classList[1]); // remove second class 'btn-success'
    allButtons[i].classList.add("btn-success"); // and add the class with name btn-success
  }
}

function buttonBlue() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]); // remove all second class with 'btn-success'/'btn-danger'/'btn-primary
    allButtons[i].classList.add("btn-primary");
  }
}

function buttonColorReset() {
  for(let i = 0; i < allButtons.length; i++ ){
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(copyAllButtons[i]) // this will add appropriate class to the buttons
  }
}

function randomColors() {
  let choices = ["btn-primary", "btn-danger", "btn-warning", "btn-success"]
  
  for(let i = 0; i < choices.length; i++ ){
    let randomNumber = Math.floor(Math.random()*4); // will be between 0 - 3
    console.log(randomNumber);
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(choices[randomNumber]); //choices[3] / choices[0] /choices[1]
  }

}
