$(document).ready(function(){
	var winCounter = 0;
	var lossCounter = 0;


	//initiating the computer's random number
	$(".num1").on("click",function(){
	var num = parseInt(Math.floor(Math.random()*120) + 7)
	for (var i=19;  i <= 120; i++);
	$(".num1").html(num)

	//displaying the computer's random number
	$(".score").on("click", function(){
	});


	// initiating the random numbers for the crystals
	 var counter  = 0;

	var diamondRandom = parseInt(Math.floor(Math.random()*12) + 1)
	for(var j=1; j <= 12; j++);
	$(".diamond").on("click", function(){
	//summing of  the crystals' values 
	counter += diamondRandom;
	$(".score").html(counter);


	});

	var sapphireRandom = parseInt(Math.floor(Math.random()*12) + 1);
	for(var k=1; k <= 12; k++);
	$(".sapphire").on("click", function(){
	counter += sapphireRandom;
	$(".score").html(counter);


	});

	var amethystRandom = parseInt(Math.floor(Math.random()*12) + 1);
	for(var l=1; l <= 12; l++);
	$(".amethyst").on("click", function(){
	counter += amethystRandom;
	$(".score").html(counter);


	 });

	var turquoiseRandom =parseInt(Math.floor(Math.random()*12) + 1);
	for(var m=1; m <= 12; m++);
	$(".turquoise").on("click", function(){
	counter += turquoiseRandom;
	$(".score").html(counter);

	 });

	var total = document.getElementsByClassName('score').innerHTML;
	console.log(total);

	if(total == num){
	 $(".Win").html("wins - " + winCounter++);
	 } 
	 else if (total >= num){
	 $(".Loss").html("loss - " + lossCounter++);
	 }
	});
});

	//console.log(num);
	//var totalNum = [counter += diamondRandom, counter += sapphireRandom, counter += turquoiseRandom, counter += amethystRandom]
	//console.log(totalNum)

