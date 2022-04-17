
function clock(){
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var am = document.getElementById("hourss");

    var time = new Date();
    var a = time.getHours();
    ab = (a % 12) || 12;
    var b = time.getMinutes();
    var c = time.getSeconds();
    var am_pm = a >= 12 ? 'PM' : 'AM';

    hours.innerHTML = ab;
    minutes.innerHTML = b;
    seconds.innerHTML = c;
    hourss.innerHTML = am_pm;
}
setInterval(clock,1000);


function getOption() {


    var e = document.getElementById("wakeUpTimeSelector");
    var text1 = e.options[e.selectedIndex].text;
    
    var f = document.getElementById("lunchTimeSelector");
    var text2 = f.options[f.selectedIndex].text;
    
    var g = document.getElementById("napTimeSelector");
      var text3 = g.options[g.selectedIndex].text;

    var h = document.getElementById("dinnerTimeSelector");
      var text4 = h.options[h.selectedIndex].text;  
    
    
         var idExist = document.getElementById("wakeUpTimeText");
        if(idExist){
            idExist.innerHTML = `Wake Up Time : ${text1} <br> Lunch Time : ${text2}<br> Nap Time : ${text3} <br> Dinner Time : ${text4}`;
        }
     
    }
    


function settime(){
    var i = document.getElementById("wakeUpTimeSelector").value;
    var hourr = new Date().getHours();

    if(i == hourr){
        document.getElementById("img-container").style.backgroundImage="url(good_mornig.svg)";
        var txt = document.getElementById("txt");
        txt.innerHTML="Good Morning ! Grab Your Healthy Breakfast !";
        var snd = new Audio('alarm_clock_1.mp3');
        snd.play();
    }

    var i2 = document.getElementById("lunchTimeSelector").value;

    if(i2 == hourr){
        document.getElementById("img-container").style.backgroundImage="url(lunch.svg)";
        var txt1 = document.getElementById("txt");
        txt1.innerHTML="It's a Lunch Time";
        var snd = new Audio('alarm_clock_1.mp3');
        snd.play();
    }

    var i3 = document.getElementById("napTimeSelector").value;

    if(i3 == hourr){
        document.getElementById("img-container").style.backgroundImage="url(goodnight_image.svg)";
        var txt3 = document.getElementById("txt");
        txt3.innerHTML="Yawning? Okay Take Some Rest !";
        var snd = new Audio('alarm_clock_1.mp3');
        snd.play();
    }

    var i4 = document.getElementById("dinnerTimeSelector").value;

    if(i4 == hourr){
        document.getElementById("img-container").style.backgroundImage="url(dinner_time.jpg)";
        var txt4 = document.getElementById("txt");
        txt4.innerHTML="Enjoy Your Dinner With Family !";
        var snd = new Audio('alarm_clock_1.mp3');
        snd.play();
    }

    getOption();
}



