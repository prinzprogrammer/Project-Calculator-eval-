const inputScreen = document.querySelector("#screen");
const buttons = document.querySelectorAll("button");

//storing the ‘display value’ in a variable
let equation = [];
let equationforComputation;

function populateDisplay(button) {
  const value = button.textContent;
  if (value === "=") {
    equationforComputation = equation.join("");
    inputScreen.textContent = eval(equationforComputation);
  } else if (value === "AC") {
    equation = [];
    inputScreen.innerHTML = "";
  } else if (value === "*" || value === "/" || value === "-" || value === "+") {
    inputScreen.innerHTML += ` ${value} `; //To add space before and after inputting an operator
    equation.push(value);
    console.log(equation);
  } else {
    inputScreen.innerHTML += value;
    equation.push(value);
    console.log(equation);
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => populateDisplay(button))
);

//Callback
//buttons.forEach => Adding EventListener(click) to all of the buttons
//when button is clicked /* () => populateDisplay(button) */ it calls the function with the parameter button
