const form = document.getElementById("registerForm");
const msg = document.getElementById("msg");
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = passwordInput.value.trim();

  document.querySelectorAll(".error").forEach(e => e.textContent = "");
  msg.textContent = "";

  let valid = true;

  if (!name) {
    document.getElementById("nameError").textContent = "Name is required";
    valid = false;
  }
  if (!email.includes("@")) {
    document.getElementById("emailError").textContent = "Invalid email";
    valid = false;
  }
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Min 6 characters";
    valid = false;
  }

  if (!valid) return;

  try {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      msg.style.color = "green";
      msg.textContent = "Registered successfully! Redirecting to login...";
      form.reset();
      setTimeout(() => { window.location.href = "login.html"; }, 2000);
    } else {
      msg.style.color = "red";
      msg.textContent = data.message || data.errors[0].msg;
      if (data.message && data.message.includes("already registered")) {
        msg.textContent = "Email already registered. Redirecting to login...";
        setTimeout(() => { window.location.href = "login.html"; }, 2000);
      }
    }
  } catch {
    msg.style.color = "red";
    msg.textContent = "Server error!";
  }
});