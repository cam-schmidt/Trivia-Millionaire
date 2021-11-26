let z ;

const startButton = document.getElementById('start-btn')
const title = document.getElementById('title')
const moneyContainer = document.getElementById('money-container')
const moneyBox = document.getElementById('money-list')
const questionContainer = document.getElementById('question-container')
const answerButtons = document.querySelectorAll('.answer-btn')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const restartButton = document.getElementById('restart-btn')
const nextButton = document.getElementById('next-btn')
const correctMsg = document.getElementById('correct-message')
const wrongMsg = document.getElementById('wrong-message')
const moneylistItemAmount = document.querySelectorAll('li')



let shuffledQuestions, currentQuestionIndex

//Money container array
const moneyArray = Array.prototype.slice.call(moneylistItemAmount);


// Money container highlight up and down
function highlightItems() {
  setTimeout(function(){ moneyArray[9].style.backgroundColor = "mediumblue"; }, 1000);
  setTimeout(function(){ moneyArray[9].style.backgroundColor = "inherit"; }, 1100);
  setTimeout(function(){ moneyArray[8].style.backgroundColor = "mediumblue"; }, 1200);
  setTimeout(function(){ moneyArray[8].style.backgroundColor = "inherit"; }, 1300);
  setTimeout(function(){ moneyArray[7].style.backgroundColor = "mediumblue"; }, 1400);
  setTimeout(function(){ moneyArray[7].style.backgroundColor = "inherit"; }, 1500);
  setTimeout(function(){ moneyArray[6].style.backgroundColor = "mediumblue"; }, 1600);
  setTimeout(function(){ moneyArray[6].style.backgroundColor = "inherit"; }, 1700);
  setTimeout(function(){ moneyArray[5].style.backgroundColor = "mediumblue"; }, 1800);
  setTimeout(function(){ moneyArray[5].style.backgroundColor = "inherit"; }, 1900);
  setTimeout(function(){ moneyArray[4].style.backgroundColor = "mediumblue"; }, 2000);
  setTimeout(function(){ moneyArray[4].style.backgroundColor = "inherit"; }, 2100);
  setTimeout(function(){ moneyArray[3].style.backgroundColor = "mediumblue"; }, 2200);
  setTimeout(function(){ moneyArray[3].style.backgroundColor = "inherit"; }, 2300);
  setTimeout(function(){ moneyArray[2].style.backgroundColor = "mediumblue"; }, 2400);
  setTimeout(function(){ moneyArray[2].style.backgroundColor = "inherit"; }, 2500);
  setTimeout(function(){ moneyArray[1].style.backgroundColor = "mediumblue"; }, 2600);
  setTimeout(function(){ moneyArray[1].style.backgroundColor = "inherit"; }, 2700);
  setTimeout(function(){ moneyArray[0].style.backgroundColor = "green"; }, 2800);
  setTimeout(function(){ moneyArray[0].style.backgroundColor = "inherit"; }, 3300);
  setTimeout(function(){ moneyArray[1].style.backgroundColor = "mediumblue"; }, 3400);
  setTimeout(function(){ moneyArray[1].style.backgroundColor = "inherit"; }, 3500);
  setTimeout(function(){ moneyArray[2].style.backgroundColor = "mediumblue"; }, 3600);
  setTimeout(function(){ moneyArray[2].style.backgroundColor = "inherit"; }, 3700);
  setTimeout(function(){ moneyArray[3].style.backgroundColor = "mediumblue"; }, 3800);
  setTimeout(function(){ moneyArray[3].style.backgroundColor = "inherit"; }, 3900);
  setTimeout(function(){ moneyArray[4].style.backgroundColor = "mediumblue"; }, 4000);
  setTimeout(function(){ moneyArray[4].style.backgroundColor = "inherit"; }, 4100);
  setTimeout(function(){ moneyArray[5].style.backgroundColor = "mediumblue"; }, 4200);
  setTimeout(function(){ moneyArray[5].style.backgroundColor = "inherit"; }, 4300);
  setTimeout(function(){ moneyArray[6].style.backgroundColor = "mediumblue"; }, 4400);
  setTimeout(function(){ moneyArray[6].style.backgroundColor = "inherit"; }, 4500);
  setTimeout(function(){ moneyArray[7].style.backgroundColor = "mediumblue"; }, 4600);
  setTimeout(function(){ moneyArray[7].style.backgroundColor = "inherit"; }, 4700);
  setTimeout(function(){ moneyArray[8].style.backgroundColor = "mediumblue"; }, 4800);
  setTimeout(function(){ moneyArray[8].style.backgroundColor = "inherit"; }, 4900);
  setTimeout(function(){ moneyArray[9].style.backgroundColor = "mediumblue"; }, 5000);
}

// delay displaying question and answer buttons until after money container animation
function delayQuestion() {
  setTimeout(function(){ questionContainer.style.animation ="fadein 2s" }, 6000);
  setTimeout(function(){ questionContainer.style.display ="block" }, 6200);
}

