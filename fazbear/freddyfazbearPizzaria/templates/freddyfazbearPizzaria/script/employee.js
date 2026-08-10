document.getElementById("whoText").textContent =
  "Logged in as " + (localStorage.getItem("ffp_user") || "Staff");
document.getElementById("logoutBtn").addEventListener("click", function () {
  localStorage.removeItem("ffp_auth");
  localStorage.removeItem("ffp_user");
  window.location.href = "freddy-fazbears-pizza.html";
});
