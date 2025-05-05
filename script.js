const matchContainer = document.getElementById("match-container");
const roundTitle = document.getElementById("round-title");

let players = [
  {
    id: 1,
    nombre: "Pietro Parolin",
    edad: 70,
    nacionalidad: "Italia",
    imagen: "https://i.postimg.cc/vTNBGNCX/pietro.jpg"
  },
  {
    id: 2,
    nombre: "Luis Antonio Tagle",
    edad: 67,
    nacionalidad: "Filipinas",
    imagen: "https://i.postimg.cc/P5ZxkKyz/Luis-Antonio-Tagle-in-2016.png"
  },
  {
    id: 3,
    nombre: "Matteo Zuppi",
    edad: 68,
    nacionalidad: "Italia",
    imagen: "https://i.postimg.cc/RhNSpTqt/matteo-maria-zuppi-gsc1.webp"
  },
  {
    id: 4,
    nombre: "Pierbattista Pizzaballa",
    edad: 60,
    nacionalidad: "Italia",
    imagen: "https://i.postimg.cc/HjDq00Md/Pierbattista-Pizzaballa.jpg"
  },
  {
    id: 5,
    nombre: "Jean-Marc Aveline",
    edad: 66,
    nacionalidad: "Francia",
    imagen: "https://i.postimg.cc/dQ2cvpc0/Jean-Marc-Aveline.jpg"
  },
  {
    id: 6,
    nombre: "Mario Grech",
    edad: 68,
    nacionalidad: "Malta",
    imagen: "https://i.postimg.cc/bNwCMBzW/Mario-Grech.jpg"
  },
  {
    id: 7,
    nombre: "Péter Erdő",
    edad: 72,
    nacionalidad: "Hungría",
    imagen: "https://i.postimg.cc/c4v7fy1x/P-ter-Erd.jpg"
  },
  {
    id: 8,
    nombre: " Fridolin Ambongo Besungu",
    edad: 65,
    nacionalidad: "Congo",
    imagen: "https://i.postimg.cc/L4c3S4Fc/Congo.jpg"
  },
  {
    id: 9,
    nombre: "Jean-Claude Hollerich",
    edad: 66,
    nacionalidad: "Luxemburgo",
    imagen: "https://i.postimg.cc/Nfx9nQs7/Jean-Claude-Hollerich.jpg"
  },
  {
    id: 10,
    nombre: "Mario Poli",
    edad: 77,
    nacionalidad: "Argentino",
    imagen: "https://i.postimg.cc/t4x0T4sF/Mario-Poli.jpg"
  },
  {
    id: 11,
    nombre: "Víctor Manuel Fernández",
    edad: 63,
    nacionalidad: "Argentino",
    imagen: "https://i.postimg.cc/8kxgVv5T/V-ctor-Manuel-Fern-ndez.jpg"
  },
  {
    id: 12,
    nombre: "José Tolentino de Mendonça",
    edad: 33,
    nacionalidad: "Países Bajos",
    imagen: "https://i.postimg.cc/CLCP6nnP/Jos-Tolentino-de-Mendon-a.webp"
  },
  {
    id: 13,
    nombre: "Marc Ouellet",
    edad: 80,
    nacionalidad: "Canadá",
    imagen: "https://i.postimg.cc/zBm2cC7Q/Marc-Ouellet.jpg"
  },
  {
    id: 14,
    nombre: "Peter Turkson",
    edad: 76,
    nacionalidad: "Ghana",
    imagen: "https://i.postimg.cc/SxvWZmd1/Peter-Turkson.jpg"
  },
  {
    id: 15,
    nombre: "Reinhard Marx",
    edad: 71,
    nacionalidad: "Alemania",
    imagen: "https://i.postimg.cc/fLZkCPGg/Reinhard-Marx.jpg"
  },
  {
    id: 16,
    nombre: "Christoph Schönborn",
    edad: 80,
    nacionalidad: "Austria",
    imagen: "https://i.postimg.cc/prmvJYL6/Christoph-Sch-nborn.jpg"
  }
];

let winners = [];
let currentMatchIndex = 0;
let roundNumber = 1;

function updateRoundTitle(count) {
  const titles = {
    16: "Ronda de Cónclave",
    8: "Cuartos de final",
    4: "Semifinal",
    2: "Final"
  };
  roundTitle.textContent = titles[count] || "Ganador";
}

function renderMatch() {
  matchContainer.innerHTML = "";

  if (currentMatchIndex >= players.length) {
    // Fin de ronda
    if (winners.length === 1) {
      showWinner(winners[0]);
    } else {
      players = [...winners];
      winners = [];
      currentMatchIndex = 0;
      roundNumber++;
      updateRoundTitle(players.length);
      renderMatch();
    }
    return;
  }

  const player1 = players[currentMatchIndex];
  const player2 = players[currentMatchIndex + 1];

  const card1 = createCard(player1);
  const card2 = createCard(player2);

  matchContainer.appendChild(card1);
  matchContainer.appendChild(card2);
}

function createCard(player) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${player.imagen}" alt="${player.nombre}">
    <h3>${player.nombre}</h3>
    <p>Edad: ${player.edad}</p>
    <p>Nacionalidad: ${player.nacionalidad}</p>
    <button>Elegir</button>
  `;

  const button = card.querySelector("button");
  button.onclick = () => {
    winners.push(player);
    currentMatchIndex += 2;
    renderMatch();
  };

  return card;
}

function showWinner(player) {
  roundTitle.textContent = "🏆 ¡Ganador!";
  matchContainer.innerHTML = `
    <div class="card" style="margin-top: 20px;">
      <img src="${player.imagen}" alt="${player.nombre}">
      <h3>${player.nombre}</h3>
      <p>Edad: ${player.edad}</p>
      <p>Nacionalidad: ${player.nacionalidad}</p>
      <h2 style="color: green; margin: 10px 0;">🎉 ¡Ganador absoluto!</h2>
    </div>
  `;
}

// Iniciar juego
updateRoundTitle(players.length);
renderMatch();
