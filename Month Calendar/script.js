var dt = new Date();

function RenderDate(){
    
document.getElementById("date-str").innerHTML = dt.toDateString();

var mn = dt.getMonth();

var months = [
    "January",
    "Feburary",
    "March",
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December" ];


document.getElementById("month").innerHTML = months[mn];

var endDate = new Date(
    dt.getFullYear(),
    dt.getMonth() + 1,
    0
).getDate()

var prevDate = new Date(
    dt.getFullYear(),
    dt.getMonth(),
    0
).getDate()

dt.setDate(1);
var day = dt.getDay();
var cells = "";

var today = new Date();
for (x = day; x > 0; x--) {
    cells += "<div class='old'>" + (prevDate - x + 1) + "</div>";
}

for (i = 1; i <= endDate; i++) {
    if(i == today.getDate() && dt.getMonth() == today.getMonth() && dt.getFullYear() == today.getFullYear()){
    cells += "<div class='today'>" + i + "</div>"
    }
    else{
    cells += "<div>" + i + "</div>";
    }
}

document.getElementsByClassName("days")[0].innerHTML = cells;
}

function moveDate(para){
    if(para == 'prev'){
        dt.setMonth(dt.getMonth() - 1);
       
    }
    else if(para == 'next'){
        dt.setMonth(dt.getMonth() + 1);
    }
    RenderDate()
}