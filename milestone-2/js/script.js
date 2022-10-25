// **MILESTONE 2:**
// Stampare le stesse informazioni su DOM sotto forma di stringhe

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

const list = document.querySelector(".member-list");
let output;

for (member of team) { 
  for  (k in member) {
    output = `
    <ul>
      <h2>Membro Team</h2>
      <li>${member.name}</li>
      <li>${member.role}</li>
      <li>${member.image}</li>
    </ul>
    `;
  }
  list.innerHTML += output;
}