/**
 * Created by JENN on 9/11/2016.
 */
function dayGreeting() {
        var day = "";
        var d = new Date();
        var todayIs = d.getDay();

    switch (todayIs){
        case 0:
        case 6:
            day = "Are you ready for some football??";
            break;
        case 1:
            day = "Mondays. An excuse to hit the snooze button";
            break;
        case 2:
            day = "Tuesdays. Not as Monday as a Monday";
            break;
        case 3:
            day = "Wednesday. Also known as drink 4 pots of coffee day";
            break;
        case 4:
            day = "Thursday. Not quite Friday, but getting there";
            break;
        case 5:
            day = "FRIIIIIDAAAAAYYYY!!!";
            break;
        default:
            day = "If you see me, I did something wrong";
    }
    document.getElementById("daily").innerHTML = day;
}

function graduation() {
    var today = new Date();
    document.getElementById("datetoday").innerHTML = today.toDateString();

    var graduation = new Date("05/13/2017");
    document.getElementById("graddate").innerHTML = graduation.toDateString();

    if (today < graduation) {
        var timeDiff = Math.abs(graduation.getTime() - today.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        document.getElementById("left").innerHTML = diffDays;
    }
    else {
        document.getElementById("left").innerHTML = "Get outta here! You already graduated!"
    }

}


var today2 = new Date();
    var day2 = today2.getDate();
    var month = today2.getMonth() + 1 //apparently 0 means January per W3schools and Meri
    var year = today2.getFullYear();
    var annmonth = 0;
    var annyear = 0;

    function setTheDate() {
        document.getElementById("todayis").value = month + "/" + day2 + "/" + year;
    }

    function calculate() {
        var todayis = new Date(("todayis").value);
        var anniversary = document.getElementById("anniversary").value;

        var amonth = (parseInt(anniversary.substring(0,2)));
        var ayear = (parseInt(anniversary.substring(6,10)));

        if (amonth > month)
        {
            annyear = year - ayear -1;
            annmonth = 12 - amonth + month;
        }
        else {
            annyear = year - ayear;
            annmonth = month - amonth;
        }

        document.getElementById("reply").value = "You have been married " + annyear + " years and " + annmonth +" months";
    }





window.onload = function () {
    dayGreeting();
    graduation();
    setTheDate();
    document.getElementById("anniversary").vale = "mm/dd/yyyy";
    document.getElementById("weddingday").onclick = calculate;
}