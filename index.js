const modal = document.getElementById("modal");
const printIcon = document.getElementById("print-icon");
const okayButton = document.getElementById("okay-button");
const printButton = document.getElementById("print-button");
const receiptWrapper = document.getElementById("receipt-wrapper");
const printIndicator = document.getElementById("print-indicator");
const receiptsWrapper = document.getElementById("receipts-wrapper");
const receiptContainer = document.getElementById("receipt-container");

let isPrinting = false, hasPrinted = false;
const printerSound = new Audio("./printer.mp3");

printerSound.currentTime = 0;
modal.classList.add("fade-in-animation");

const setPrintIndicator = (state) => {
  printIndicator.classList.remove("active-background", "inactive-background");
  printIcon.classList.remove("active-icon", "inactive-icon");
  printIndicator.classList.add(`${state}-background`);
  printIcon.classList.add(`${state}-icon`);
};

setPrintIndicator("inactive");

okayButton.addEventListener("click", () => {
  modal.classList.add("fade-out-animation");
});

printButton.addEventListener("click", () => {
  if (isPrinting) return;

  isPrinting = true;

  let newReceipt = null;

  printerSound.play();

  setPrintIndicator("active");

  if (hasPrinted) {
    newReceipt = receiptWrapper.cloneNode(true);
    receiptsWrapper.appendChild(newReceipt);
  } else {
    receiptContainer.classList.add("print");
    hasPrinted = true;
  }

  setTimeout(() => {
    isPrinting = false;
    printerSound.pause();
    printerSound.currentTime = 0;

    if (newReceipt) {
      newReceipt.classList.add("fade-out");

      setTimeout(() => {
        newReceipt.remove();
      }, 5000);
    }

    setPrintIndicator("inactive");
  }, 6500);
});
