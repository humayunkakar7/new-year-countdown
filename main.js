function reset() {
    document.getElementById("countdown").innerHTML = "See you next year!";
    document.getElementById("countdown").style["font-size"] = "3rem";
}
function decrement() {
    var value = parseInt(document.getElementById("countdown").innerHTML);
    if ((value - 1) === 0) {
        var horn = new Audio("horn.mp3");
        horn.play();
        document.getElementById("title").innerHTML = "Happy New Year " + new Date().getFullYear() +"!";
        document.getElementById("countdown").innerHTML = "0";
        setTimeout(reset, 1000);
    } else if (value < 12) {
        document.getElementById("countdown").style["font-size"] = "5rem";
        document.getElementById("countdown").innerHTML = value - 1;
        setTimeout(decrement, 1000);
    } else {
        document.getElementById("countdown").innerHTML = value - 1;
        setTimeout(decrement, 1000);
    }
}
function checkDay() {
    var date = new Date;
    if (date.getMonth() === 11) {
        document.getElementById("snowflakeContainer").style["display"] = "block";
        if (date.getDate() === 31) {
            if (date.getHours() === 23) {
                if (date.getMinutes() === 59) {
                    document.getElementById("countdown").innerHTML = 60 - new Date().getSeconds();
                    setTimeout(decrement, 1000);
                } else {
                    var minutesleft = (59 - date.getMinutes());
                    if (minutesleft === 1) {
                        if ((60 - date.getSeconds()) === 1) {
                            document.getElementById("countdown").innerHTML = "We've still got " + 1 + " second left!";
                        } else {
                            document.getElementById("countdown").innerHTML = "We've still got " + (60 - date.getSeconds()) + " seconds left!";
                        }
                        
                    } else {
                        document.getElementById("countdown").innerHTML = "We've still got " + minutesleft + " minutes left!";
                    }
                    setTimeout(checkDay, 1000);
                }
            } else {
                var hoursleft = (23 - date.getHours());
                if (hoursleft === 1) {
                    document.getElementById("countdown").innerHTML = "We've still got " + 1 + " hour left!";
                } else {
                    document.getElementById("countdown").innerHTML = "We've still got " + hoursleft + " hours left!";
                }
                setTimeout(checkDay, 1000);
            }
        } else {
            var daysleft = (31 - date.getDate());
            if (daysleft === 1) {
                document.getElementById("countdown").innerHTML = "We've still got " + 1 + " day left!";
            } else {
                document.getElementById("countdown").innerHTML = "We've still got " + daysleft + " days left!";
            }
            setTimeout(checkDay, 1000);
        }
    } else {
        var date = new Date();
        var year = date.getFullYear();
        var leapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
        var start = new Date(year, 0, 0);
        var diff = date - start;
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.round(diff / oneDay);
        if (leapYear) {
            var daysleft = 367 - day;
        } else {
            var daysleft = 366 - day;
        }
        document.getElementById("countdown").innerHTML = "We've still got " + daysleft + " days left!";
        setTimeout(checkDay, 1000);
    }
}


var container = document.getElementById('container');
container.style['margin-top'] = (((document.documentElement.clientHeight) / 2) - (container.offsetHeight / 2)) + 'px';
container.style['margin-left'] = (((document.documentElement.clientWidth) / 2) - (container.offsetWidth / 2)) + 'px';
var title = document.getElementById("title");
title.style['margin-left'] = (((document.documentElement.clientWidth) / 2) - (title.offsetWidth / 2)) + 'px';
checkDay();