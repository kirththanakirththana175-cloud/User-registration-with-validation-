const userName = localStorage.getItem("userName");

if (!userName) {
  alert("You must log in first!");
  window.location.href = "login.html";
} else {
  document.getElementById("userName").textContent = userName;
}

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("userName");
  alert("Logged out successfully!");
  window.location.href = "login.html";
});