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
    buttonSetColor(allButtons, "btn-danger");
  } else if (buttons.value === "green") {
    buttonSetColor(allButtons, "btn-success");
  } else if (buttons.value === "blue") {
    buttonSetColor(allButtons, "btn-primary");
  } else if (buttons.value === "random") {
    randomColors();
  } else if (buttons.value === "reset") {
    buttonColorReset(allButtons);
  }
}

function buttonSetColor(buttons, buttonColorClassName) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove(buttons[i].classList[1]); // remove all second class with 'btn-success'/'btn-danger'/'btn-primary
    buttons[i].classList.add(buttonColorClassName);
  }
}

function buttonColorReset(buttons) {
  for(let i = 0; i < buttons.length; i++ ){
    buttons[i].classList.remove(buttons[i].classList[1]);
    buttons[i].classList.add(copyAllButtons[i]) // this will add appropriate class to the buttons
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
