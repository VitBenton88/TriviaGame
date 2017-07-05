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
				$('#currentQuestion').html("Correct Answer:<br>" + currentCorrectAnswer);
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
			if (this.time === -1){
				mainTimer.start();
				mainTimer.printTime();
				intervalTimer.stop();
				$("#gifBox").empty();
				questionGen(allQuestions[currentQuestion]);
			};
		},
	};
	//----------------END OF OBJECTS

	var allQuestions = [question1, question2, question3, question4, question5];
	var currentQuestion = 0;
	var totalScore = 0;
	var totalMisses = 0;
	var outOfTimeImg = "assets/images/outOfTime.gif"
	var currentCorrectAnswer;

	//----------------END OF GLOBAL VARIABLES

	function fontRed (){
		$('#timerDigits').css('color','red')
	};

	function correctAlert(){
		$('#currentQuestion').html("You answered correctly!")
	};

	function incorrectAlert(){
		$('#currentQuestion').html("Wrong Answer!")
	};

	function fontBlack (){
		$('#timerDigits').css('color','black')
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
	};

	function questionGen(question){
		$('#currentQuestion').html(question.questionText);//print current question to HTML
			for (i = 0; i < question.answerOptions.length; i++){//for loop pushes answer options into <ul> as <li>s
				$('#listOptions').append('<li>' + question.answerOptions[i] + '</li>');
				$('#timeHeading').html('Seconds Remaining:');//print 'seconds remaining' to header above question
				question.findAnswer();//find answer in HTML and mark with class=answer
				currentCorrectAnswer = question.correctAnswer;//store current correct answer in global variable to print to HTML if time runs out
			};
			$('.answer').click(function(){//if the right answer is clicked ...
				$('#timeHeading').html('Next Question In:');//print 'Next question in' to header above question
				fontBlack();//make time font black incase it went red if <11
				mainTimer.stop();//clear interval for mainTimer
				totalScore++;//tally score to totalScore
				nextQuestion();//add to currentQuestion value to make next question run in questionGen()
				correctAlert();//display correct answer screen
				postCongratsGif(question);//display current correct answer gif (varies by question)
				intervalTimer.printTime();//print interval time value to html
				intervalTimer.start();//begin countdown of intervaltimer
			});
			$('.wrongAnswer').click(function(){
				$('#timeHeading').html('Next Question In:');//print 'Next question in' to header above question
				fontBlack();
				mainTimer.stop();
				totalMisses++;//tally misses
				nextQuestion();//add to currentQuestion value to make next question run in questionGen()
				incorrectAlert();//display wrong answer screen
				postWrongGif(question);//display current wrong answer gif (varies by question)
				intervalTimer.printTime();//print interval time value to html
				intervalTimer.start();//begin countdown of intervaltimer
			});
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

	//----------------------------------------------------------------END OF SCRIPT	
});