document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch("https://renkakusmm.free.nf/login.php", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    document.getElementById("message").textContent = data;

    if (data.includes("Login successful")) {
      localStorage.setItem("username", formData.get("username"));
      window.location.href = "dashboard.html";
    }
  })
  .catch(error => {
    document.getElementById("message").textContent = "Login failed: " + error;
  });
});

document.getElementById("registerForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch("https://renkakusmm.free.nf/register.php", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    document.getElementById("message").textContent = data;
  })
  .catch(error => {
    document.getElementById("message").textContent = "Registration failed: " + error;
  });
});
