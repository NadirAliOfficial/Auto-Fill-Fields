// content.js

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "startClicking") {
    var cardNumberInput = document.querySelector("#cardNumber");
    var expirationDateInput = document.querySelector("#expirationDate");
    var cvcInput = document.querySelector("#cvc");

    if (cardNumberInput && expirationDateInput && cvcInput) {
      // Set values for card number, expiration date, and cvc
      cardNumberInput.value = "1111111111111111";
      expirationDateInput.value = "09/2003"; // Replace with your desired value
      cvcInput.value = "111";

      // Dispatch 'input' events to simulate user input
      cardNumberInput.dispatchEvent(new Event("input"));
      expirationDateInput.dispatchEvent(new Event("input"));
      cvcInput.dispatchEvent(new Event("input"));

      // Dispatch 'keydown' events to simulate Tab key press
      cardNumberInput.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Tab" })
      );
      expirationDateInput.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Tab" })
      );
      cvcInput.dispatchEvent(new KeyboardEvent("keydown", { key: "Tab" }));
    } else {
      console.error("One or more input fields not found");
    }
  }
});
