// Dom Elements

const resultEl = document.getElementById('result');
const clipboardEl = document.getElementById('clipboard');
const lenEl = document.getElementById('len');
const lowcaseEl = document.getElementById('lowcase');
const upcaseEl = document.getElementById('upcase');
const numEl = document.getElementById('num');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Generate Event Listen
generateEl.addEventListener('click', ( )=>{
    var length = +lenEl.value;
    const hasLower = lowcaseEl.checked;
    const hasUpper = upcaseEl.checked;
    const hasNumber = numEl.checked;
    const hasSymbol = symbolEl.checked;
    resultEl.innerText = generatePassword(
        length, 
        hasLower, 
        hasUpper, 
        hasNumber, 
        hasSymbol)
});

// Generate Password Function

function generatePassword(){

    let generatedPassword = "";
    
    for(let i = +lenEl.value; i>0; i--){
        let q = Math.floor(Math.random() * 4);
        if(+lenEl.value > 20){
            alert("Max Value is 20!");
            break
        }
        else if(q == 0 && upcaseEl.checked){
            generatedPassword += getRandomUpper();
        }
        else if(q == 1 && lowcaseEl.checked){
            generatedPassword += getRandomLower();
        }
        else if(q == 2 && numEl.checked){
            generatedPassword += getRandomNumber();
        }
        else if(q == 3 && symbolEl.checked){
            generatedPassword += getRandomSymbol();
        }
        else if(upcaseEl.checked){
            generatedPassword += getRandomUpper();
        }
        else if(lowcaseEl.checked){
            generatedPassword += getRandomLower();
        }
        else if(numEl.checked){
            generatedPassword += getRandomNumber();
        }
        else if(symbolEl.checked){
            generatedPassword += getRandomSymbol();
            console.log("finally bro!!")
        }
    }
  return generatedPassword;
}                  
// Copy to clipboard functionality 

clipboardEl.addEventListener('click', ( )=>{

   const textarea = document.createElement('textarea');
   const password = result.innerText;

   if(!password){
    return;
   }
   
   textarea.value = password;
   document.body.appendChild(textarea);
   textarea.select();
   document.execCommand('copy');
   textarea.remove();
   alert("Password copied to clipboard!!")

});
// Generator Functions 

function getRandomLower(){
    var x = Math.floor(Math.random() * 26) + 97;
    return String.fromCharCode(x);
}


function getRandomUpper(){
    var y = Math.floor(Math.random() *26) + 65;
    return String.fromCharCode(y);
}

function getRandomNumber(){
    var z = Math.floor(Math.random() * 10) + 47;
    return String.fromCharCode(z);
}

function getRandomSymbol(){
    const sym = "#$%&'()*+,-./:;<=>?@[^_`{|}~"
    return sym[Math.floor(Math.random() * 28)]
}