const msgBoxEl = document.getElementById("msg");
const spanBoxEl = document.getElementById("span-box");
const popUpEl = document.getElementById("popup");
const popUpSpanEl = document.getElementById("guessed-number");
const playAgainBtn = document.querySelector(".play-again");

let generatedNumber = Math.floor(Math.random() * 100 + 1);

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

// Start Recognition
recognition.start();

// Capture User Speak
function captureUserWords(e) {
  const msg = e.results[0][0].transcript;

  writeMessage(msg);
  checkNumber(msg);
}

// Write Message
function writeMessage(msg) {
  msgBoxEl.innerHTML = `
  <div>You said: </div>
  <span class='box' id='span-box'>${msg}</span>
  `;
}

// Check Number
function checkNumber(msg) {
  const number = +msg;

  // Check validation
  if (Number.isNaN(number)) {
    msgBoxEl.innerHTML += `<div>This is not a valid number </div>`;
    return;
  }

  // Check in range
  if (number > 100 || number < 1) {
    msgBoxEl.innerHTML += `<div>Number must be between 1 and 100 </div>`;
    return;
  }

  // Check number
  if (number === generatedNumber) {
    popUpEl.classList.remove("d-none");
    popUpSpanEl.innerText = `${msg}`;
  } else if (number < generatedNumber) {
    msgBoxEl.innerHTML += `<div>GO HIGHER </div>`;
  } else {
    msgBoxEl.innerHTML += `<div>GO LOWER </div>`;
  }
}

// Speak result
recognition.addEventListener("result", captureUserWords);

// End Service
recognition.addEventListener("end", recognition.start);

// Play Again
playAgainBtn.addEventListener("click", () => {
  window.location.reload();
});
