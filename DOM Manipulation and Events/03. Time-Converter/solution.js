function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', () => {convert(+days.value * 86400)});
    document.getElementById('hoursBtn').addEventListener('click', () => {convert(+hours.value * 3600)});
    document.getElementById('minutesBtn').addEventListener('click', () => {convert(+minutes.value * 60)});
    document.getElementById('secondsBtn').addEventListener('click', () => {convert(+seconds.value)});

    function convert(sec){
        days.value = sec / 86400;
        hours.value = sec / 3600;
        minutes.value = sec / 60;
        seconds.value = sec;
    }
}
/*function attachEventsListeners() {
 
    let buttons = document.querySelectorAll('input[type="button"]');
 
    for (let button of buttons) {
        button.addEventListener("click", convert);
    }
 
    function convert(event) {
 
        let type = event.target.parentElement.children[1].id;
        let value = +event.target.parentElement.children[1].value;
 
        let seconds = 0;
 
        switch (type) {
            case"days":
                seconds = value * 24 * 60 * 60;
                break;
            case"hours":
                seconds = value * 60 * 60;
                break;
            case"minutes":
                seconds = value * 60;
                break;
            case"seconds":
                seconds = value;
                break;
        }
 
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;
 
        document.getElementById("days").value = days;
        document.getElementById("hours").value = hours;
        document.getElementById("minutes").value = minutes;
        document.getElementById("seconds").value = seconds;
    }
}*/