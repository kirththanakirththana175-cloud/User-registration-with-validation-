const form = document.getElementById("loginForm");
const msg = document.getElementById("msg");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  document.querySelectorAll(".error").forEach(e => e.textContent = "");
  msg.textContent = "";

  let valid = true;
  if (!email.includes("@")) { document.getElementById("emailError").textContent = "Invalid email"; valid = false; }
  if (!password) { document.getElementById("passwordError").textContent = "Password required"; valid = false; }
  if (!valid) return;

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("userName", data.message.replace("Welcome, ", "").replace("!", ""));
      msg.style.color = "green";
      msg.textContent = "Login successful! Redirecting...";
      form.reset();
      setTimeout(() => { window.location.href = "dashboard.html"; }, 1500);
    } else {
      msg.style.color = "red";
      msg.textContent = data.message || data.errors[0].msg;
    }
  } catch {
    msg.style.color = "red";
    msg.textContent = "Server error!";
  }
});