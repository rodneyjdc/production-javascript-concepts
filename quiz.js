let button = document.querySelector("button");
button.addEventListener("click", quiz);
let score = 0;
let totalPossibleScore = 0;

function quiz() {
    start();

    question1();
    question2();
    question3();
    question4();
    question5();

    endQuiz();
}

function start() {
    let quizTaker = prompt("Welcome to the quiz! What's your name?");
    console.log(`Hello ${quizTaker}! Good luck on the quiz (:`);
}

function endQuiz() {
    console.log(`Hooray! You've finished the quiz.
    Out of ${totalPossibleScore} questions, you answered ${score} correctly!
    Score: ${(score / totalPossibleScore) * 100}%`);
}

function question1() {
    let answer1 = prompt(`True or False: Node allows developers to run JavaScript code outside of a browser.`);
    if (answer1.toLowerCase() === "true") {
        score += 1;
        console.log("correct!");
    }
    totalPossibleScore += 1;
    console.log(answer1);
}

function question2() {
    let answer2 = prompt(`Select a choice that appropriately fills in the blank:
        The ______ monitors what events need to be executed and executes them in order.
            a. event loop
            b. scope
            c. closure
            d. single thread execution`);
    if (answer2.toLowerCase() === "a") {
        score += 1;
        console.log("correct!");
    }
    totalPossibleScore += 1;
    console.log(answer2);
}

function question3() {
    let answer3 = prompt(`Select a choice that appropriately fills in the blank:
    The ______ is the context that is visible.
        a. closure
        b. scope
        c. event loop
        d. single thread execution`);
    if (answer3.toLowerCase() === "b") {
        score += 1;
        console.log("correct!");
    }
    totalPossibleScore += 1;
    console.log(answer3);
}

function question4() {
    let answer4 = prompt(`Select a choice that appropriately fills in the blank:
    A combination of an enclosed function with references to it's surrounding state is called a ______.
        a. single thread execution
        b. scope
        c. event loop
        d. closure`);
    if (answer4.toLowerCase() === "d") {
        score += 1;
        console.log("correct!");
    }
    totalPossibleScore += 1;
    console.log(answer4);
}

function question5() {
    let answer5 = prompt(`Select a choice that appropriately answers the question:
    What does single threaded mean?
        a. That there will be multiple threads (processes) available for the instructions to be executed.
        b. That there will be only one thread (process) available for the instructions to be executed.`);
    if (answer5.toLowerCase() === "b") {
        score += 1;
        console.log("correct!");
    }
    totalPossibleScore += 1;
    console.log(answer5);
}



