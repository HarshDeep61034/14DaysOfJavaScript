// Accesing DOM Elements

const wordEl = document.getElementById('word');
const resultEl = document.getElementById('result');
const wordSpanEl = document.getElementById('word-span');
const infoTextEl = document.getElementById('footer');
const audioEl = document.getElementById('audio');
const meaningEl = document.getElementById('meaning');

// API fetching & assigning function

async function fetchAPI(word) {
    try {

        infoTextEl.style.display = "block";
       
        infoTextEl.innerText = `Searching the meaning of ${word}`;

        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        
        const result = await fetch(url).then((res) => res.json());

        if (result.title) {

            meaningEl.style.display = "block";

            wordSpanEl.innerText = word;

            meaningEl.innerText = "N/A";

            audioEl.style.display = "none";
        }
        else {

            wordSpanEl.innerText = result[0].word;

            meaningEl.innerText = result[0].meanings[0].definitions[0].definition;

            audioEl.style.display = "inline-flex";
            audioEl.src = result[0].phonetics[0].audio;
        }

        resultEl.style.display = "block";

        infoTextEl.style.display = "none";

    } catch (error) {
        console.log(error);
    }


}

// Event listen to identify Enter Key pressed!

wordEl.addEventListener("keyup", (e) => {
    if (e.target.value && e.key === "Enter") {
        fetchAPI(e.target.value);
    }
})