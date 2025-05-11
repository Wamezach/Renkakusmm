document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  fetch("https://your-backend.infinityfreeapp.com/login.php", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    if (data.includes("Login successful")) {
      localStorage.setItem("username", formData.get("username"));
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("message").textContent = data;
    }
  });
});

document.getElementById("registerForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  fetch("https://your-backend.infinityfreeapp.com/register.php", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    document.getElementById("message").textContent = data;
  });
});
