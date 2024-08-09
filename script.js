const inputEl = document.querySelector("#input");
const buttonEl = document.querySelector(".button");
const vowelEl = document.querySelector("#vowel");
const consonantsEl = document.querySelector("#Consonants");
const lengthEl = document.querySelector("#length");


let countvowel = 0; 

buttonEl.addEventListener("click",()=>{
    const inputVal = inputEl.value;
    vowelEl.innerHTML =`vowel : ${ vowelcount(inputVal)}`;
    consonantsEl.innerHTML =` consonants : ${ consonantcount(inputVal)}`;
    lengthEl.innerHTML = `length of string : ${inputVal.length}`;
})

function Vowel(val){
    if(val == 'a' || val == 'e' || val == 'i' || val == 'o' || val == 'u'){
        return true;
    }
    else{
        return false;
    }
}

function vowelcount(inputVal){
    let vowelCounter = 0;
    for(let i=0; i<inputVal.length; i++){
        if(Vowel(inputVal[i])){
            vowelCounter++;
        }
    }

    return vowelCounter;
}

function consonantcount(inputVal){
    let consonantCounter = 0;
    for(let i=0; i<inputVal.length; i++){
        if(Vowel(inputVal[i]) == false){
            consonantCounter++;
        }
    }

    return consonantCounter;
}