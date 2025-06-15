const flashcards = [
  {
    question: "O que é JavaScript?",
    answer:
      "JavaScript é uma linguagem de programação interpretada e orientada a objetos, usada principalmente para adicionar interatividade e dinamismo a páginas web.",
  },
  {
    question: "O que são funções de callback em JavaScript?",
    answer:
      "São funções passadas como argumento para outra função, que serão executadas após um determinado evento ou operação.",
  },
  {
    question: "O que é o this em JavaScript?",
    answer:
      "this se refere ao contexto de execução atual. Seu valor varia dependendo de como a função é chamada.",
  },
  {
    question: "O que é hoisting em JavaScript?",
    answer:
      'Hoisting é o comportamento em que declarações de variáveis e funções são "movidas" para o topo do escopo durante a fase de compilação. Isso faz com que seja possível usar uma função antes de sua definição no código.',
  },
  {
    question: "O que são tipos primitivos em JavaScript?",
    answer:
      "Os tipos primitivos em JavaScript são: String, Number, Boolean, Null, Undefined, BigInt e Symbol. Eles representam valores imutáveis e não são objetos.",
  },
];

const questionCard = document.querySelector(".question-card");
const nextBtn = document.querySelector(".next-btn");
const actualQuestion = document.querySelector(".actual");
const totalQuestion = document.querySelector(".total");

let currentIndex = 0;
let showingAnswer = false;

totalQuestion.textContent = flashcards.length;

function renderCard() {
  const currentItem = flashcards[currentIndex];
  questionCard.textContent = showingAnswer
    ? currentItem.answer
    : currentItem.question;
  actualQuestion.textContent = currentIndex + 1;
}

questionCard.addEventListener("click", () => {
  showingAnswer = !showingAnswer;
  questionCard.classList.toggle("show-answer");
  renderCard();
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < flashcards.length - 1) {
    currentIndex++;
    showingAnswer = false;
    questionCard.classList.remove("show-answer");
  } else {
    nextBtn.classList.add("disabled");
  }

  renderCard();
});

renderCard();
