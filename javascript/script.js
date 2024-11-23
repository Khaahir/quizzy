
let quizheader = document.querySelector(".quiz-name");
let annswerBtn1 = document.querySelector(".answer1");
let annswerBtn2 = document.querySelector(".answer2");
let annswerBtn3 = document.querySelector(".answer3");
let annswerBtn4 = document.querySelector(".answer4");
let questionbox = document.querySelector(".question-box");

quizheader.innerText = "Lord of the Rings Quiz";
let points = 0; 


const questionOne = () => {
    questionbox.value = "Vad heter Gandalfs häst?";
    annswerBtn1.innerText = "a) Shadowmere";
    annswerBtn2.innerText = "b) Shadowfax";
    annswerBtn3.innerText = "c) Asfaloth";
    annswerBtn4.innerText = "d) Bill";
};

const questionTwo = () => {
    questionbox.value = "Vilket datum lämnar Frodo Fylke med ringen?";
    annswerBtn1.innerText = "a) 22 september";
    annswerBtn2.innerText = "b) 25 december";
    annswerBtn3.innerText = "c) 1 januari";
    annswerBtn4.innerText = "d) 29 februari";
};

const questionthree = () => {
    questionbox.value = "Vad är Legolas fullständiga namn?";
    annswerBtn1.innerText = "a) Legolas Thranduilion";
    annswerBtn2.innerText = "b) Legolas Greenleaf";
    annswerBtn3.innerText = "c) Legolas Elensar";
    annswerBtn4.innerText = "d) Legolas Mithrandir";
};

const questionfour = () => {
    questionbox.value = "Vilken av dessa är inte en av de tre alvringarna?";
    annswerBtn1.innerText = "a) Vilya";
    annswerBtn2.innerText = "b) Narya";
    annswerBtn3.innerText = "c) Nenya";
    annswerBtn4.innerText = "d) Orcrist";
};

const questionfive = () => {
    questionbox.value = "Vad heter dvärgen som är med i brödraskapet?";
    annswerBtn1.innerText = "a) Thorin";
    annswerBtn2.innerText = "b) Gimli";
    annswerBtn3.innerText = "c) Balin";
    annswerBtn4.innerText = "d) Dwalin";
};

const questionsix = () => {
    questionbox.value = "Vad heter den stora spindeln som Frodo möter?";
    annswerBtn1.innerText = "a) Aragog";
    annswerBtn2.innerText = "b) Shelob";
    annswerBtn3.innerText = "c) Ungoliant";
    annswerBtn4.innerText = "d) Shelok";
};

const questionseven = () => {
    questionbox.value = "Vilken plats är inte en del av Gondor?";
    annswerBtn1.innerText = "a) Minas Tirith";
    annswerBtn2.innerText = "b) Osgiliath";
    annswerBtn3.innerText = "c) Edoras";
    annswerBtn4.innerText = "d) Dol Amroth";
};

const questioneight = () => {
    questionbox.value = "Vad heter Aragorns förlovade?";
    annswerBtn1.innerText = "a) Arwen";
    annswerBtn2.innerText = "b) Eowyn";
    annswerBtn3.innerText = "c) Galadriel";
    annswerBtn4.innerText = "d) Luthien";
};

const questionnine = () => {
    questionbox.value = "Vad är namnet på det svärd som bröts och gjordes om till Andúril?";
    annswerBtn1.innerText = "a) Glamdring";
    annswerBtn2.innerText = "b) Narsil";
    annswerBtn3.innerText = "c) Sting";
    annswerBtn4.innerText = "d) Orcrist";
};

const questionten = () => {
    questionbox.value = "Vilket år utspelar sig slaget vid Helms klyfta?";
    annswerBtn1.innerText = "a) 3018";
    annswerBtn2.innerText = "b) 3019";
    annswerBtn3.innerText = "c) 3020";
    annswerBtn4.innerText = "d) 3021";
};

const buttons = [annswerBtn1, annswerBtn2, annswerBtn3, annswerBtn4];
buttons.forEach((button) => {
    button.addEventListener("click", handleAnswer);
});


let currentQuestion = 1;
questionOne();


function handleAnswer(event) {
    const selectedAnswer = event.target.innerText;

    
    if (currentQuestion === 1 && selectedAnswer.includes("b)")) points++;
    if (currentQuestion === 2 && selectedAnswer.includes("a)")) points++;
    if (currentQuestion === 3 && selectedAnswer.includes("a)")) points++;
    if (currentQuestion === 4 && selectedAnswer.includes("d)")) points++;
    if (currentQuestion === 5 && selectedAnswer.includes("b)")) points++;
    if (currentQuestion === 6 && selectedAnswer.includes("b)")) points++;
    if (currentQuestion === 7 && selectedAnswer.includes("c)")) points++;
    if (currentQuestion === 8 && selectedAnswer.includes("a)")) points++;
    if (currentQuestion === 9 && selectedAnswer.includes("b)")) points++;
    if (currentQuestion === 10 && selectedAnswer.includes("b)")) points++;

  
    currentQuestion++;
    if (currentQuestion > 10) {
        endQuiz();
    } else {
        loadNextQuestion();
    }
}


function loadNextQuestion() {
    if (currentQuestion === 2) questionTwo();
    else if (currentQuestion === 3) questionthree();
    else if (currentQuestion === 4) questionfour();
    else if (currentQuestion === 5) questionfive();
    else if (currentQuestion === 6) questionsix();
    else if (currentQuestion === 7) questionseven();
    else if (currentQuestion === 8) questioneight();
    else if (currentQuestion === 9) questionnine();
    else if (currentQuestion === 10) questionten();
}


function endQuiz() {
    questionbox.value = `Quiz Completed! You scored ${points} out of 10.`;
    annswerBtn1.style.display = "none";
    annswerBtn2.style.display = "none";
    annswerBtn3.style.display = "none";
    annswerBtn4.style.display = "none";
}
