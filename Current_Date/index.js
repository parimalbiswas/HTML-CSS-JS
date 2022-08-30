function updateClock() {
    var now = new Date();
    // console.log(now);
    var dayname = now.getDay(),
        month = now.getMonth(),
        daynum = now.getDate(),
        year = now.getFullYear(),
        hour = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        ampm = "AM";

        if (hour === 0) {
            hour = 00;
        }
    
        if (hour > 12) {
            hour = hour - 12;
            ampm = "PM";
        }

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    var htmlides = ["dayname", "daynum", "month", "year", "hour", "min", "second", "preourd"];
    var scriptsids = [days[dayname], months[month], daynum, year, hour, min, sec, ampm];



    for (var i = 0; i < htmlides.length; i++) {
        document.getElementById(htmlides[i]).firstChild.nodeValue = scriptsids[i];
    }
}


function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}