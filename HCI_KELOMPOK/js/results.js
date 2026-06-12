const student =
JSON.parse(
localStorage.getItem(
"studentScores"
)
);

if(!student){

    window.location.href =
    "career-match.html";

}

/* ==========================
   SUBJECT SCORES
========================== */

const biology =
student.biology;

const chemistry =
student.chemistry;

const physics =
student.physics;

const math =
student.math;

const english =
student.english;

const economics =
student.economics;

const interests =
student.interests || [];

const goal =
student.careerGoal || "";

/* ==========================
   MAJOR CALCULATIONS
========================== */

let medicine =
(biology * 0.4) +
(chemistry * 0.35) +
(english * 0.25);

let engineering =
(math * 0.45) +
(physics * 0.40) +
(english * 0.15);

let computerScience =
(math * 0.45) +
(english * 0.25) +
(physics * 0.30);

let business =
(economics * 0.50) +
(math * 0.25) +
(english * 0.25);

let law =
(english * 0.50) +
(economics * 0.30) +
(math * 0.20);

/* ==========================
   INTEREST BOOSTS
========================== */

if(interests.includes("Healthcare"))
medicine += 10;

if(interests.includes("Technology"))
computerScience += 10;

if(interests.includes("Engineering"))
engineering += 10;

if(interests.includes("Business"))
business += 10;

if(interests.includes("Law"))
law += 10;

/* ==========================
   CAREER GOAL BOOSTS
========================== */

if(goal === "Doctor")
medicine += 15;

if(goal === "Engineer")
engineering += 15;

if(goal === "Programmer")
computerScience += 15;

if(goal === "Entrepreneur")
business += 15;

if(goal === "Lawyer")
law += 15;

/* ==========================
   RESULTS ARRAY
========================== */

const majors = [

{
name:"Medicine",
score:Math.min(
100,
Math.round(medicine)
)
},

{
name:"Engineering",
score:Math.min(
100,
Math.round(engineering)
)
},

{
name:"Computer Science",
score:Math.min(
100,
Math.round(computerScience)
)
},

{
name:"Business",
score:Math.min(
100,
Math.round(business)
)
},

{
name:"Law",
score:Math.min(
100,
Math.round(law)
)
}

];

majors.sort(
(a,b)=>b.score-a.score
);

/* ==========================
   PROFILE CARD
========================== */

document
.getElementById(
"studentProfile"
)
.innerHTML = `

<div class="card-content">

<h2>

Student Profile

</h2>

<br>

<p>

<strong>Career Goal:</strong>

${goal}

</p>

<br>

<p>

<strong>Interests:</strong>

${interests.join(", ")}

</p>

</div>

`;

/* ==========================
   MAJOR CARDS
========================== */

const majorContainer =
document.getElementById(
"majorResults"
);

majors.slice(0,3)
.forEach((major,index)=>{

let medal = "";

if(index===0)
medal = "🥇";

if(index===1)
medal = "🥈";

if(index===2)
medal = "🥉";

majorContainer.innerHTML += `

<div class="campus-card">

<div class="card-content">

<h2>

${medal}
${major.name}

</h2>

<br>

<h3>

${major.score}% Match

</h3>

<br>

<p>

Excellent compatibility
based on your profile.

</p>

</div>

</div>

`;

});

/* ==========================
   UNIVERSITY MATCHES
========================== */

const bestMajor =
majors[0].name;

const uniContainer =
document.getElementById(
"universityResults"
);

let universities = [];

if(bestMajor==="Medicine"){

universities = [

{
name:"Universitas Indonesia",
location:"Depok"
},

{
name:"Universitas Airlangga",
location:"Surabaya"
},

{
name:"Universitas Gadjah Mada",
location:"Yogyakarta"
}

];

}

if(bestMajor==="Engineering"){

universities = [

{
name:"Institut Teknologi Bandung",
location:"Bandung"
},

{
name:"Universitas Indonesia",
location:"Depok"
},

{
name:"Universitas Gadjah Mada",
location:"Yogyakarta"
}

];

}

if(bestMajor==="Computer Science"){

universities = [

{
name:"Binus University",
location:"Jakarta"
},

{
name:"Institut Teknologi Bandung",
location:"Bandung"
},

{
name:"Universitas Indonesia",
location:"Depok"
}

];

}

if(bestMajor==="Business"){

universities = [

{
name:"Prasetiya Mulya",
location:"Jakarta"
},

{
name:"Binus University",
location:"Jakarta"
},

{
name:"Universitas Indonesia",
location:"Depok"
}

];

}

if(bestMajor==="Law"){

universities = [

{
name:"Universitas Indonesia",
location:"Depok"
},

{
name:"Universitas Gadjah Mada",
location:"Yogyakarta"
},

{
name:"Universitas Airlangga",
location:"Surabaya"
}

];

}

universities.forEach((uni)=>{

uniContainer.innerHTML += `

<div class="campus-card">

<div class="card-content">

<h2>

${uni.name}

</h2>

<br>

<p>

📍 ${uni.location}

</p>

<br>

<p>

Recommended for
${bestMajor} students.

</p>

</div>

</div>

`;

});