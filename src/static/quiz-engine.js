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
    a: "Que s�o feitas de l�tio.",
    b: 'Que estas "viciam" com o tempo.',
    c: "Estas s�o provenientes de trabalho escravo.",
    d: "Sabem a veneno de rato (n�o coloques baterias na boca :)",
    correct: "b",
  },
  {
    question:
      "Que podemos fazer para diminuir a polui��o, tendo em conta o tema do Question�rio ?",
    a: "Optar por energias verdes, isto �, provenientes de pain�is solares, e�licas, etc.",
    b: "Usar lamparinas de azeite.",
    c: "Usar geradores a gasolina.",
    d: 'Comprar um carro a gas�leo e meter "linha direta". ',
    correct: "a",
  },
  {
    question: "Qual destas op��es � uma consequ�ncia da extra��o do L�tio?",
    a: "Impossibilidade de o vender ao meu colega por um pre�o extraordin�rio.",
    b: "Vista urbana desagrad�vel, devido �s minas de extra��o do min�rio.",
    c: "Vista urbana agrad�vel, devido �s consequ�ncias derivadas das �ltimas elei��es realizadas.",
    d: "N�o sei.",
    correct: "b",
  },
  {
    question: "Onde se encontram as maiores minas de L�tio ?",
    a: "No Chile.",
    b: "No meu quintal.",
    c: "Na Angola.",
    d: "Nos Estados Unidos da Am�rica.",
    correct: "a",
  },
  {
    question:
      "Qual � a fabricante de carros el�tricos mais famosa atualmente ?",
    a: "SpaceX.",
    b: "Tesla.",
    c: "Koenigsegg.",
    d: "BMW.",
    correct: "b",
  },
  {
    question: "Qual a diferen�a entre uma bateria Li-Po e Li-Ion ?",
    a: "As baterias Li-Ion conseguem guardar mais energia do que as baterias Li-Po.",
    b: "As baterias Li-Ion conseguem guardar mais energia num espa�o menor.",
    c: "As baterias Li-Po conseguem guardar mais energia num espa�o maior.",
    d: "As baterias Li-Po conseguem guardar mais energia num espa�o menor",
    correct: "d",
  },
  {
    question: "Qual a vantagem de usar energias renov�veis ?",
    a: "Posso usar, esquecer-me de que existe e voltar a usar quando me lembrar.",
    b: "Prolongamento da vida na Terra e desenvolvimento sustent�vel.",
    c: "Nenhuma, o meta � andar de jato privado.",
    d: "Esta al�nea est� aqui s� para encher chouri�os (agora j� sabes que s� h� 3 al�neas v�lidas).",
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
  quiz.innerText = `
    <h2>You answered correctly at ${score}/${quizData.length} questions</h2>
    <button onclick="location.reload()">Reload</button>
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
