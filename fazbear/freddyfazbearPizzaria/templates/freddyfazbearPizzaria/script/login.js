// Demo-only auth: no server, just a localStorage flag so the sub-pages know
// someone "logged in" here. Any non-empty Employee ID is accepted.
var AUTH_KEY = "ffp_auth";
var USER_KEY = "ffp_user";

var loginGate = document.getElementById("loginGate");
var dashboard = document.getElementById("dashboard");
var loginForm = document.getElementById("loginForm");
var gateError = document.getElementById("gateError");
var whoText = document.getElementById("whoText");
var logoutBtn = document.getElementById("logoutBtn");

function showDashboard() {
  loginGate.classList.add("hidden");
  dashboard.classList.remove("hidden");
  whoText.textContent =
    "Logged in as " + (localStorage.getItem(USER_KEY) || "Staff");
}

function showGate() {
  dashboard.classList.add("hidden");
  loginGate.classList.remove("hidden");
}

if (localStorage.getItem(AUTH_KEY) === "1") {
  showDashboard();
}

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.getElementById("username").value.trim();
  if (!name) {
    gateError.textContent = "Enter an Employee ID to continue.";
    return;
  }
  gateError.textContent = "";
  localStorage.setItem(AUTH_KEY, "1");
  localStorage.setItem(USER_KEY, name);
  showDashboard();
});

logoutBtn.addEventListener("click", function () {
  localStorage.removeItem(AUTH_KEY);
  localStorage.removeItem(USER_KEY);
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  showGate();
});
