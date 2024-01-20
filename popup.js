document.addEventListener("DOMContentLoaded", function () {
  var clickButton = document.getElementById("clickButton");

  if (clickButton) {
    clickButton.addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "startClicking" });
      });
    });
  } else {
    console.error("Element with ID 'clickButton' not found");
  }
});
