//ELEMENTS
const wordSearchForm = document.getElementById('word-search-form'); //FORM
const copyBtn = document.getElementById('copy-btn'); //COPY-BUTTON
const contentBody = document.querySelector('.content-body'); //CONTENT BODY
const synonymsWordListContainer = document.getElementById('synonyms-word-list'); //SYNONYMS WORDS LIST CONTAINER
const antonymsWordListContainer = document.getElementById('antonyms-word-list'); //ANTONYMS WORDS LIST CONTAINER
const loadingSpinner = document.getElementById('spinner'); //LOADING SPINNER
let wordNotFound = true; 

//GETTING INPUT FROM HTML
const getInputWord = () => {
    wordSearchForm.addEventListener('submit', (event) => {
        event.preventDefault(); //TO AVOID THE DEFAULT ACTION ASSOSIATED WITH SUBMIT EVENT IN JS
        let searchWord = wordSearchForm.search_word.value; //GETTING VALUE OR WORD ENTERED BY USER IN INPUT TAG FROM HTML
        fetchSynWords(searchWord);
        contentBody.style.display = "none";
    });
}

getInputWord();

//FETCHING THE DATA THROUGH API
const fetchSynWords = async(searchWord) => {
    let synonymsUrl = `https://api.datamuse.com/words?rel_syn=${searchWord}`; //URL FOR SYNONYMS
    let antonymsUrl = `https://api.datamuse.com/words?rel_ant=${searchWord}`; //URL FOR ANTONYMS
    try{
        loadingSpinner.style.display = "flex";
        let synonymsResponse = await fetch(synonymsUrl); //FETCHING SYNONYMS DATA
        let antonymsResponse = await fetch(antonymsUrl); //FETCHING ANTONYMS DATA
        let synonymsFetchedData = await synonymsResponse.json(); //CONVERTING SYNONYMS DATA
        let antonymsFetchedData = await antonymsResponse.json(); //CONVERTING ANTONYMS DATA
        loadingSpinner.style.display = "none";
        renderWords(synonymsFetchedData, antonymsFetchedData);
    } catch(error){
        console.log(error);
    }
}

//DISPLAYING THE FETCHED DATA IN DOM
const renderWords = (wordsArr1, wordsArr2) => {
    let htmlCode;
    if(wordsArr1.length > 0){
        wordNotFound = false;
        htmlCode = wordsArr1.map(word => {
            return `<span class = "word-item"> ${word.word} </span>`;
        });
        synonymsWordListContainer.innerHTML = htmlCode.join("");
        htmlCode = wordsArr2.map(word => {
            return `<span class = "word-item"> ${word.word} </span>`;
        });
        antonymsWordListContainer.innerHTML = htmlCode.join("");
    } else {
        wordNotFound = true;
        htmlCode = "No search results found! <br/> Please check the spelling!";
        synonymsWordListContainer.innerHTML = htmlCode;
        antonymsWordListContainer.innerHTML = htmlCode;
    }
    contentBody.style.display = "block";
}