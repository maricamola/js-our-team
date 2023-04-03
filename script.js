//Creo array con le info
const teamMembri = [
  {
    nome: 'Wayne barnette',
    ruolo: 'Founder & CEO',
    foto: '',
  },
  {
    nome: 'Angela Caroll',
    ruolo: 'Chied Editor',
    foto: '',
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: '',
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: '',
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: '',
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphin Designer',
    foto: '',
  }
]

const list = document.querySelector('ul');

//Stampo in console
for (let membro of teamMembri) {
  console.log(membro.nome, membro.ruolo, membro.foto);
}

//Stampo in pagina
for(let i in teamMembri){
  const singoloMembro = teamMembri[i]
  console.log(singoloMembro);

  // ciclo il singolo membro
  for(let key in singoloMembro){
    list.innerHTML += `
      <li>${singoloMembro[key]} </li>
    `
  }
  list.innerHTML += `
      <li> </li>
    `
}





