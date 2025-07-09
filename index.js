const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: 2,
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "HTML", "Java", "C++"],
    answer: 1,
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
      "Jane Austen",
    ],
    answer: 1,
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 2,
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "India"],
    answer: 1,
  },
];

const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    ".question ,#option_1,#option_2,#option_3,#option_4"
  );

const submitBtn = document.querySelector("#submmit");
const quiz = document.querySelector("#quiz");
const timer = document.querySelector(".timer");
const time = document.querySelector("#time");

let currentQuiz = 0;
let score = 0;
let timerinterval;
let timeLeft = 30;



const loadQuiz = () => {
  startTimer();
  const { question, options } = quizData[currentQuiz];
  questionElm.innerText = `${currentQuiz + 1} : ${question}`;
  // console.log(question);
  // console.log(options);
  options.forEach(
    (currentOption, index) =>
      (window[`option_${index + 1}`].innerText = currentOption)
  );
};
loadQuiz();

const GetSelectedOption = () => {
  let ans_index;
  answerElm.forEach((currentOption, index) => {
    if (currentOption.checked) {
      ans_index = index;
    }
    currentOption.checked = false;
  });
  return ans_index;
};

submitBtn.addEventListener("click", () => {
  const selectedOptionIndex = GetSelectedOption();
  console.log(selectedOptionIndex);

  if (selectedOptionIndex === quizData[currentQuiz].answer) {
    score = score + 1;
  }
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    //console.log(currentQuiz);
    loadQuiz();
  } else {
    quiz.innerHTML = `<div class="result">
       <h2>your score is :${score}/${quizData.length}</h2>
       <p>congratulations on complition of quiz</p>
       <button class="reloadbtn" onclick="location.reload()"> playAgain </button>       `;
  }
});
