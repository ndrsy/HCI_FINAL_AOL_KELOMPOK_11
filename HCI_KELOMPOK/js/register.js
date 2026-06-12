document
.getElementById("registerForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    const fullName =
    document.getElementById("fullName").value.trim();

    const lastName =
    document.getElementById("lastName").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const password =
    document.getElementById("password").value;

    const confirmPassword =
    document.getElementById("confirmPassword").value;

    const message =
    document.getElementById("registerMessage");

    // Clear previous message

    message.innerHTML = "";

    // Check password match

    if(password !== confirmPassword){

        message.innerHTML =
        "Passwords do not match.";

        message.style.color =
        "#dc3545";

        return;
    }

    // Check password length

    if(password.length < 6){

        message.innerHTML =
        "Password must be at least 6 characters.";

        message.style.color =
        "#dc3545";

        return;
    }

    // Save user

    const user = {

        fullName: fullName,

        lastName: lastName,

        email: email,

        password: password

    };

    localStorage.setItem(
        "univexusUser",
        JSON.stringify(user)
    );

    message.innerHTML =
    "Account created successfully! Redirecting...";

    message.style.color =
    "#28a745";

    setTimeout(function(){

        window.location.href =
        "login.html";

    }, 1500);

});