const quizData = [
  {
    question: 'How many time zones are there in Russia?',
    a: '10',
    b: '11',
    c: '12',
    d: '13',
    correct: 'b',
  },
  {
    question: 'Which state produces maximum soybean?',
    a: 'Madhya Pradesh',
    b: 'Uttar Pradesh',
    c: 'Bihar',
    d: ' Rajasthan',
    correct: 'a',
  },
  {
    question:
      'Which one among the following radiations carries maximum energy?',
    a: ' Ultraviolet rays',
    b: ' Gamma rays',
    c: ' X- rays',
    d: ' Infra-red rays',
    correct: 'b',
  },
  {
    question: 'Which country operationalized world’s largest radio telescope?',
    a: 'USA',
    b: ' China',
    c: 'Russia',
    d: 'India',
    correct: 'b',
  },
  {
    question:
      'What is India’s rank on the WEF’s Global Social Mobility Index 2020?',
    a: '75th Rank',
    b: '77th Rank',
    c: '76th Rank',
    d: '78th Rank',
    correct: 'c',
  },
  {
    question: 'The 2014 football world cup is scheduled to be held in',
    a: 'USA',
    b: ' China',
    c: 'Russia',
    d: 'Brazil',
    correct: 'd',
  },
  {
    question: 'Entomology studies what?',
    a: 'Behavior of human beings',
    b: 'Insects',
    c: 'The origin and history of technical and scientific terms',
    d: ' The formation of rocks',
    correct: 'b',
  },
  {
    question: 'The metal whose salts are sensitive to light is',
    a: ' Silver',
    b: 'Zinc',
    c: 'Copper ',
    d: 'Gold',
    correct: 'a',
  },
  {
    question: 'The instrument useful for measuring curvature of surface is',
    a: 'Odometer',
    b: 'Spherometer',
    c: 'Tachometer ',
    d: 'Speedometer',
    correct: 'b',
  },
  {
    question: 'Which is the largest coffee producing state of India?',
    a: 'Kerala',
    b: 'Tamil Nadu',
    c: ' Karnataka ',
    d: ' Arunachal Pradesh',
    correct: 'c',
  },
]

const quiz = document.getElementById('quiz')
const questionEl = document.getElementById('question')
const answerEl = document.querySelectorAll('.answer')
const a_text = document.getElementById('a-text')
const b_text = document.getElementById('b-text')
const c_text = document.getElementById('c-text')
const d_text = document.getElementById('d-text')

const submitBtn = document.getElementById('submit')

let currentQuestion = 0
let score = 0
loadQuiz()

function loadQuiz() {
  deSelectAnswer()
  const currentQuizData = quizData[currentQuestion]

  questionEl.innerText = currentQuizData.question

  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function getSelected() {
  let answer = undefined

  answerEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

function deSelectAnswer() {
  answerEl.forEach((answerEl) => {
    answerEl.checked = false
  })
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++
    }
    currentQuestion++
    if (currentQuestion < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `<h2> You have socred: ${score}/${quizData.length}</h2> <button onClick="window.location.reload();">Reload</button>`
    }
  }
})
