document.getElementById("submitTicket").addEventListener("click", function () {
  var details = document.getElementById("details").value.trim();
  var confirmMsg = document.getElementById("confirmMsg");
  if (details) {
    confirmMsg.style.display = "block";
    document.getElementById("details").value = "";
  } else {
    confirmMsg.style.display = "block";
    confirmMsg.textContent = "Please describe the issue before submitting.";
    confirmMsg.style.color = "#ff2b2b";
  }
});
