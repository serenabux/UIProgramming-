  var fastCasual = ["Illegal Pete's", "Rincon Argentino", "Zoe Ma Ma", "Snarfs", "Noodles & Company", "Cafe Mexicali", "Boss Lady Pizza", "Garbonzo"]
  //Current spot accounts for the slight tilt in the inital starting spot of the spinner 
  var currentSpot = -196;



$(document).ready(function(){ // do when doc loads 
    $("#spinContent").show(); 
    $("#helpContent").hide(); 
    $("#helpButton").removeClass("current-tab");
    $("#homeButton").addClass("current-tab");
});

$('#helpButton').click(function(){ //trigger the help tab
    $("#spinContent").hide(); 
    $("#helpContent").show(); 
    $("#helpButton").addClass("current-tab");
    $("#homeButton").removeClass("current-tab");
});

$('#homeButton').click(function(){ //load the main page on button press
    $("#spinContent").show(); 
    $("#helpContent").hide(); 
    $("#helpButton").removeClass("current-tab");
    $("#homeButton").addClass("current-tab");
});


  //listen to shake event
    var shakeEvent = new Shake({threshold: 15});
    shakeEvent.start();

    window.addEventListener('shake', function(){ //if shaked call the pause/ play function to trigger the animation/ resturant generation
        pasusePlayAnimation();
    }, false);

    //stop listening
    function stopShake(){
        shakeEvent.stop();
    }



    //check if shake is supported or not.https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
    if(!("ondevicemotion" in window)){console.log("not supported");}


    function getRandomShop(){
        math.randomInt(fastCasual.length);
        //set heading based on the random int selected  
    }

//hep from https://www.w3schools.com/jsref/prop_style_animationplaystate.asp
$("#spinButton").click(function(){
    pasusePlayAnimation();
});

function pasusePlayAnimation(){
    var randTime = Math.floor((Math.random() * 8000) + 1000);

    //range for each spot is 375 milliseconds at the speed of 3s per rotation
    //it first changes colors at 195
    //need to account for where starting from, in case spun again
    //scale it so that regardless of how many times it goes around it maps to just once time wise
    var scaledRandTime = (randTime+currentSpot) - Math.floor((randTime+currentSpot)/3000)*3000;
    currentSpot = scaledRandTime; //update where it ended to be used next time
    //set paragraph that doesn't show up for screen reader 
    document.getElementById("screenReader").innerHTML= "There is an animation of a decision wheel spinning, your suggested resturant will be avalible shortly."
    setTimeout(stopAnimation, randTime); //After the random amount of time in milliseconds tell tje animation to stop
    document.getElementById("wheel").style.animationPlayState = "running";
}

function stopAnimation(){
    document.getElementById("wheel").style.animationPlayState = "paused";
     var newHeading = "You should eat at ";
     //msp to proper resturant 
    switch(true){ 
        case (currentSpot < 375  ):{
            newHeading += fastCasual[0];
            break;
        }
        case (currentSpot < 750):{
            newHeading += fastCasual[1];
            break;
        }
        case (currentSpot<1125):{
            newHeading += fastCasual[2];
            break;
        }
        case (currentSpot < 1500):{
            newHeading += fastCasual[3];
            break;
        }
        case (currentSpot < 1875):{
            newHeading += fastCasual[4];
            break;
        }
        case (currentSpot < 2250):{
            newHeading += fastCasual[5];
            break;
        }
        case (currentSpot < 2625):{
            newHeading += fastCasual[6];
            break;
        }
        default: {
            newHeading += fastCasual[7];
            break;
        }
    }
    document.getElementById("place").innerHTML = newHeading;
        document.getElementById("screenReader").innerHTML="";
}
