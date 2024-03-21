/*
©️ 2024
Tiago & Vitor - ReTech
*/

const quizData = [
  {
    question:
      "De que são feitas as baterias atualmente, nos dispositivos eletrónicos ?",
    a: "Níquel",
    b: "Metal",
    c: "Chumbo",
    d: "Lítio",
    correct: "d",
  },
  {
    question: "Qual o maior problema nos veículos elétricos atualmente ?",
    a: "Não têm motores a combustão que soltam pipocos.",
    b: "A energia usada para os carregar provém por vezes de combustíveis fósseis.",
    c: "São movidos a carvão.",
    d: "São em grande parte feito de metal, um material radioativo que causa envenenamento.",
    correct: "b",
  },
  {
    question: "Como podemos prolongar a vida de dispositivos eletónicos ?",
    a: 'Optar por dispositivos modulares, para que possamos trocar as peças que estejam com mau funcionamento ou "foras de data"',
    b: "Dar de comer ao cão do vizinho que me ladra todos os dias ás 9 e 35 da manhã.",
    c: "Optar por dispositivos não modulares, para que complique a vida ao técnico que o possa vir a arranjar.",
    d: "Queimar com gasolina aditivada da Repsol.",
    correct: "a",
  },
  {
    question: "Qual o mito comummente associado a baterias ?",
    a: "Que são feitas de lítio.",
    b: 'Que estas "viciam" com o tempo.',
    c: "Estas são provenientes de trabalho escravo.",
    d: "Sabem a veneno de rato (não coloques baterias na boca :)",
    correct: "b",
  },
  {
    question:
      "Que podemos fazer para diminuir a poluição, tendo em conta o tema do Questionário ?",
    a: "Optar por energias verdes, isto é, provenientes de painéis solares, eólicas, etc.",
    b: "Usar lamparinas de azeite.",
    c: "Usar geradores a gasolina.",
    d: 'Comprar um carro a gasóleo e meter "linha direta". ',
    correct: "a",
  },
  {
    question: "Qual destas opções é uma consequência da extração do Lítio?",
    a: "Impossibilidade de o vender ao meu colega por um preço extraordinário.",
    b: "Vista urbana desagradável, devido ás minas de extração do minério.",
    c: "Vista urbana agradável, devido ás consequências derivadas das últimas eleiçoes realizadas.",
    d: "Não sei.",
    correct: "b",
  },
  {
    question: "Onde se encontram as maiores minas de Lítio ?",
    a: "No Chile.",
    b: "No meu quintal.",
    c: "Na Angola.",
    d: "Nos Estados Unidos da América.",
    correct: "a",
  },
  {
    question:
      "Qual é a fabricante de carros elétricos mais famosa atualmente ?",
    a: "SpaceX.",
    b: "Tesla.",
    c: "Koenigsegg.",
    d: "BMW.",
    correct: "b",
  },
  {
    question: "Qual a diferença entre uma bateria Li-Po e Li-Ion ?",
    a: "As baterias Li-Ion conseguem guardar mais energia do que as baterias Li-Po.",
    b: "As baterias Li-Ion conseguem guardar mais energia num espaço menor.",
    c: "As baterias Li-Po conseguem guardar mais energia num espaço maior.",
    d: "As baterias Li-Po conseguem guardar mais energia num espaço menor",
    correct: "d",
  },
  {
    question: "Qual a vantagem de usar energias renováveis ?",
    a: "Posso usar, esquecer-me de que existe e voltar a usar quando me lembrar.",
    b: "Prolongamento da vida na Terra e desenvolvimento sustentável.",
    c: "Nenhuma, o meta é andar de jato privado.",
    d: "Esta alínea está aqui só para encher chouriços (agora já sabes que só há 3 alíneas válidas).",
    correct: "b",
  },
];
const quiz = document.querySelector("#quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector("#question");
const submitBtn = document.querySelector("#enviar");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answer) => (answer.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function showResults() {
  quiz.innerHTML = `
    <h2>Acertastes ${score}/${quizData.length} perguntas.</h2>
    <button onclick="location.reload()">Recarregar quiz?</button>
  `;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
  }

  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    showResults();
  }
});
