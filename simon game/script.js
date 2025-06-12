var colorsArray=["red","green","blue","yellow"];
var userClickedPattern=[];
var newsequence=[];

var level=0;
var started=false;

$(document).keypress(function(){


if(!started){

    $(".game-heading2").text("level "+level)
    nextSequence()
     started=true;  
}

});


$(".game-button").click(function(){

    var userChosenColour=$(this).attr("id");      //animate and add sound for user clicked color that is userchosen color var like call function inside
    userClickedPattern.push(userChosenColour);
   animatepress(userChosenColour);
   userclicksounds(userChosenColour);
    


   checkanswer(userClickedPattern.length-1);
})





function checkanswer(indexofuserclickedpattern){

        if (newsequence[indexofuserclickedpattern] === userClickedPattern[indexofuserclickedpattern]){

            console.log("success")


        if (userClickedPattern.length === newsequence.length){
       setTimeout(function () {
          nextSequence();
        }, 1000);
}


}
        else {
      console.log("wrong");
      userclicksounds("wrong");

            $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
    
        $(".game-heading2").text("Game Over, Press Any Key to Restart");
        startOver()
    }


}


function nextSequence(){
    userClickedPattern=[]
    level++;
    $(".game-heading2").text("level "+level)
  


    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColors=colorsArray[randomNumber];       //randmchosen color has the color choosen randomly
    newsequence.push(randomChosenColors);

    $("#"+randomChosenColors).fadeIn(100).fadeOut(100).fadeIn(100)
      
    
    var colorsaudio=new Audio("./"+randomChosenColors+".mp3");
   colorsaudio.play();
}





function animatepress(currentcolor){

    $("#"+currentcolor).addClass("pressed");


    setTimeout(function(){
         $("#"+currentcolor).removeClass("pressed")
    },100)

}


function userclicksounds(name){

    var coloraudio= new Audio("./"+name+".mp3");
coloraudio.play();

}


function startOver() {

  level = 0;
  gamePattern = [];
  started = false;
}
