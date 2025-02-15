// const display = document.querySelector("#display");
// const buttons = document.querySelectorAll("button");

// buttons.forEach((item) => {
//   item.onclick = () => {
//     if (item.id == "clear") {
//       display.innerText = "";
//     } else if (item.id == "backspace") {
//       let string = display.innerText.toString();
//       display.innerText = string.substr(0, string.length - 1);
//     } else if (display.innerText != "" && item.id == "equal") {
//       display.innerText = eval(display.innerText);
//     } else if (display.innerText == "" && item.id == "equal") {
//       display.innerText = "Empty!";
//       setTimeout(() => (display.innerText = ""), 2000);
//     } else {
//       display.innerText += item.id;
//     }
//   };
// });

// const themeToggleBtn = document.querySelector(".theme-toggler");
// const calculator = document.querySelector(".calculator");
// const toggleIcon = document.querySelector(".toggler-icon");
// let isDark = true;
// themeToggleBtn.onclick = () => {
//   calculator.classList.toggle("dark");
//   themeToggleBtn.classList.toggle("active");
//   isDark = !isDark;
// };

// Get the display element
const display = document.querySelector("#display");

// Get all button elements
const buttons = document.querySelectorAll("button");

// Function to handle keyboard input
function handleKeyboardInput(event) {
  // Check if the pressed key is a number or an operator
  if (!isNaN(event.key) || "+-*/.".includes(event.key)) {
    display.innerText += event.key;
  } else if (event.key === "Enter") {
    // If Enter key is pressed, evaluate the expression
    if (display.innerText !== "") {
      display.innerText = eval(display.innerText);
    } else {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    }
  } else if (event.key === "Backspace") {
    // If Backspace key is pressed, remove the last character
    let string = display.innerText.toString();
    display.innerText = string.substr(0, string.length - 1);
  } else if (event.key === "Delete") {
    // If Delete key is pressed, clear the display
    display.innerText = "";
  }
}

// Add event listener for keyboard input
document.addEventListener("keydown", handleKeyboardInput);

// Function to handle mouse click input
function handleMouseClick(item) {
  if (item.id === "clear") {
    display.innerText = "";
  } else if (item.id === "backspace") {
    let string = display.innerText.toString();
    display.innerText = string.substr(0, string.length - 1);
  } else if (display.innerText !== "" && item.id === "equal") {
    display.innerText = eval(display.innerText);
  } else if (display.innerText === "" && item.id === "equal") {
    display.innerText = "Empty!";
    setTimeout(() => (display.innerText = ""), 2000);
  } else {
    display.innerText += item.id;
  }
}

// Add event listener for mouse click input
buttons.forEach((item) => {
  item.onclick = () => handleMouseClick(item);
});

// Theme toggle functionality
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};