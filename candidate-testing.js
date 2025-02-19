const { run } = require('jest');
const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', '3'];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (const question in questions) {
    candidateAnswers[question] = input.question(questions[question]);
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  let numCorrect = 0;
  let isCorrect = '';
  let userAnswer = [];
  let correctAnswer = []; 
  for (const answer in candidateAnswers) {
    userAnswer = candidateAnswers[answer];
    correctAnswer = correctAnswers[answer];
    isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase() ? "Correct!" : "Incorrect!";
    console.log(`${Number(answer) + 1}) ${questions[answer]}
    Your Answer: ${userAnswer}
    Correct Answer: ${correctAnswer}`);
    if (isCorrect === "Correct!") {
      numCorrect += 1;
    }
    // console.log(numCorrect);
  }

// `You answered ${userAnswer}, and the correct answer is ${correctAnswer}. You are ${isCorrect}`

  let grade = numCorrect / questions.length * 100;  //TODO 3.2 use this variable to calculate the candidates score.
  if (grade >= 80) {
    console.log(`Congratulations ${candidateName}! You have passed the quiz with a score of ${grade}%`);
  } else {
    console.log(`Sorry ${candidateName}, but your grade of ${grade}% is below the threshold to pass.`);
  }

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Hello, ${candidateName}`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}


// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};