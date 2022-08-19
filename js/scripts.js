//Business Logic
function buildArr(e) {
  let outArr = []
  for (i=0; i <= e; i++) {
    if (i.toString().includes("3")) {
      outArr.push("Won't you be my neighbor?");
    } else if(i.toString().includes("2")) {
      outArr.push("Boop!")
    } else if(i.toString().includes("1")) {
      outArr.push("Beep!")
    } else {
    outArr.push(i)
  }   
  }
  return outArr;
}

function welcomeMessage(e) {
  let output = buildArr(e)
  return output.join(", ");
}
function makeEvil() {
  document.body.style.backgroundColor = "red";
  document.getElementById("reveal").innerText = "RUN!"
  document.getElementById("goodBot").setAttribute("class", "hidden")
  document.getElementById("badBot").removeAttribute("class");
}
function hideResults() {
  document.getElementById("reveal").setAttribute("class", "hidden")
  document.getElementById("btn").setAttribute("class", "hidden");
}

//UI Logic
function formHandler(event) {
  event.preventDefault();
  hideResults()
  let result;
  const input = document.getElementById("number1").value;
  if (input < 0) {
    result = "Error, input must be a positive integer or 0";
  } else {
    result = welcomeMessage(input);
    document.getElementById("reveal").removeAttribute("class");
    document.getElementById("btn").removeAttribute("class");
  }
  
  document.getElementById("result").innerText = result;
  
}

window.addEventListener("load", function() {
  document.getElementById("userInput").addEventListener("submit", formHandler);
});