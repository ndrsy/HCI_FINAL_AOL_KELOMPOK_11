document
.getElementById("careerForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    const interests =
    Array.from(
        document.querySelectorAll(
        'input[type="checkbox"]:checked'
        )
    )
    .map(item => item.value);

    const studentData = {

        biology:
        Number(
        document.getElementById("biology").value
        ),

        chemistry:
        Number(
        document.getElementById("chemistry").value
        ),

        physics:
        Number(
        document.getElementById("physics").value
        ),

        math:
        Number(
        document.getElementById("math").value
        ),

        english:
        Number(
        document.getElementById("english").value
        ),

        economics:
        Number(
        document.getElementById("economics").value
        ),

        interests:

        interests,

        careerGoal:

        document
        .getElementById("careerGoal")
        .value

    };

    localStorage.setItem(
        "studentScores",
        JSON.stringify(studentData)
    );

    window.location.href =
    "results.html";

});