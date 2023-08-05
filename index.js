
function updateClock() {
    const hourEl = document.getElementById('js-hours');
   
    const minuteEl = document.getElementById('js-minute');

    const secondsEl = document.getElementById('js-seconds');
    
    const amPmEl = document.getElementById('js-am-pm');

    const dayEl = document.getElementById('js-day-el');
    const monthEl = document.getElementById('js-month-el');
    const yearEl = document.getElementById('js-year-el');

    const daysEl = document.getElementById('days-of-the-week');


    h = new Date().getHours();
    m = new Date().getMinutes();
    s = new Date().getSeconds();
    d = new Date().getDate();
    mo = new Date().getMonth();
    y = new Date().getFullYear();
    days = new Date().getDay();

    if (days === 0) {
        daysEl.innerHTML = 'Sunday';
    } else if (days === 1) {
        daysEl.innerHTML = 'Monday';
    } else if (days === 2) {
        daysEl.innerHTML = 'Tuesday';
    } else if (days === 3) {
        daysEl.innerHTML = 'Wednesday';
    } else if (days === 4) {
        daysEl.innerHTML = 'Thursday';
    } else if (days === 5) {
        daysEl.innerHTML = 'Friday';
    } else if (days === 6) {
        daysEl.innerHTML = 'Saturday';
    }

    if (mo === 0) {
        monthEl.innerHTML = 'January';
    } else if (mo === 1) {
        monthEl.innerHTML = 'Feburary';
    } else if (mo === 2) {
        monthEl.innerHTML = 'March';
    } else if (mo === 3) {
        monthEl.innerHTML = 'April';
    } else if (mo === 4) {
        monthEl.innerHTML = 'May';
    } else if (mo === 5) {
        monthEl.innerHTML = 'June';
    } else if (mo === 6) {
        monthEl.innerHTML = 'July';;
    } else if (mo === 7) {
        monthEl.innerHTML = 'August';
    } else if (mo === 8) {
        monthEl.innerHTML = 'September';
    } else if (mo === 9) {
        monthEl.innerHTML = 'October';
    } else if (mo === 10) {
        monthEl.innerHTML = 'November';
    } else if (mo === 11) {
        monthEl.innerHTML = 'December';
    }

    if (h >= 12) {
        h -= 12
        amPmEl.innerHTML = 'PM'
    } else {
        amPmEl.innerHTML = 'AM';
    }

    
    
    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s

    hourEl.innerHTML = h;
    minuteEl.innerHTML = m;
    secondsEl.innerHTML = s;
    dayEl.innerHTML = d;
    yearEl.innerHTML = y;
    
    setTimeout(updateClock, 1000);
}

updateClock()



 