(function(){
'use strict';

var currentWord = 'apple';
var currentLocation = 0;
var score = 0;
var miss = 0;
var target = document.getElementById('target');
var scoreLabel = document.getElementById('score');
var missLabel = document.getElementById('miss');

target.textContent = currentWord;
scoreLabel.textContent = score;
missLabel.textContent = miss;

}());