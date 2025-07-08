const printIcon = document.getElementById("print-icon");
const printButton = document.getElementById("print-button");
const receiptWrapper = document.getElementById("receipt-wrapper");
const printIndicator = document.getElementById("print-indicator");
const receiptsWrapper = document.getElementById("receipts-wrapper");
const receiptContainer = document.getElementById("receipt-container");

const setPrintIndicator = (state) => {
  printIndicator.classList.remove("active-background", "inactive-background");
  printIcon.classList.remove("active-icon", "inactive-icon");
  printIndicator.classList.add(`${state}-background`);
  printIcon.classList.add(`${state}-icon`);
};

let isPrinting = false, hasPrinted = false;

setPrintIndicator("inactive");

printButton.addEventListener("click", () => {
  if (isPrinting) return;

  isPrinting = true;

  let newReceipt = null;

  const printerSound = new Audio("./printer.mp3");
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

    if (newReceipt) {
      newReceipt.classList.add("fade-out");

      setTimeout(() => {
        newReceipt.remove();
      }, 5000);
    }

    setPrintIndicator("inactive");
  }, 8000);
});
