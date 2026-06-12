document.addEventListener("DOMContentLoaded", function () {

    const welcomeEl = document.getElementById("welcomeUser");
    const accountBtn = document.getElementById("accountBtn");

    const user = localStorage.getItem("loggedInUser");

    if (user) {

        if (welcomeEl) {
            welcomeEl.textContent = "Welcome, " + user;
        }

        if (accountBtn) {
            accountBtn.textContent = "Logout";
            accountBtn.setAttribute("href", "#");
            accountBtn.addEventListener("click", function (e) {
                e.preventDefault();
                localStorage.removeItem("loggedInUser");
                window.location.href = "login.html";
            });
        }

    } else {

        if (welcomeEl) {
            welcomeEl.textContent = "";
        }

        if (accountBtn) {
            accountBtn.textContent = "Sign In";
            accountBtn.setAttribute("href", "login.html");
        }
    }

});
