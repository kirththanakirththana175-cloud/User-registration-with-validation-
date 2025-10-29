const form = document.getElementById("forgotForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  document.getElementById("emailError").textContent = "";

  if (!email.includes("@")) {
    document.getElementById("emailError").textContent = "Invalid email";
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/auth/forgot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    const data = await res.json();

    if (res.ok) {
      msg.style.color = "green";
      msg.textContent = data.message;
      form.reset();
    } else {
      msg.style.color = "red";
      msg.textContent = data.message;
    }
  } catch {
    msg.style.color = "red";
    msg.textContent = "Server error!";
  }
});