// after play button is clicked, display money container, hide title and start button
// begin animation and invoke delay function
startButton.addEventListener("click", function() {
  moneyContainer.style.display = "block";
  title.style.display = "none";
  startButton.style.display = "none";
  highlightItems();
  delayQuestion();
  displayQuestion();
})

//display questions
function displayQuestion(question) {
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0
  setNextQuestion();
}

// display next set of questions
function setNextQuestion(){
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}


//change inner text of questions and select answers
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
      z = true;
    } else if(!answer.correct){
      z = false;
    }
    button.addEventListener("click", selectAnswer)
    setTimeout(function(){
      answerButtonsElement.appendChild(button)
    }, 9050);
  });
}

function resetState() {
  clearStatusClass(document.body)
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}


// select the answer
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
}

// set correct and wrong classes
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (z) {
    element.classList.add('correct')
    setTimeout(function(){ moneyArray[9].style.backgroundColor = "green"; }, 1850);
    setTimeout(function(){ answerButtonsElement.style.display ="none"; }, 5000);
    setTimeout(function(){ questionContainer.style.display ="none"; }, 5000);
    setTimeout(function(){ correctMsg.style.display ="block"; }, 5000);
    setTimeout(function(){ nextButton.style.display ="block"; }, 5200);
    nextButton.addEventListener('click', ()  =>{
      nextButton.style.display ="none";
      correctMsg.style.display ="none";
      setTimeout(function(){ questionContainer.style.animation ="fadein .5s" }, 100);
      setTimeout(function(){ questionContainer.style.display ="block" }, 600);
      setTimeout(function(){ displayQuestion(); }, 600)
        })
  } else {
    element.classList.add('wrong')
    setTimeout(function(){ moneyArray[9].style.backgroundColor = "crimson"; }, 1850);
    setTimeout(function(){ answerButtonsElement.style.display ="none"; }, 5000);
    setTimeout(function(){ questionContainer.style.display ="none"; }, 5000);
    setTimeout(function(){ wrongMsg.style.display ="block"; }, 5000);
    setTimeout(function(){ restartButton.style.display ="block"; }, 5000);
    restartButton.addEventListener('click', ()  =>{
        location.reload();
      })
  }
}


// clear correct and wrong classlists
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


