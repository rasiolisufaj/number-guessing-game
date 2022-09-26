const userInput = document.getElementById("user-input");
const messageBoxElement = document.getElementById("msg");
const spanBoxElement = document.getElementById("span-box");
const popupElement = document.getElementById("popup");
const guessedNumberElement = document.getElementById("guessed-number");
const playAgainBtn = document.querySelector(".play-again");
let generatedNumber = Math.floor(Math.random() * 100 + 1);
console.log(generatedNumber);

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    messageBoxElement.classList.remove("d-none");
    if (+userInput.value === generatedNumber) {
      popupElement.classList.remove("d-none");
      guessedNumberElement.innerText = generatedNumber;
    } else if (userInput.value < generatedNumber) {
      spanBoxElement.innerText = userInput.value;
      messageBoxElement.lastElementChild.innerHTML = `GO HIGHER`;
    } else {
      spanBoxElement.innerText = userInput.value;
      messageBoxElement.lastElementChild.innerHTML = `GO LOWER`;
    }

    if (userInput.value > 100 || userInput.value < 1) {
      spanBoxElement.innerText = userInput.value;
      messageBoxElement.lastElementChild.innerHTML = `Number must be between 1 and 100`;
    }
  }
});

playAgainBtn.addEventListener("click", () => {
  window.location.reload();
});
