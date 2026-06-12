document
.getElementById("loginForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    const message =
        document.getElementById("loginMessage");

    const savedUser =
        JSON.parse(
            localStorage.getItem("univexusUser")
        );

    if(!savedUser){

        message.innerHTML =
            "No account found. Please register first.";

        message.style.color =
            "#dc3545";

        return;
    }

    if(
        email === savedUser.email &&
        password === savedUser.password
    ){

        localStorage.setItem(
            "loggedInUser",
            (savedUser.fullName && savedUser.fullName.trim() !== "") ? savedUser.fullName : "User"
        );

        message.innerHTML =
            "Login successful! Redirecting...";

        message.style.color =
            "#28a745";

        setTimeout(function(){

            window.location.href =
                "index.html";

        },1500);

    }

    else{

        message.innerHTML =
            "Incorrect email or password.";

        message.style.color =
            "#dc3545";

    }

});