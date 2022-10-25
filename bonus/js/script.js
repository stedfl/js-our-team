// **BONUS:**
// Aggiungere degli aggettivi (più di uno) che identifichino ogni persona e stamparli nella card

const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
    adjective: ["Smart", "Propositive"]
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
    adjective: ["Virtuous", "Talkative"]
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
    adjective: ["Cultured", "Smart", "Positive"]
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
    adjective: ["Propositive"]
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
    adjective: ["Positive", "Cultured", "Virtuous"]

  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
    adjective: ["Virtuous", "Talkative"]
  }
];

const row = document.querySelector(".row");
let output;

for (member of team) {
  output = `
  <div class="col py-5">
    <div class="card">
      <div class="image-container">
        <img src="./img/${member.image}" class="card-img-top" alt="${member.image}">
      </div>
      <div class="card-body text-center">
        <h2 class="card-name fw-bold">${member.name}</h2>
        <h3 class="card-role">${member.role}</h3>
  `;
  
  for (index in member.adjective) {
    let adjColorBadge;
    if (member.adjective[index] === "Smart") {
      adjColorBadge = "bg-warning";
    } else if (member.adjective[index] === "Propositive") {
      adjColorBadge = "bg-secondary";
    } else if (member.adjective[index] === "Positive") {
      adjColorBadge = "bg-primary";
    } else if (member.adjective[index] === "Cultured") {
      adjColorBadge = "bg-danger";
    } else if (member.adjective[index] === "Virtuous") {
      adjColorBadge = "bg-info";
    } else {
      adjColorBadge = "bg-success";
    }
    output += `
    <span class="badge ${adjColorBadge} sd-badge">${member.adjective[index]}</span>
    `;
  }
  output += `    
      </div>
    </div>
  </div>
  `;
  row.innerHTML += output;
}