//game questions and corresponding answers
const questions = [
  {
    question: 'Which author wrote the "Winnie-the-Pooh books"?',
    answers: [
      { text: 'A. A. Milne', correct: true },
      { text: 'Roald Dahl', correct: false },
      { text: 'Arthur Conan Doyle', correct: false },
      { text: 'Christopher Watson', correct: false }
    ]
  },
  {
    question: 'According to Greek mythology, who was the first woman on Earth?',
    answers: [
      { text: 'Eve', correct: false },
      { text: 'Pandora', correct: true },
      { text: 'Psyche', correct: false },
      { text: 'Venus', correct: false }
    ]
  },
  {
    question: 'How many homicides did Ted Bundy admit to?',
    answers: [
      { text: '30', correct: true },
      { text: '28', correct: false },
      { text: '14', correct: false },
      { text: '22', correct: false },
    ]
  },
  {
    question: 'Which U.S. president was involved in the Watergate scandal',
    answers: [
      { text: 'George H. W. Bush', correct: false },
      { text: 'George W. Bush', correct: false },
      { text: 'Richard Nixon', correct: true },
      { text: 'Bill Clinton', correct: false }
    ]
  },
  {
    question: 'The Roman God of War inspired the name of which planet?',
    answers: [
      { text: 'Venus', correct: false },
      { text: 'Mercury', correct: false },
      { text: 'Neptune', correct: false },
      { text: 'Mars', correct: true }
    ]
  },
  {
    question: 'Meteorology is the study of what?',
    answers: [
      { text: 'Weather', correct: true },
      { text: 'Meteorites', correct: false },
      { text: 'Space', correct: false },
      { text: 'Ancient artificats', correct: false }
    ]
  },
  {
    question: `What was Twitter's original name?`,
    answers: [
      { text: 'tweeter', correct: false },
      { text: 'tweet tweet', correct: false },
      { text: 'twttr', correct: true },
      { text: 'snapchat', correct: false }
    ]
  },
  {
    question: 'Which country consumes the most chocolate per capita?',
    answers: [
      { text: 'United States', correct: false },
      { text: 'Sweden', correct: false },
      { text: 'Switzerland', correct: true },
      { text: 'Belgium', correct: false }
    ]
  },
  {
    question: 'What animal can be seen on the Porsche logo?',
    answers: [
      { text: 'Horse', correct: true },
      { text: 'Lion', correct: false },
      { text: 'Jaguar', correct: false },
      { text: 'Cheetah', correct: false }
    ]
  },
  {
    question: 'How many NBA championships did Michael Jordan win while playing for the Chicago Bulls?',
    answers: [
      { text: '7', correct: false },
      { text: '6', correct: true },
      { text: '5', correct: false },
      { text: '3', correct: false }
    ]
  },
  {
    question: 'What year was Walt Disney born?',
    answers: [
      { text: '1898', correct: false },
      { text: '1922', correct: false },
      { text: '1901', correct: true },
      { text: '1946', correct: false }
    ]
  },
  {
    question: 'What country did AC/DC originate in?',
    answers: [
      { text: 'Australia', correct: true },
      { text: 'United States', correct: false },
      { text: 'Canada', correct: false },
      { text: 'United Kingdom', correct: false }
    ]
  },
  {
    question: 'How many bones do sharks have in their bodies?',
    answers: [
      { text: '220', correct: false },
      { text: '142', correct: false },
      { text: '236', correct: false },
      { text: '0', correct: true }
    ]
  },
  {
    question: `What is the world's largest ocean?`,
    answers: [
      { text: 'Pacific', correct: true },
      { text: 'Atlantic', correct: false },
      { text: 'Indian', correct: false },
      { text: 'Arctic', correct: false }
    ]
  },
  {
    question: 'How many phases of the moon are there?',
    answers: [
      { text: 'Four', correct: false },
      { text: 'Six', correct: false },
      { text: 'Five', correct: false },
      { text: 'Eight', correct: true }
    ]
  },
  {
    question: 'Groups of lions are called what?',
    answers: [
      { text: 'Herds', correct: false },
      { text: 'Schools', correct: false },
      { text: 'Prides', correct: true },
      { text: 'Coalitions', correct: false }
    ]
  },
  {
    question: 'Which country invented tea?',
    answers: [
      { text: 'China', correct: true },
      { text: 'Japan', correct: false },
      { text: 'Taiwan', correct: false },
      { text: 'Thailand', correct: false }
    ]
  },
  {
    question: 'Hg is the chemical symbol of which element?',
    answers: [
      { text: 'Sodium', correct: false },
      { text: 'Mercury', correct: true },
      { text: 'Calcium', correct: false },
      { text: 'Hydrogen', correct: false }
    ]
  },
  {
    question: 'What was the first ever "pop" music video, released in 1975?',
    answers: [
      { text: 'Bohemian Rhapsody - Queen', correct: true },
      { text: 'Please Mr.Postman - The Marvelettes', correct: false },
      { text: 'Beat it - Michael Jackson', correct: false },
      { text: 'Philidephia Freedom - Elton John', correct: false }
    ]
  },
  {
    question: 'In what type of matter are atoms most tightly packed?',
    answers: [
      { text: 'Solids', correct: true },
      { text: 'Liquids', correct: false },
      { text: 'Antimatter', correct: false },
      { text: 'Gasses', correct: false }
    ]
  },
  {
    question: "What is the most populated city in South America, with an estimated 11 million inhabitants?",
    answers: [
      { text: 'Brasilia', correct: false },
      { text: 'Sao Paulo', correct: true },
      { text: 'Rio De Janeiro', correct: false },
      { text: 'Mexico City', correct: false }
    ]
  },
  {
    question: "Which basketball player is featured on the NBA's logo?",
    answers: [
      { text: 'Kobe Bryant', correct: false },
      { text: 'Jerry West', correct: true },
      { text: 'Michael Jordan', correct: false },
      { text: 'Wilt Chamberlain', correct: false }
    ]
  },
  {
    question: 'On average, what is the largest meat-eating land mammal?',
    answers: [
      { text: 'Grizzly Bear', correct: false },
      { text: 'Polar Bear', correct: true },
      { text: 'Hippopotamus', correct: false },
      { text: 'Rhinoceros', correct: false }
    ]
  },
  {
    question: "Wine flavoured with aromatic herbs and spices is known as what?",
    answers: [
      { text: 'Sangria', correct: false },
      { text: 'Mead', correct: false },
      { text: 'Vermouth', correct: true },
      { text: 'Port', correct: false }
    ]
  },
  {
    question: 'What were the Ten Commandments written on?',
    answers: [
      { text: 'Sand', correct: false },
      { text: 'Stone', correct: true },
      { text: 'The golden calf', correct: false },
      { text: 'Wood', correct: false }
    ]
  },
  {
    question: 'What is the highest grossing movie of all-time?',
    answers: [
      { text: 'Avengers: Endgame (2019)', correct: false },
      { text: 'Frozen 2 (2019)', correct: false },
      { text: 'Avengers: Infinity War (2018)', correct: false },
      { text: 'Avatar (2009)', correct: true }
    ]
  },
  {
    question: `"Dump", "Floater", and "Wipe" are terms commonly used in which team sport?`,
    answers: [
      { text: 'Water Polo', correct: false },
      { text: 'Volleyball', correct: true },
      { text: 'Badminton', correct: false },
      { text: 'Lacrosse', correct: false }
    ]
  },
  {
    question: `"Cynophobia" is a fear of what?`,
    answers: [
      { text: 'Fear of dogs', correct: true },
      { text: 'Fear of being poisoned', correct: false },
      { text: 'Fear of the cold', correct: false },
      { text: 'Fear of confined or crowded spaces', correct: false }
    ]
  }
]
