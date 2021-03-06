(function(){
'use strict';
	var words = [
		'pechuga de poyo',
		'mole',
		'caramaleslesles',
		'manzana',
		'platano',
		'ciruela',
		'tomate',
		'pimiento',
		'nopal',
		'lechuga',
		'col',
		'mango',
		'pela',
		'pepino',
		'patata',
		'batata',
		'calabaza'
	];
	var setTarget = function(){
		currentWord = words[Math.floor(Math.random() * words.length)];
		target.innerHTML = currentWord;
		currentLocation = 0;
	};
	var currentWord;
	var currentLocation;
	var score;
	var miss;
	var timer;
	var target = document.getElementById('target');
	var scoreLabel = document.getElementById('score');
	var missLabel = document.getElementById('miss');
	var timerLabel = document.getElementById('timer');
	var isStarted;
	var timerId;

	var init = function() {
		currentWord = 'click to start';
		currentLocation = 0;
		score = 0;
		miss = 0;
		timer = 10;
		target.innerHTML = currentWord;
		scoreLabel.innerHTML = score;
		missLabel.innerHTML = miss;
		timerLabel.innerHTML = timer;
		isStarted = false;
	};
	init();

	var updateTimer = function() {
		var timerId = setTimeout(function(){
			timer--;
			timerLabel.innerHTML = timer;
			if( timer <= 0 ){
				alert('game over');
				var accuracy = (score + miss) === 0 ? '0.00' : ((score / (score + miss)) * 100).toFixed(2);
				alert(score + ' letters, ' + miss + ' miss! ' + accuracy + ' % accuracy');
				clearTimeout(timerId);
				init();
				return;
			}
			updateTimer();
		}, 1000);
	}

	window.addEventListener('click', function(){
		if(!isStarted) {
			isStarted = true;
			setTarget();
			updateTimer();
		}
	})
	window.addEventListener('keyup', function(e) {
		if(!isStarted) {
			return;
		}
		// e.keyCode
		// console.log(String.fromCharCode(e.keyCode));
		if (String.fromCharCode(e.keyCode) === currentWord[currentLocation].toUpperCase()) {
		currentLocation++;
		var placeholder = '';
		for (var i = 0; i < currentLocation; i++) {
			placeholder += '_';
		}
		target.innerHTML = placeholder + currentWord.substring(currentLocation);
		// console.log('score!');
		score++;
		scoreLabel.innerHTML = score;
			if(currentWord.length === currentLocation){
				setTarget();
			}
		} else {
		// console.log('miss!');
		miss++;
		missLabel.innerHTML = miss;
		}
	});

}());
