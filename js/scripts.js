//Business Logic
function buildArr(e, e2) {
  let outArr = []
  for (i=0; i <= e; i++) {
    if (i.toString().includes("3")) {
      if (e2 != "") {
        outArr.push("Won't you be my neighbor " + e2 + "?")
        threeCount += 1
      } else {
        outArr.push("Won't you be my neighbor?");
        threeCount += 1
      }
    } else if(i.toString().includes("2")) {
      outArr.push("Boop!")
      twoCount += 1
    } else if(i.toString().includes("1")) {
      outArr.push("Beep!")
      oneCount += 1
    } else {
      outArr.push(i)
  }   
  }
  return outArr;
}

function welcomeMessage(e, e2) {
  let output = buildArr(e, e2)
  return output.join(", ");
}
function reverse() {
  revResult = []
  arrResult = document.getElementById("result").innerText.split(", ");
  for (i=arrResult.length-1; i>=0; i--) {
    revResult.push(arrResult[i]);
  }
  document.getElementById("result").innerText = revResult.join(", ");
}
function makeEvil() {
  document.body.style.backgroundColor = "red";
  document.getElementById("reveal").innerText = "RUN!"
  document.getElementById("goodBot").setAttribute("class", "hidden")
  document.getElementById("badBot").removeAttribute("class");
  document.getElementById("btn3").removeAttribute("class");
  document.getElementById("btn1").setAttribute("class", "hidden");

}
function makeGood() {
  document.body.style.backgroundColor = "lightblue";
  document.getElementById("reveal").innerText = "You Saved the Neighborhood!"
  document.getElementById("badBot").setAttribute("class", "hidden")
  document.getElementById("goodBot").removeAttribute("class");
  document.getElementById("btn1").removeAttribute("class");
  document.getElementById("btn3").setAttribute("class", "hidden");
}

function hideResults() {
  document.getElementById("reveal").setAttribute("class", "hidden")
  document.getElementById("btn1").setAttribute("class", "hidden");
  document.getElementById("btn2").setAttribute("class", "hidden");
  document.getElementById("inputData").setAttribute("class", "hidden");
  threeCount = 0
  twoCount = 0
  oneCount = 0
}

let threeCount = 0
let twoCount = 0
let oneCount = 0
//UI Logic
function formHandler(event) {
  event.preventDefault();
  hideResults()
  let result;
  const input = document.getElementById("number1").value;
  const name = document.getElementById("fname").value;
  if (input < 0) {
    result = "Error, input must be a positive integer or 0";
  } else {
    result = welcomeMessage(input, name);
    document.getElementById("reveal").removeAttribute("class");
    document.getElementById("btn1").removeAttribute("class");
    document.getElementById("btn2").removeAttribute("class");
    let count3 = document.getElementById("threeCount")
    count3.innerText = threeCount
    let count2 = document.getElementById("twoCount")
    count2.innerText = twoCount
    let count1 = document.getElementById("oneCount")
    count1.innerText = oneCount
    document.getElementById("inputData").removeAttribute("class")
  }
  
  document.getElementById("result").innerText = result;



  
}

window.addEventListener("load", function() {
  document.getElementById("userInput").addEventListener("submit", formHandler);
});