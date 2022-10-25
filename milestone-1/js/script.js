// **MILESTONE 1:**
// Stampare su console le informazioni di nome, ruolo e la stringa della foto

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

// STAMPA DI TUTTI GLI OGGETTI CHE COMPONGONO L'ARRAY TEAM
console.log("___________ciclo for in___________");
for (member in team) {
  console.log(team[member]);
}

console.log("___________ciclo for of___________");
for (member of team) {
  console.log(member);
}

// STAMPA DELL'ELENCO DELLE PROPRIETA' DI OGNI OGGETTO CHE COMPONE L'ARRAY TEAM
for (member of team) {
  console.log("_______Membro del Team__________")
  for  (k in member) {
    console.log(k + ": " + member[k]);
  }
}