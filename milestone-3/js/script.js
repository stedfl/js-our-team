const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg"
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg"
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg"
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg"
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg"
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg"
  }
];

const row = document.querySelector(".row");
let output;

for (member of team) {
  for (k in member) {
    output = `
    <div class="col py-5">
      <div class="card">
        <div class="image-container">
          <img src="./img/${member.image}" class="card-img-top" alt="${member.image}">
        </div>
        <div class="card-body text-center">
          <h2 class="card-name fw-bold">${member.name}</h2>
          <h3 class="card-role">${member.role}</h3>
        </div>
      </div>
    </div>
    `;
  }
  row.innerHTML += output;
}

for (member of team) {
  for (k in member) {
    console.log(member[k] + member.name)
  }
}

