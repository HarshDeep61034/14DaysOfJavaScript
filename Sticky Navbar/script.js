window.addEventListener("scroll", function(){
      document.getElementById('nav').classList.toggle('sticky', window.scrollY > 0);
})