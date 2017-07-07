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
		correctAnswer: 'Rod & Todd',
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

	var question6 = {
		questionText: "What is the name of Mr. Burns' beloved teddy bear?",
		answerOptions: ['Bobo','Santas Little Helper','Moe','Teddy'],
		correctAnswer: 'Bobo',
		rightAnswerImg: "assets/images/congrats6.gif",
		wrongAnswerImg: "assets/images/wrong6.gif",

		findAnswer: function(){ //function that adds .answer to <li> that contains correct answer and .wrongAnswer to <li>s that don't
			$('li:contains("Santas Little Helper")').addClass('wrongAnswer');
			$('li:contains("Teddy")').addClass('wrongAnswer');
			$('li:contains("Bobo")').addClass('answer');
			$('li:contains("Moe")').addClass('wrongAnswer');
		},
	};

	var question7 = {
		questionText: "What is the name of Springfield's neighboring town?",
		answerOptions: ['Springfield 2','Cypress Creek','Shelbyville','Flushing Meadows'],
		correctAnswer: 'Shelbyville',
		rightAnswerImg: "assets/images/congrats7.gif",
		wrongAnswerImg: "assets/images/wrong7.gif",

		findAnswer: function(){ //function that adds .answer to <li> that contains correct answer and .wrongAnswer to <li>s that don't
			$('li:contains("Flushing Meadows")').addClass('wrongAnswer');
			$('li:contains("Cypress Creek")').addClass('wrongAnswer');
			$('li:contains("Shelbyville")').addClass('answer');
			$('li:contains("Springfield 2")').addClass('wrongAnswer');
		},
	};

	var question8 = {
		questionText: "What kind of animal is Homer's Spirit Guide?",
		answerOptions: ['Tortoise','Coyote','Hawk','Homer Has No Spirit Guide'],
		correctAnswer: 'Coyote',
		rightAnswerImg: "assets/images/congrats8.gif",
		wrongAnswerImg: "assets/images/wrong8.gif",

		findAnswer: function(){ //function that adds .answer to <li> that contains correct answer and .wrongAnswer to <li>s that don't
			$('li:contains("Homer Has No Spirit Guide")').addClass('wrongAnswer');
			$('li:contains("Hawk")').addClass('wrongAnswer');
			$('li:contains("Coyote")').addClass('answer');
			$('li:contains("Tortoise")').addClass('wrongAnswer');
		},
	};

	var mainTimer = {
		time: 30,
		intervalId: '',

		printTime: function(){
			$('#timerDigits').html(this.time)
		},

		decrement: function(){
			mainTimer.time--;
			mainTimer.printTime();
			mainTimer.timeRunout();
		},

		start: function(){
			mainTimer.intervalId = setInterval(mainTimer.decrement, 1000);
			intervalTimer.reset();
			intervalTimer.clearTimeInterval();
		},

		reset: function(){
			mainTimer.time = 30;
			fontBlack();;
		},

		clearTimeInterval: function(){
			clearInterval(this.intervalId);
		},

		stop: function(){
			mainTimer.clearTimeInterval();
			mainTimer.reset();
		},

		timeRunout: function(){
			if (this.time === -1){
				mainTimer.stop();
				nextQuestion();
				totalMisses++;
				intervalTimer.printTime();
				intervalTimer.start();
				$("#listOptions").empty();
				$("#gifBox").html("<img src='" + outOfTimeImg + "'>");
				$('#currentQuestion').html("Out Of Time!<br>The correct answer is:");
				$('#displayCorrectAnswer').html(currentCorrectAnswer);
			}

			else if (this.time < 11){
				fontRed();
			};
		},
	};

	var intervalTimer = {
		time: 5,
		intervalId: '',

		printTime: function(){
			$('#timerDigits').html(this.time)
		},

		decrement: function(){
			intervalTimer.time--;
			intervalTimer.printTime();
			intervalTimer.timeRunout();
		},

		start: function(){
			intervalTimer.intervalId = setInterval(intervalTimer.decrement, 1000);
		},

		reset: function(){
			intervalTimer.time = 5;
			fontBlack();
		},

		clearTimeInterval: function(){
			clearInterval(this.intervalId);
		},

		stop: function(){
			intervalTimer.clearTimeInterval();
			intervalTimer.reset();
		},

		timeRunout: function(){
			if (this.time === -1 && !gameEnds){
				$('#displayCorrectAnswer').html('');
				mainTimer.start();
				mainTimer.printTime();
				intervalTimer.stop();
				$("#gifBox").empty();
				questionGen(allQuestions[currentQuestion]);
			}

			else if (this.time === -1 && gameEnds) {
				intervalTimer.stop();
				$('#stats').css('display','initial');
				$('#totalCorrect').html('Total Correct: ' + totalScore);
				$('#totalIncorrect').html('Total Incorrect: ' + totalMisses);
				$('#displayCorrectAnswer').html('');
				$('#restartButton').css('display','initial');
				$('#timeHeading').html('');
				$('#timerDigits').html("");
				$('#currentQuestion').html("End Of Game!");
				$("#gifBox").html("<img src='" + endOfGameImg + "'>")
			};
		},
	};
	//----------------END OF OBJECTS

	var allQuestions = [question1, question2, question3, question4, question5, question6, question7, question8];
	var currentQuestion = 0;
	var totalScore = 0;
	var totalMisses = 0;
	var outOfTimeImg = "assets/images/outOfTime.gif";
	var endOfGameImg =  "assets/images/end.gif";
	var currentCorrectAnswer;
	var gameEnds = false;//true when game is over

	//----------------END OF GLOBAL VARIABLES

	function fontRed (){
		$('#timerDigits').css('color','red')
	};

	function fontBlack (){
		$('#timerDigits').css('color','black')
	};

	function correctAlert(){
		$('#currentQuestion').html("You answered correctly!")
	};

	function incorrectAlert(){
		$('#currentQuestion').html("Wrong Answer!<br>The correct answer is:");
		$('#displayCorrectAnswer').html(currentCorrectAnswer);
	};

	function postCongratsGif(question){
		$("#listOptions").empty();
		$("#gifBox").html("<img src='" + question.rightAnswerImg + "'>")
	};

	function postWrongGif(question){
		$("#listOptions").empty();
		$("#gifBox").html("<img src='" + question.wrongAnswerImg + "'>")
	};

	function nextQuestion (increment){
		currentQuestion++;
		$('#timeHeading').html('Next Question In:');//print 'Next question in' to header above question during interval
	};

	function questionGen(question){
		endCheck();//when new question is posted, check if last
		$('#currentQuestion').html(question.questionText);//print current question to HTML
			for (i = 0; i < question.answerOptions.length; i++){//for loop pushes answer options into <ul> as <li>s
				$('#listOptions').append('<li>' + question.answerOptions[i] + '</li>');
				$('#timeHeading').html('Seconds Remaining:');//print 'seconds remaining' to header above question
				question.findAnswer();//find answer in HTML and mark with class=answer
				currentCorrectAnswer = question.correctAnswer;//store current correct answer in global variable to print to HTML if time runs out
			};
			$('.answer').click(function(){//if the right answer is clicked ...
				totalScore++;//tally score to totalScore
			if (!gameEnds){//if question is not last question:
				fontBlack();//make time font black incase it went red if < 11
				mainTimer.stop();//stop and reset mainTimer
				nextQuestion();//add to currentQuestion value to make next question run in questionGen()
				correctAlert();//display correct answer screen
				postCongratsGif(question);//display current correct answer gif (varies by question)
				intervalTimer.printTime();//print interval time value to html
				intervalTimer.start();//begin countdown of intervaltimer
			}
			else {
				$('#timeHeading').html('Game Ending In:');//if game is over ...
				fontBlack();
				mainTimer.stop();
				correctAlert();
				postCongratsGif(question);
				intervalTimer.printTime();//print interval time value to html
				intervalTimer.start();//begin countdown of intervaltimer
			};
		});
			$('.wrongAnswer').click(function(){//if the wrong answer is selected
				totalMisses++;//tally misses
				if (!gameEnds){//if question is not last question:
				$('#timeHeading').html('Next Question In:');//print 'Next question in' to header above question
				fontBlack();
				mainTimer.stop();
				nextQuestion();//add to currentQuestion value to make next question run in questionGen()
				incorrectAlert();//display wrong answer screen
				postWrongGif(question);//display current wrong answer gif (varies by question)
				intervalTimer.printTime();//print interval time value to html
				intervalTimer.start();//begin countdown of intervaltimer
			}
			else {
				$('#timeHeading').html('Game Ending In:');//if game is over ...
				fontBlack();
				mainTimer.stop();
				incorrectAlert();
				postWrongGif(question);
				intervalTimer.printTime();//print interval time value to html
				intervalTimer.start();//begin countdown of intervaltimer
			};
		});
	};

	function endCheck (){
		if (currentQuestion === 7){
			gameEnds = true;
		};
	};

	//----------------END OF GLOBAL FUNCTIONS

	$('#startButton').click(function(){ //when start button is clicked ...
		$('#headerImg').css('width','150px'); //shrink header img, better for smaller screens
		$('#triviaText').css('font-size','50px'); //see last comment ^
		$('#startButton').css('display','none'); //hide start button
		$('#timeHeading').css('display','initial'); //show timer heading
		$('section').css('visibility','visible'); //show box with question content
		mainTimer.start();//start main timer
		mainTimer.printTime();//print time value to HTML
		questionGen(allQuestions[currentQuestion]);//pass first question into questionGen() in the question array
	});

	$('#restartButton').click(function(){
		gameEnds = false;
		currentQuestion = 0;
		totalScore = 0;
		totalMisses = 0;
		$("#gifBox").empty();
		$('#stats').css('display','none');
		$('#restartButton').css('display','none');
		$('#displayCorrectAnswer').html('');
		$('#displayCorrectAnswer').html('');
		$('#headerImg').css('width','150px'); //shrink header img, better for smaller screens
		$('#triviaText').css('font-size','50px'); //see last comment ^
		$('#startButton').css('display','none'); //hide start button
		$('#timeHeading').css('display','initial'); //show timer heading
		$('section').css('visibility','visible'); //show box with question content
		mainTimer.start();//start main timer
		mainTimer.printTime();//print time value to HTML
		questionGen(allQuestions[currentQuestion]);
	});

	//----------------------------------------------------------------END OF SCRIPT	
});