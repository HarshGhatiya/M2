let stringCont = document.getElementById("str-var");
let intCont = document.getElementById("int-var");
let sumFuncAns = document.getElementById("sum-func-answer");
let if_elseAns = document.getElementById("if-else-header-answer");

// Variables
let stringVar = "Harsh";
stringCont.innerHTML = stringVar;
let integerVar = 46;
intCont.innerHTML = integerVar;

// Sum function
let sumFunc = (num1, num2) => {
  return num1 + num2;
};

// Setting the output of the function to html content
sumFuncAns.innerHTML = sumFunc(36, 63);

// Decision making
let age = 18;
if (age >= 11) {
  if_elseAns.innerHTML = "Yes";
} else {
  if_elseAns.innerHTML = "No";
}

// Loop to print multiples of 11
for (let x = 1; x < 11; x++) {
  document.write(x *11 + "<br>");
}