function stopwatch() {
    let timerElement = document.getElementById('time');
    let startButton = document.getElementById('startBtn');
    let stopButton = document.getElementById('stopBtn');
    let interval;

    startButton.addEventListener('click', function (e) {
        timerElement.textContent = '00:00';

            interval = setInterval(function() {

            let currentTime = timerElement.textContent;
            let timeArray = currentTime.split(':');
            let minutes = Number(timeArray[0]);
            let seconds = Number(timeArray[1]);
            
            seconds++;
            if(seconds > 59){
                minutes++;
                seconds = 0;
            };

            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        }, 1000);
        stopButton.disabled = false;
        startButton.disabled = true;
    });
    
    stopButton.addEventListener('click', function() {
        clearInterval(interval);
        stopButton.disabled = true;
        startButton.disabled = false;
    });
}