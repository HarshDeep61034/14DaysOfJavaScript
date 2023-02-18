const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Programmer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Stoic";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Thinker";
    }, 8000); 
}

textLoad();
setInterval(textLoad, 12000);