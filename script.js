
var operationButtons = document.getElementsByClassName('operation-button');

const input1 = document.getElementById("number1");
const input2 = document.getElementById("number2");

function makeOperation(operationCode) {
  var number1 = Number(input1.value);
  var number2 = Number(input2.value);

  if (operationCode === "+") {
    var resultat = number1 + number2;
  } else if (operationCode === "-") {
    var resultat = number1 - number2;
  } else if (operationCode === "*") {
    var resultat = number1 * number2;
  } else if (operationCode === "/") {
    var resultat = number1 / number2;
  } else {
    window.alert("operation is unknown");
  }
  alert(resultat);
}

function onOperationButtonClick(eventObject) {
  var clickedElement = eventObject.currentTarget;
  var operation = clickedElement.innerHTML;
  makeOperation(operation);
}

var button = operationButtons[i];
for (var i = 0; i < operationButtons.length; i++) {
  operationButtons[i].addEventListener("click", onOperationButtonClick);
}
