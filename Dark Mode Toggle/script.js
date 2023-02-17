var icon = document.getElementsByClassName('icon')[0];
var btn = document.getElementsByClassName('btn')[0];
var main = document.getElementById('main');
var light = document.getElementById('light');
var dark = document.getElementById('dark');

icon.onclick = function(){
        icon.classList.toggle("animate");
        btn.classList.toggle("animate");
        main.classList.toggle("animate");
}
