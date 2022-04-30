// global declarations
const questions = {
  question1: {
    question: "Which of the following is a data type in javascript?",
    options: ["string", "div", "function", "actor"],
    answer: "string",
  },
  question2: {
    question: "Which of the following is an html element?",
    options: ["string", "div", "functions", "const"],
    answer: "div",
  },
  question3: {
    question: "Which of the following is used to declare aan id in CSS?",
    options: ["~", ".", "id:", "#"],
    answer: ".",
  },
};

//create the questions list
const questionsList = Object.keys(questions);
//time interval function variable
let timeInterval;
//dynamic variables
let questionIndex = 0;
let timerValue = 10 * questionsList.length;
let quizComplete = false;

// target the html elements
const startButton = document.getElementById("start-btn");
const main = document.getElementById("main");
const contentSection = document.getElementById("main-content");

const onLoad = () => {
  // initialise local storage
  // check if highscores exists in LS
  // if false then set highscores to empty array in LS
};

const removeStartSection = () => {
  //remove the start content section
  contentSection.remove();
};

const removeQuestionSection = () => {
  //target the section element
  const questionSection = document.getElementById("question-content");
  //remove the section containing the question
  questionSection.remove();
};

const startTimer = () => {
  console.log("start timer");

  // declare function to execute every 1 sec
  timeInterval = setInterval(function () {
    // decrement timer value
    timerValue -= 1;

    const timeValue = document.getElementById("time-span");
    timeValue.textContent = timerValue;

    console.log(timerValue);
    // if quizComplete is true then stop timer

    // check if timer reaches 0
    if (timerValue === 0) {
      //stop timer
      clearInterval(timeInterval);
      //render game over
      renderGameOver();
    }
    // if true render game over
  }, 1000); // setInterval of 1000ms (1s)
};

const validateAnswer = (event) => {
  //get the event target
  const target = event.target;
  // get answer clicked from user and get id
  const userAnswer = target.id;
  //target the result p
  const resultAnswer = document.getElementById("decision-result");
  // if incorrect subtract 5 seconds from timerValue
  // if incorrect render error alert with message and status
  // if correct render success alert with message and status
  // check if id exists
  if (userAnswer) {
    renderAlert("Well Done!", true);
  } else {
    renderAlert("Wrong Answer!", false);
  }

  //target the element containing the event listener
  const eventSection = document.getElementById("options");
  //stop the event listener for the question
  eventSection.removeEventListener("click", validateAnswer);

  // if question is not last question then increment question index and render next question
  questionIndex += 1;
  //if not last question
  if (questionIndex < questionsList.length) {
    // set timeout for 500ms and then go to next question
    const myTimeout = setTimeout(renderQuestionSection, 500);
  }

  // if question is last question set quizComplete to true and then render form
  if (questionIndex === questionsList.length) {
    //stop timer
    clearInterval(timeInterval);
    //render game over
    renderGameOver();
  }
};

const handleFormSubmit = () => {
  // get value from input
  // check if empty then render error alert with message and status
  // if not empty then create the score object
  // {
  //   fullName: "Bob Smith",
  //   score: 25
  // }
  // push score object to LS
  // render quizCompleteSection
};

const renderTimerSection = () => {
  // create timerSection
  const timerSection = document.createElement("section");
  // add class attribute
  timerSection.setAttribute("class", "timer-section");
  // add id attribute
  timerSection.setAttribute("id", "timer-section");
  main.append(timerSection);

  // create h2
  const h2 = document.createElement("h2");
  // add content to h2
  h2.textContent = "Timer";
  //append to timerSection
  timerSection.append(h2);

  // create div element
  const timerDiv = document.createElement("div");
  // add class attribute
  timerDiv.setAttribute("class", "timer");
  //append to timerSection
  timerSection.append(timerDiv);

  // create p element
  const paragraph = document.createElement("p");
  // add the text content
  paragraph.textContent = "Time remaining: ";
  //append to div
  timerDiv.append(paragraph);

  //create span
  const span = document.createElement("span");
  //add span attribute
  span.setAttribute("id", "time-span");
  // add the text content
  span.textContent = timerValue;
  //append to div
  paragraph.append(span);
};

