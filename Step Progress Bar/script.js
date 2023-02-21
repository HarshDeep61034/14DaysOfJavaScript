var bar = document.getElementsByClassName('progress')[0];
var circle1 = document.getElementById('circle1');
var circle2 = document.getElementById('circle2');
var circle3 = document.getElementById('circle3');
var circle4 = document.getElementById('circle4');
var prev = document.getElementById('prev');
var next = document.getElementById('next');

var x = 0;
document.getElementById('next').onclick = function(){
    if(x <= 3){
    x += 1;
    }
  


    if(x === 1){
    bar.style.width = "30%";
    circle2.classList.toggle('active');
    prev.removeAttribute('disabled');

    }
    else if(x === 2){
        bar.style.width = "60%";
        circle3.classList.toggle('active');
    }
    else if(x === 3){
        bar.style.width = "100%";
        circle4.classList.toggle('active');
        next.setAttribute('disabled');
        
    }
    
}

document.getElementById('prev').onclick = function(){
   
    if(x === 1){
    bar.style.width = "0%";
    circle2.classList.toggle('active');

    }
    else if(x === 2){
        bar.style.width = "30%";
        circle3.classList.toggle('active');
    }
    else if(x === 3){
        bar.style.width = "60%";
        circle4.classList.toggle('active');
    }
    x -= 1;
}