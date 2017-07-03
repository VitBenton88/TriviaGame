$(document).ready(function() {
	var question1 = {
		questionText: "What was the name of Homer's pet monkey?",
		answerOptions: ['Snowball','Pinchy','Mojo','Hendrix'],
		correctAnswer: 'Mojo',
		rightAnswerImg: "../images/congrats1.gif",
		wrongAnswerImg: "../images/wrong1.gif",

		checkAnswer: function(){ //functiont that add .answer to <li> that contain correct answer
			$('li:contains("Mojo")').addClass('answer');
		},
	};

	var question2 = {
		questionText: "How does this SECOND test question look?",
		answerOptions: ['Option0','Option1','Option2','Option3'],
		correctAnswer: 'Option2',
		rightAnswerImg: "../images/congrats2.gif",
		wrongAnswerImg: "../images/wrong2.gif",
	};

	//----------------END OF OBJECTS

	var allQuestions = [question1, question2]
	var time = 30;
	var intervalId;

	//----------------END OF GLOBAL VARIABLES

	//change font of time to red:
	function fontRed (){
		$('#timerDigits').css('color','red')
	};

	//change font of time to black:
	function fontBlack (){
		$('#timerDigits').css('color','black')
	};

	//print current time:
	function printTime(){
		$('#timerDigits').html(time)
	};

	//countdown mechanism:
	function decrement (){
		time--;
		printTime();
		if (time === 0){
			reset();
		}
		else if (time<11){
			fontRed();
		};
	};

	//start countdown
	function start(){
		intervalId = setInterval(decrement, 1000);
	};

	//reset time
	function reset(){
		time = 31;
		fontBlack();
	};

	//Posts relevant content for each question and marks li that contains right answer with .answer class

	function questionGen(question){
		$('#currentQuestion').html(question.questionText);
			for (i = 0; i < question.answerOptions.length; i++){
				$('#listOptions').append('<li>' + question.answerOptions[i] + '</li>');
				question.checkAnswer();
			};

	};

	//----------------END OF GLOBAL FUNCTIONS

	$('#startButton').click(function(){ //when start button is clicked
		$('#startButton').css('display','none'); //hide start button
		$('#timeHeading').css('display','initial'); //show timer heading
		$('section').css('visibility','visible'); //show box with question content
		questionGen(question1);
		start(); //start countdown timer
		printTime(); //show current time
		$('.answer').click(function(){
			reset();
		});
	});

//----------------------------------------------------------------END OF SCRIPT	
});