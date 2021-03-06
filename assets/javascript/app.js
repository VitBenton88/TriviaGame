$(document).ready(function() {
	var question1 = {
		questionText: "What was the name of Homer's pet monkey?",
		answerOptions: ['Snowball','Pinchy','Mojo','Hendrix'],
		correctAnswer: 'Mojo',
		rightAnswerImg: "assets/images/congrats1.gif",
		wrongAnswerImg: "assets/images/wrong1.gif",

		findAnswer: function(){ //function that adds .answer to <li> that contains correct answer and .wrongAnswer to <li>s that don't
			$('li:contains("Snowball")').addClass('wrongAnswer');
			$('li:contains("Pinchy")').addClass('wrongAnswer');
			$('li:contains("Mojo")').addClass('answer');
			$('li:contains("Hendrix")').addClass('wrongAnswer');
		},
	};

	var question2 = {
		questionText: "Who is Bart's best friend?",
		answerOptions: ['Lisa','Nelson','Ralph','Milhouse'],
		correctAnswer: 'Milhouse',
		rightAnswerImg: "assets/images/congrats2.gif",
		wrongAnswerImg: "assets/images/wrong2.gif",

		findAnswer: function(){ //function that adds .answer to <li> that contains correct answer and .wrongAnswer to <li>s that don't
			$('li:contains("Lisa")').addClass('wrongAnswer');
			$('li:contains("Nelson")').addClass('wrongAnswer');
			$('li:contains("Milhouse")').addClass('answer');
			$('li:contains("Ralph")').addClass('wrongAnswer');
		},
	};

	var question3 = {
		questionText: "What are the names of Flanders' sons?",
		answerOptions: ['Rod & Todd','Rod & Johnny','Ralph & Todd','Martin & Ralph'],
		correctAnswer: 'Milhouse',
		rightAnswerImg: "assets/images/congrats3.gif",
		wrongAnswerImg: "assets/images/wrong3.gif",

		findAnswer: function(){ //function that adds .answer to <li> that contains correct answer and .wrongAnswer to <li>s that don't
			$('li:contains("Rod & Johnny")').addClass('wrongAnswer');
			$('li:contains("Ralph & Todd")').addClass('wrongAnswer');
			$('li:contains("Rod & Todd")').addClass('answer');
			$('li:contains("Martin & Ralph")').addClass('wrongAnswer');
		},
	};

	var question4 = {
		questionText: "Who shot Mr. Burns?",
		answerOptions: ['Smithers','Maggie','Chief Wiggum','Snake Jailbird'],
		correctAnswer: 'Maggie',
		rightAnswerImg: "assets/images/congrats4.gif",
		wrongAnswerImg: "assets/images/wrong4.gif",

		findAnswer: function(){ //function that adds .answer to <li> that contains correct answer and .wrongAnswer to <li>s that don't
			$('li:contains("Smithers")').addClass('wrongAnswer');
			$('li:contains("Chief Wiggum")').addClass('wrongAnswer');
			$('li:contains("Maggie")').addClass('answer');
			$('li:contains("Snake Jailbird")').addClass('wrongAnswer');
		},
	};

	var question5 = {
		questionText: "What instrument does Lisa play?",
		answerOptions: ['Flute','Guitar','Clarinet','Saxophone'],
		correctAnswer: 'Saxophone',
		rightAnswerImg: "assets/images/congrats5.gif",
		wrongAnswerImg: "assets/images/wrong5.gif",

		findAnswer: function(){ //function that adds .answer to <li> that contains correct answer and .wrongAnswer to <li>s that don't
			$('li:contains("Flute")').addClass('wrongAnswer');
			$('li:contains("Guitar")').addClass('wrongAnswer');
			$('li:contains("Saxophone")').addClass('answer');
			$('li:contains("Clarinet")').addClass('wrongAnswer');
		},
	};

	//----------------END OF OBJECTS

	var allQuestions = [question1, question2, question3, question4, question5];
	var currentQuestion = 0;
	var time = 30;
	var intervalTime = 5;
	var intervalTimeId;
	var intervalId;
	var totalScore = 0;
	var totalMisses = 0;
	var outOfTimeImg = "assets/images/outOfTime.gif"
	var currentCorrectAnswer;

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
	function printTime(timerType){
		$('#timerDigits').html(timerType)
	};

	//countdown mechanism for main timer:
	function decrement (){
		time--;
		printTime(time);
		if (time === 0){
			fontBlack();
			clearMainTime();
			reset();
			totalMisses++;
			nextQuestion();
			printTime(intervalTime);
			startInterval();
			$("#listOptions").empty();
			$("#gifBox").html("<img src='" + outOfTimeImg + "'>");
			$('#currentQuestion').html("Correct Answer:<br>" + currentCorrectAnswer);

		}
		else if (time<11){
			fontRed();
		};
	};

	//countdown mechanism for interval timer and switch to next question:
	function intervalCountdown (){
		intervalTime--;
		printTime(intervalTime);
		if (intervalTime === 0){
			reset();
			start();
			clearIntervalTime();
			resetIntervalTime();
			$("#gifBox").empty();
			questionGen(allQuestions[currentQuestion]);
		};
	};

	//start main countdown
	function start(){
		intervalId = setInterval(decrement, 1000);
	};

	//start interval countdown
	function startInterval(){
		intervalTimeId = setInterval(intervalCountdown, 1000);
	};

	//clear main timer inervalID:

	function clearMainTime(){
		clearInterval(intervalId);
	};

	//clear interval timer inervalID:

	function clearIntervalTime(){
		clearInterval(intervalTimeId);
	};

	//reset main time
	function reset(){
		time = 31;
		fontBlack();
	};

	//reset interval time
	function resetIntervalTime(){
		intervalTime = 5;
	};

	//notify that correct answer has been selected:

	function correctAlert(){
		$('#currentQuestion').html("You answered correctly!")
	};

	//notify that incorrect answer has been selected:

	function incorrectAlert(){
		$('#currentQuestion').html("Wrong Answer!")
	};


	//clear <section> and show this correct answer GIF:

	function postCongratsGif(question){
		$("#listOptions").empty();
		$("#gifBox").html("<img src='" + question.rightAnswerImg + "'>")
	};

	//clear <section> and show this wrong answer GIF:

	function postWrongGif(question){
		$("#listOptions").empty();
		$("#gifBox").html("<img src='" + question.wrongAnswerImg + "'>")
	};

	//question index increment:

	function nextQuestion (increment){
		currentQuestion++;
	};

	//Posts relevant content for each question and marks li that contains right answer with .answer class

	function questionGen(question){
		$('#currentQuestion').html(question.questionText);
			for (i = 0; i < question.answerOptions.length; i++){
				$('#listOptions').append('<li>' + question.answerOptions[i] + '</li>');
				question.findAnswer();
				currentCorrectAnswer = question.correctAnswer;
			};
			$('.answer').click(function(){
				fontBlack();
				clearMainTime();
				totalScore++;
				nextQuestion();
				correctAlert();
				postCongratsGif(question);
				printTime(intervalTime);
				startInterval();
			});
			$('.wrongAnswer').click(function(){
				fontBlack();
				clearMainTime();
				totalMisses++;
				nextQuestion();
				incorrectAlert();
				postWrongGif(question);
				printTime(intervalTime);
				startInterval();
			});
	};

	//----------------END OF GLOBAL FUNCTIONS

	$('#startButton').click(function(){ //when start button is clicked
		$('#headerImg').css('width','150px'); //shrink header img, better for smaller screens
		$('#triviaText').css('font-size','50px'); //see last comment ^
		$('#startButton').css('display','none'); //hide start button
		$('#timeHeading').css('display','initial'); //show timer heading
		$('section').css('visibility','visible'); //show box with question content
		start();
		printTime(time);
		questionGen(allQuestions[currentQuestion]);
	});


//----------------------------------------------------------------END OF SCRIPT	
});