//Business Logic
/*function validator(e){
  let eString = e.toString();
  let newE = "";
  let temp2 = 0
  for (i = 1; i < eString.length; i+=2) {
    newE = newE.concat(eString[i-1]);
    temp2 = parseInt(eString[i]) * 2;
    if (temp2 >= 10) {
    temp2 -= 9;
    }
    newE = newE.concat(temp2);
  }
  let eSum = 0
  for (i=0; i < newE.length; i++) {
    eSum += parseInt(newE[i]);
    if (eSum >= 10) {
      eSum -= 10
    }
  }
  let validOut
  if (eSum === 0) {
    validOut = "Credit card is VALID"
  } else {
    validOut = "Credit card is NOT VALID"
  }
  return validOut;
}

function numCheck(e) {
  if (e < 0 || e.length != 16) {
    return 0
  } else {
    return 1
  }
}*/
function buildArr(e) {
  let outArr = []
  console.log(e)
  console.log(e.toString())
  for (i=0; i <= e; i++) {
    if (i.toString().includes("3")) {
      console.log("the 3 checked worked");
      outArr.push("Won't you be my neighbor?");
    } else {
    console.log(i)
    outArr.push(i)
    console.log(outArr)
  }   
  }
  return outArr;
}

function welcomeMessage(e) {
  let output = buildArr(e)
  return output;
}

//UI Logic

function formHandler(event) {
  event.preventDefault();
  let result
  const input = document.getElementById("number1").value;
  result = welcomeMessage(input)
  
  /*let cardDigits = cardNumber.toString()
  const checkedNum = numCheck(cardDigits)
  if (checkedNum === 1) {
    result = validator(cardNumber)
  } else {
    result = "Error, credit cards are 16 positive integers"
  }

*/

  document.getElementById("result").innerText = result;
}

window.addEventListener("load", function() {
  document.getElementById("userInput").addEventListener("submit", formHandler);
  console.log("page load function worked")
});