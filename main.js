let btn = document.getElementById("btn");
let output = document.getElementById("output-text");

let number = [Math.floor(Math.random() * 100)];

btn.addEventListener("click", function () {
  let input = document.getElementById("userInput").value;
  if (input == number) {
    output.innerHTML = `Congratulations! You guessed right,your number was ${number}`;
  } else if (input < number) {
    output.innerHTML = "You Guessed too Low!";
  } else if (input > number) {
    output.innerHTML = "You Guessed too High!";
  }
});
