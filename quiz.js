/* Adding an event listener to the page button. Once
   clicked, the quiz will start.
*/
let button = document.querySelector("button");
button.addEventListener("click", quiz);

// Quiz engine
function quiz() {
    start();

    question1();
    question2();
    question3();
    question4();
    question5();

    endQuiz();
}

// Prompts the user for their name and greet them.
function start() {
    let quizTaker = prompt("Welcome to the quiz! What's your name?");
    console.log(`Hello ${quizTaker}! Good luck on the quiz (:`);
}

// Displays the resulting score.
function endQuiz() {
    let score = updateScore("done");
    console.log(`Hooray! You've finished the quiz.
    Your score is ${score}%.`);
}

/* Updates the user score. Takes in a string argument that either have
   "correct", "incorrect", or "done" as the value.
   correct -> updates the score for a correct answer
   incorrect -> updates the score for an incorrect answer
   done -> returns the current score
*/
const updateScore = function(result) {
    let score = 0;
    let totalPossibleScore = 0;

    return function(result) {
        if (result.toLowerCase() === "correct") {
            score++;
            totalPossibleScore++;
        } else if (result.toLowerCase() === "incorrect") {
            totalPossibleScore++;
        } else if (result.toLowerCase() === "done") {
            return score / totalPossibleScore * 100;
        }
    }
}();

// QUIZ QUESTIONS:

function question1() {
    let answer1 = prompt(`True or False: Node allows developers to run JavaScript code outside of a browser.`);
    if (answer1.toLowerCase() === "true") {
        updateScore("correct");
    } else {
        updateScore("incorrect");
    }
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
        updateScore("correct")
    } else {
        updateScore("incorrect");
    }
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
        updateScore("correct");
    } else {
        updateScore("incorrect");
    }
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
        updateScore("correct");
    } else {
        updateScore("incorrect");
    }
    console.log(answer4);
}

function question5() {
    let answer5 = prompt(`Select a choice that appropriately answers the question:
    What does single threaded mean?
        a. That there will be multiple threads (processes) available for the instructions to be executed.
        b. That there will be only one thread (process) available for the instructions to be executed.`);
    if (answer5.toLowerCase() === "b") {
        updateScore("correct");
    } else {
        updateScore("incorrect");
    }
    console.log(answer5);
}



