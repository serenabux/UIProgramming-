  var fastCasual = ["Illegal Pete's", "Rincon Argentino", "Zoe Ma Ma", "Snarfs", "Noodles and Company", "Cafe Mexicali", "Boss Lady Pizza", "Garbonzo"]
  //var fastCasual = ["Red", "Pink", "Purple", "Blue", "LBlue", "Green", "Yellow", "Orange"];
  var currentSpot = -192;

  //listen to shake event
    var shakeEvent = new Shake({threshold: 15});
    shakeEvent.start();

    window.addEventListener('shake', function(){
        pasusePlayAnimation();
    }, false);

    //stop listening
    function stopShake(){
        shakeEvent.stop();
    }

    //check if shake is supported or not.https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
    if(!("ondevicemotion" in window)){console.log("not supported");}

    //check if desktop or mobile/ tablet https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
    window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

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
    //TODO: fix edge cases
    var scaledRandTime = (randTime+currentSpot) - Math.floor((randTime+currentSpot)/3000)*3000;

    currentSpot = scaledRandTime;
    console.log(randTime);
    console.log(scaledRandTime);
    setTimeout(stopAnimation, randTime) //referenced from https://www.w3schools.com/js/js_timing.asp
    document.getElementById("wheel").style.animationPlayState = "running";
}

function stopAnimation(){
    document.getElementById("wheel").style.animationPlayState = "paused";
     var newHeading = "You should eat at ";
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
}

function updateHeading(){
    document.getElementById("place").innerHTML = newHeading;
}