var hour = document.getElementById("hours");
var minute = document.getElementById("minutes");
var second = document.getElementById("seconds");

var clock = setInterval(
  function time(){
    var date_now = new Date();
    var hr = date_now.getHours();
    var min = date_now.getMinutes();
    var sec = date_now.getSeconds();

    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;
  },1000
);
