$(document).ready(function(){
	

//check answers
var totalQuestions = 12;
var wrong = 0;
var rightAnswers = 0;
var blanks = 0;

var actualChoices = [];
var correctChoices = [];
correctChoices[1]='b' 
correctChoices[2]='a' 
correctChoices[3]='d'
correctChoices[4]='b'
correctChoices[5]='d'
correctChoices[6]='a'
correctChoices[7]='d'
correctChoices[8]='a'
correctChoices[9]='c'
correctChoices[10]='d'
correctChoices[11]='a'
correctChoices[12]='c'


function checkAnswers(){

	for (var i = 1; i <= totalQuestions; i++) {
		//this pulls the user answer for each question and fills it into the empty array
		var eachQuestion=eval("document.triviaQuiz.question" + i);
		console.log(eachQuestion);
		for (z = 0; z < eachQuestion.length; z++){
			if (eachQuestion[z].checked==true){
				actualChoices[i] = eachQuestion[z].value
			}
		}

		//this checks if the user answers match the correct answers
		if (actualChoices[i] != correctChoices[i] && actualChoices[i] != null) {
			wrong++;
		}
		if (actualChoices[i] == correctChoices[i]) {
			rightAnswers++;
		}
		if (actualChoices[i] == null){
			blanks++;
		}

	}
	console.log(wrong);
console.log(actualChoices);
}

function showResults(){
	document.getElementById("start-game").style.display = "none";
	document.getElementById("game-text").style.display = "none";
	document.getElementById("results").style.display = "block";
	$("#correct-answers").append("" + rightAnswers);
	$("#wrong-answers").append("" + wrong);
	$("#blank-answers").append("" + blanks);
	
}

	//timer info
	var timeNumber = 30;
	var intervalId;

	function runTime() {
		intervalId = setInterval(decrement, 1000);
	}

	function decrement() {
		timeNumber--;
		$("#display").text(timeNumber);
		if (timeNumber === 0) {
			stop();
			checkAnswers();
			showResults();
		}
	}

	function stop() {
		clearInterval(intervalId);
	}

	function showGame(){
		document.getElementById("game-text").style.display = "block"
	}

	function startGame(){
		showGame();
		runTime();

	}
	//starts the game
	$("#start-game").on("click", 
		startGame
		);

	//submits answers if user finishes before time is up
	function submit(){
		stop();
		checkAnswers();
		showResults();	
	}

	$("#submit-answers").on("click", 
		submit
		);

	//resets the game after the user views their score
	function resetGame(){
		timeNumber = 30;
		$("#display").text("30");
		document.getElementById("trivia-questions").reset();
		document.getElementById("start-game").style.display = "block";
		document.getElementById("game-text").style.display = "none";
		document.getElementById("results").style.display = "none";
		var wrong = 0;
		var rightAnswers = 0;
		var blanks = 0;
	}
	$("#restart-game").on("click", function(){
		resetGame();
	})



});

