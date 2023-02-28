let inter = setInterval(function() { makeTimer(); }, 1000);

function makeTimer() {

    var endTime = new Date("March 06, 2023 00:00:00");		
    var endTime = (Date.parse(endTime)) / 1000;

    var now = new Date();
    var now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;
    if(timeLeft <= 0){
        // location.replace("D:/MilkyCermati/BirthdayPpas2023/index2.html");
        location.replace("https://milkydevil.github.io/BirthdayPpas2023/index2.html");
    }else{
    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }
    
    document.getElementById('days').innerHTML = days + "<span>Days</span>";
    document.getElementById('hours').innerHTML = hours + "<span>Hours</span>";
    document.getElementById('minutes').innerHTML = minutes + "<span>Minutes</span>";
    document.getElementById('seconds').innerHTML = seconds + "<span>Seconds</span>";
    }

}

window.onunload = function(){clearInterval(inter)}
