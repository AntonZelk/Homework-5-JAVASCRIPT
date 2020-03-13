var currentTime = document.getElementById('timer').innerHTML;
var olList = document.getElementById('addCircle');
var msec = 0;
var sec = 0;
var min = 0;
var startTimer;



function stopwatch(){
   startTimer = setInterval(tick,10);
}

function tick(){
    msec++;

    if(msec >= 100){
        sec++;
        msec = msec - 100;
    } else if(sec >= 60){
        min++;
        sec = sec - 60;
    } else if(min >= 60){
        msec = 0;
        sec = 0;
        min = 0;
    }

    if(msec < 10) {
        if(sec < 10){
            if(min < 10){
                document.getElementById('timer').innerHTML = '0' + min + ':0' + sec + ':0' + msec;
            } else {
                document.getElementById('timer').innerHTML = min + ':0' + sec + ':0' + msec;
            }
        } else {
            if (min < 10) {
                document.getElementById('timer').innerHTML = '0' + min + ':' + sec + ':0' + msec;
            } else {
                document.getElementById('timer').innerHTML = min + ':' + sec + ':0' + msec;
            }
        }
    } else {
        if(sec < 10) {
            if (min < 10) {
                document.getElementById('timer').innerHTML = '0' + min + ':0' + sec + ':' + msec;
            } else {
                document.getElementById('timer').innerHTML = min + ':0' + sec + ':' + msec;
            }
        } else {
            if (min < 10) {
                document.getElementById('timer').innerHTML = '0' + min + ':' + sec + ':' + msec;
            } else {
                document.getElementById('timer').innerHTML = min + ':' + sec + ':' + msec;
            }
        }
    }
}

function stopwatchGeneral(){
    startTimerGeneral = setInterval(tick,10);
 }
function clearTimer(){
    msec = 0;
    sec = 0;
    min = 0;
    clearInterval(startTimer);
    document.getElementById('timer').innerHTML = '00:00:00';
}

function pauseTimer(){
    clearInterval(startTimer);
}

document.getElementById('btn1').onclick = function(){
    document.getElementById('btn1').style.display = 'none';
    document.getElementById('btn3').style.display = 'flex';
    document.getElementById('btn2').style.display = 'none';
    document.getElementById('btn4').style.display = 'flex';
    stopwatch();
}

document.getElementById('btn3').onclick = function(){
    document.getElementById('btn3').style.display = 'none';
    document.getElementById('btn1').style.display = 'flex';
    document.getElementById('btn4').style.display = 'none';
    document.getElementById('btn2').style.display = 'flex';
    pauseTimer();
}
document.getElementById('btn2').onclick = function(){
    document.getElementById('btn3').style.display = 'none';
    document.getElementById('btn1').style.display = 'flex';
    document.getElementById('container2').style.display = 'none';
    document.getElementById('addCircle').innerHTML = '';
    clearTimer();
}
document.getElementById('btn4').onclick = function(){
    document.getElementById('container2').style.display = 'block';
    var newLi = document.createElement('li');
    var newSpan = document.createElement('span');
    newSpan.id = "Time";
    newSpan.innerHTML = document.getElementById('timer').innerHTML;
    msec = 0;
    sec = 0;
    min = 0;
    olList.appendChild(newLi).append(newSpan);  
}


