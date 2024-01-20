document.getElementById("submitBtn").addEventListener("click", function () {
  var cardNumber = document.getElementById("cardNumber").value;
  var expirationDate = document.getElementById("expirationDate").value;
  var cvc = document.getElementById("cvc").value;

  // Log or perform any actions with the entered payment information
  console.log("Card Number:", cardNumber);
  console.log("Expiration Date:", expirationDate);
  console.log("CVC:", cvc);

  // You can also send this information to your extension or perform any other desired actions.
});
