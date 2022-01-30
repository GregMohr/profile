const projectCards = [
  {image: "./images/tictactoe.png",
   imageAlt: "Tic Tac Toe image",
   title: "Tic Tac Toe",
   subtitle: "Game Logic",
   content: "The classic game and coding project",
   repository: "https://github.com/GregMohr/TicTacToe",
   btnLink: "https://gregmohr.github.io/TicTacToe",
   btnText: "Demo",
   btnActive: true},
  {image: "./images/pomodoro.png",
   imageAlt: "Pomodoro image",
   title: "Pomodoro Timer",
   subtitle: "Working w/Time",
   content: "Timer that counts in Pomodoro phases and rests",
   repository: "https://github.com/GregMohr/PomodoroTimer",
   btnLink: "https://gregmohr.github.io/PomodoroTimer",
   btnText: "Demo",
   btnActive: true},
  {image: "./images/wikiwindow.png",
   imageAlt: "WikiWindow image",
   title: "WikiWindow",
   subtitle: "Working w/APIs",
   content: "Timer that counts in Pomodoro phases and rests",
   repository: "https://github.com/GregMohr/WikiWindow",
   btnLink: "https://gregmohr.github.io/WikiWindow",
   btnText: "Demo",
   btnActive: true},
  {image: "./images/backgroundsnip.png",
   imageAlt: "Portfolio Site image",
   title: "Portfolio Site",
   subtitle: "Working w/Standards",
   content: "Currently HTML, CSS, Bootstrap and JavaScript",
   repository: "https://github.com/GregMohr/gregmohr.github.io",
   btnLink: "#!",
   btnText: "Changes",
   btnActive: false},
  {image: "./images/tracker.png",
   imageAlt: "Bug Tracker image",
   title: "Bug Tracker",
   subtitle: "Business needs",
   content: "Coming Soon...",
   repository: "#!",
   btnLink: "#!",
   btnText: "Demo",
   btnActive: false},
  {image: "./images/ecommerce.png",
   imageAlt: "Store Front image",
   title: "Store Front",
   subtitle: "Ecommerce",
   content: "Coming Soon...",
   repository: "#!",
   btnLink: "#!",
   btnText: "Demo",
   btnActive: false}
];

const createCard = (cardContent) => {
  const btnState = cardContent.btnActive ? "" : "disabled";
  return `
  <div class="card col-3 m-1">
    <div class="row">
      <div class="col-5">
        <img src="${cardContent.image}" class="card-img-top m-2" alt="${cardContent.imageAlt}"> 
      </div>
      <div class="card-body col-6 pt-2 ps-1 pe-3">
        <h5 class="card-title mb-1 bg-dark text-center">${cardContent.title}</h5>
        <h6 class="text-center">${cardContent.subtitle}</h6>
        <p class="card-text h-50 mb-2">${cardContent.content}</p>
        <div class="flex-row d-flex justify-content-between">
          <a href="${cardContent.repository}" class="card-link" target="_blank">Repository</a>
          <a href="${cardContent.btnLink}" class="btn btn-primary btn-sm me-2 ${btnState}" target="_blank">${cardContent.btnText}</a>
        </div>
      </div>
    </div>
  </div>
  `;
}

let allCards = "";

projectCards.forEach(cardContent => {
  const newCard = createCard(cardContent);
  console.log(newCard);
  allCards += newCard;
});

document.getElementById("cardRow").innerHTML = allCards;