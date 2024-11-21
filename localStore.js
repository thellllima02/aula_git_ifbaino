const storedUsername = localStorage.getItem("username");
const storedPassword = localStorage.getItem("password");

document.getElementById("username").textContent = storedUsername;
document.getElementById("password").textContent = storedPassword;