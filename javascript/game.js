$(document).ready(function(){

	//initiating the computer's random number
	$(".num1").on("click",function(){
	var num = parseInt(Math.floor(Math.random()*120) + 7)
	//for (var i=19;  i <= 120; i++);
	$(".num1").text(num)
	});

	//displaying the computer's random number
	$(".score").on("click", function(){
	});


		// initiating the random numbers for the crystals
	 var counter  = 0;

	var diamondRandom = parseInt(Math.floor(Math.random()*12 + 1))
	for(var j=1; j <= 12; j++);
	$(".diamond").on("click", function(){
	//summing of  the crystals' values 
	counter += diamondRandom;
	$(".score").html(counter);

	});

	var sapphireRandom = parseInt(Math.floor(Math.random()*12 + 1))
	for(var k=1; k <= 12; k++);
	$(".sapphire").on("click", function(){
	counter += sapphireRandom;
	$(".score").html(counter);


	});

	var amethystRandom = parseInt(Math.floor(Math.random()*12 + 1))
	for(var l=1; l <= 12; l++);
	$(".amethyst").on("click", function(){
	counter += amethystRandom;
	$(".score").html(counter);


	 });

	var turquoiseRandom =parseInt(Math.floor(Math.random()*12 + 1))
	for(var m=1; m <= 12; m++);
	$(".turquoise").on("click", function(){
	counter += turquoiseRandom;
	$(".score").html(counter);

	 });

	//keeping tabs on wins and losses
	var winCounter = 0;
	var lossCounter = 0;
	//var Num = document.getElementsByClassName("num1");
	  //if($(".images img").attr('src') == $(".yourPic img").attr('src')){
	  	//counter = $(this).attr("value");

	 //declare conditional winning/losing statements

	 if($(".num1").val() == $(".score").val()){
	  $(".Win").html("wins - " + winCounter++);
	 if($(".num1").attr("value") >= $(".score").attr("value")){
	  $(".Loss").html("losses - " + winCounter++);

	 	 }
	 	}

	 });
	 	 //else if()
	 //if($(".score") === $(".num1"));
	//{
	 //alert("yo");
	//}//else(counter = > $(".num1").html());
	 //{
	 //alert("nah");
	 //}




       // if($(".images img").attr('src') == $(".yourPic img").attr('src')){
       // $(".Winnings").html("wins - " + winCounter++);
