document.addEventListener("DOMContentLoaded", () => {
    const signinForm = document.querySelector("#signinForm");
  
    signinForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const email = document.querySelector("#signinEmail").value.trim();
      const password = document.querySelector("#signinPassword").value.trim();
      const number = document.querySelector("#signinNumber").value.trim();
  
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (user) => user.email === email && user.password === password && user.number === number
      );
      if (!user) {
        alert("Неверный email или пароль или номер !");
        return;
      }
  
      localStorage.setItem("currendUser", JSON.stringify(user));
      window.location.href = "../home/home.html";
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const signinForm = document.querySelector("#signinForm");
  
    signinForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const email = document.querySelector("#signinEmail").value.trim();
      const password = document.querySelector("#signinPassword").value.trim();
      const number = document.querySelector("#signinNumber").value.trim();
  
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (user) => user.email === email && user.password === password && user.number === number
      );
      if (!user) {
        alert("Неверный email или пароль или номер !");
        return;
      }
  
      localStorage.setItem("currendUser", JSON.stringify(user));
      window.location.href = "../корзина/index.html";
    });
  });