function calculateScholarship() {

    const campus =
        document.getElementById("campus").value;

    const score =
        parseFloat(
            document.getElementById("score").value
        );

    const income =
        parseFloat(
            document.getElementById("income").value
        );

    const result =
        document.getElementById("result");

    if (!score || !income) {

        result.style.display = "block";

        result.innerHTML =
            "<h3>Please fill all fields.</h3>";

        return;
    }

    let scholarship = "No Scholarship";
    let coverage = "0%";

    if (score >= 95) {

        scholarship = "Full Merit Scholarship";
        coverage = "100%";

    }

    else if (score >= 90) {

        scholarship = "Academic Excellence Scholarship";
        coverage = "75%";

    }

    else if (score >= 85) {

        scholarship = "Achievement Scholarship";
        coverage = "50%";

    }

    if (income <= 5000000) {

        scholarship += " + Financial Aid";
    }

    result.style.display = "block";

    result.innerHTML = `

        <h2>${campus}</h2>

        <br>

        <h3>${scholarship}</h3>

        <p>

            Tuition Coverage:
            <strong>${coverage}</strong>

        </p>

        <br>

        <p>

            Average Score:
            <strong>${score}</strong>

        </p>

        <p>

            Monthly Income:
            <strong>
                Rp ${income.toLocaleString()}
            </strong>

        </p>

    `;
}