const renderQuestionSection = () => {
  //delete previous question
  if (questionIndex > 0) {
    removeQuestionSection();
  }

  // create question section
  const questionSection = document.createElement("section");
  // add class attribute
  questionSection.setAttribute("class", "question-section");
  // add id attribute
  questionSection.setAttribute("id", "question-content");
  // append section to main
  main.append(questionSection);
  // create the question div
  const questionDiv = document.createElement("div");
  // add the attribute
  questionDiv.setAttribute("class", "question-section-question");
  //append to document
  questionSection.append(questionDiv);

  //create p element
  const questionP = document.createElement("p");
  //add the question value
  questionP.textContent = questions[questionsList[questionIndex]]["question"];
  //append to doc
  questionDiv.append(questionP);
  //create ul element
  const ul = document.createElement("ul");
  //set ul attribute
  ul.setAttribute("class", "quest-section-options");
  //set ul id attribute
  ul.setAttribute("id", "options");
  //append to document
  questionSection.append(ul);

  //create a var to target the object
  let targetObjectOptions = questions[questionsList[questionIndex]];

  //append question and render to document
  for (let i = 0; i < targetObjectOptions["options"].length; i += 1) {
    //create li element
    const li = document.createElement("li");
    //set li text
    li.textContent = targetObjectOptions["options"][i];
    //check if the correct answer
    if (targetObjectOptions["options"][i] === targetObjectOptions["answer"]) {
      li.setAttribute("id", "well-done");
    }
    //append to doc
    ul.append(li);
  }

  //target the options section
  const optionsSection = document.getElementById("options");
  //add question event listener
  optionsSection.addEventListener("click", validateAnswer);
};

const renderGameOver = () => {
  // use HTML as guide and build in JS
  // append section to main
  removeQuestionSection();
  console.log("game over");

  // create question section
  const responseSection = document.createElement("section");
  // add class attribute
  responseSection.setAttribute("class", "game-over");
  // add id attribute
  responseSection.setAttribute("id", "question-content");
  // append section to main
  main.append(responseSection);
  // create the response div
  const responseDiv = document.createElement("div");
  // add the attribute
  responseDiv.setAttribute("class", "game-over-response");
  //append to document
  responseSection.append(responseDiv);
  //create p element
  const responseP = document.createElement("p");
  //add the question value
  responseP.textContent = "GAME OVER!";
  //append to doc
  responseDiv.append(responseP);
  //create next page button
  const responseButton = document.createElement("button");
  //add the question value
  responseButton.textContent = "Continue to Form!";
  // add event listener
  responseButton.addEventListener("click", renderForm);
  //append to doc
  responseDiv.append(responseButton);
};

const renderAlert = (message, status) => {
  // create the decision div
  const decisionDiv = document.createElement("div");
  // add the attribute
  decisionDiv.setAttribute("class", "question-section-decision");

  //create p element
  const decisionP = document.createElement("p");
  // add the attribute
  decisionP.setAttribute("id", "decision-result");

  //generate text
  decisionP.textContent = message;
  if (status) {
    //change text color
    decisionP.style.color = "#70e000";
  } else {
    //change text color
    decisionP.style.color = "#d00000";
    //decrement time value
    timerValue -= 5;
  }
  //append to document
  decisionDiv.append(decisionP);

  // append div to #question-content
  const qSection = document.getElementById("question-content");
  //append to document
  qSection.append(decisionDiv);

  // append div to #question-section
};

const renderForm = () => {
  //remove content section
  removeQuestionSection();
  //target the timer section
  const timerSection = document.getElementById("timer-section");
  //remove the element from doc
  timerSection.remove();
  // use HTML as guide and build in JS
  // append section to main
  // add submit event handler to form
};

const renderQuizCompleteSection = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const startQuiz = () => {
  // remove start section
  removeStartSection();

  // start timer
  startTimer();

  // render timer section
  renderTimerSection();

  // render question section
  renderQuestionSection();
};

// add document on load event listener
window.addEventListener("load", onLoad);
// add start button click event listener
startButton.addEventListener("click", startQuiz);
