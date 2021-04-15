var userPattern =[];
var gamePattern =[];
var isStarted = false;
var colors =["red","green","blue","yellow"];
var level = 0
var position = 0;
$(document).keypress(function () {
	// body...
	if(!isStarted){
		$("h1").text("Level: "+level);
		nextSequence();
		isStarted = true;
	}
});

$(".btn").click(function(){
	var chosenColor = $(this).attr("id");
	userPattern.push(chosenColor);
	animate(chosenColor);
	playSound(chosenColor);
	checkPattern(chosenColor);

});
function nextSequence(){
	position=0;
	level+=1;
	userPattern = [];
	$("#level-title").text("Level: "+level);
	var random_num = Math.floor((Math.random()*10)%4);
	var color = colors[random_num];
	gamePattern.push(color);
	$("#" + color).fadeIn(100).fadeOut(100).fadeIn(100);
	playSound(color);

}
function playSound(randomChosenColour){
	audio = new Audio("sounds/"+randomChosenColour+".mp3");
	audio.play(); 
}
function checkPattern(color){
	console.log(color,gamePattern[position]);
	if (color ==gamePattern[position]){
		position+=1;
		if (userPattern.length ==gamePattern.length){
			setTimeout(function () {
          	nextSequence();
        	}, 1000);
		}
	}
	else{
		console.log("wrong");

      //1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
      playSound("wrong");

      //2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
      $("#level-title").text("Game Over, Press Any Key to Restart");
      restart()
	}
}
function animate(color){
	$("#"+color).addClass("pressed");
	setTimeout(function() {
		$("#"+color).removeClass("pressed");
	}, 200);

}

function restart(){
	level =0;
	position=0;
	userPattern=[];
	gamePattern=[];
	isStarted =false;

}
// var randomkeys =[]
// var level = 1;
// var colors =['green','red','yellow','blue'];
// var b =0;
// var i=0;
// function nextSequence(randomkeys){
// 	i=0
// 	console.log(randomkeys);
// 	var random_num = Math.floor((Math.random()*10)%4);
// 	console.log("random number "+random_num);
// 	randomkeys.push(random_num);
// 	$("#"+colors[random_num]).toggleClass("pressed");
// 	setTimeout(function() {$("#"+colors[random_num]).toggleClass("pressed")}, 300);
// 	$("h1").text("Level: "+level);
// 	return randomkeys;
// }
// function startOver(randomkeys){
// 	level = 1;
// 	colors =['green','red','yellow','blue'];
// 	b =0;
// 	i=0;
// 	$(document).keypress(function(command){
// 	console.log(command.key);
// 	if (command.key ==='a'){
// 		level=1
// 		i=0
// 		randomkeys=[];
// 		$("h1").text("LEVEL: "+level);
// 		// var random_num = Math.floor((Math.random()*10)%4);
// 		// console.log("random number "+random_num);
// 		// randomkeys.push(random_num);
// 		// $("#"+colors[random_num]).toggleClass("pressed");
// 		// setTimeout(function() {$("#"+colors[random_num]).toggleClass("pressed")}, 100);
// 		// console.log("comlpete");
// 		randomkeys = nextSequence(randomkeys);
// 		$("body").removeClass("game-over");
// 		console.log(randomkeys,i);
// 		$("#green").click(function(){
// 			console.log("key"+randomkeys[i],randomkeys);
// 			if (colors[randomkeys[i]] ==="green"){
// 				var audio = new Audio("sounds/green.mp3");
// 				audio.play();
// 				i+=1;
// 				if (i == randomkeys.length){
// 					level+=1;
// 					i =0;
// 					randomkeys = nextSequence(randomkeys)
// 				}
// 			}
// 			else{
// 				console.log(colors[randomkeys[i]]);
// 				var audio = new Audio("sounds/wrong.mp3");
// 				audio.play();
// 				$("body").addClass("game-over");

// 			}
// 		});
// 		$("#blue").click(function(){
// 			console.log("key"+randomkeys[i]);
// 			if (colors[randomkeys[i]] == "blue"){
// 				var audio = new Audio("sounds/blue.mp3");
// 				audio.play();
// 				i+=1;
// 				if (i === randomkeys.length){
// 					level+=1;
// 					i =0;
// 					randomkeys = nextSequence(randomkeys)
// 				}
// 			}
// 			else{
// 				console.log(colors[randomkeys[i]]);
// 				var audio = new Audio("sounds/wrong.mp3");
// 				audio.play();
// 				$("body").addClass("game-over");
// 			}
// 		});
// 		$("#red").click(function(){
// 			console.log("key"+randomkeys[i]);
// 			if (colors[randomkeys[i]] =="red"){
// 				var audio = new Audio("sounds/red.mp3");
// 				audio.play();
// 				i+=1;
// 				if (i === randomkeys.length){
// 					level+=1;
// 					i =0;
// 					randomkeys = nextSequence(randomkeys)
// 				}
// 			}
// 			else{
// 				console.log(colors[randomkeys[i]]);
// 				var audio = new Audio("sounds/wrong.mp3");
// 				audio.play();
// 				$("body").addClass("game-over");
// 			}
// 		});
// 		$("#yellow").click(function(){
// 			console.log("key"+randomkeys[i]);
// 			if (colors[randomkeys[i]] =="yellow"){
// 				var audio = new Audio("sounds/yellow.mp3");
// 				audio.play();
// 				i+=1;
// 				if (i === randomkeys.length){
// 					level+=1;
// 					i =0;
// 					randomkeys = nextSequence(randomkeys);
// 				}
// 			}
// 			else{
// 				console.log(colors[randomkeys[i]]);
// 				var audio = new Audio("sounds/wrong.mp3");
// 				audio.play();
// 				$("body").addClass("game-over");

// 			}
// 		});
// 	}
// });
// }
// startOver(randomkeys);

