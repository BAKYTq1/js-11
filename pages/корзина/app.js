document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("currendUser"));
    if (!user) {
      window.location.href = "../../index.html";
    } else {
      document.getElementById("userName").textContent = user.name;
      document.getElementById("userEmail").textContent = user.email;
      document.getElementById("userNumber").textContent = user.number;
    }
  
    const logoutBtn = document.querySelector("#logoutBtn");
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("currendUser");
      window.location.href = "../../index.html";
    });
  });