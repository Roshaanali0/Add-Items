




const requestedWord = "great";

const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${requestedWord}`

let word, phonetic;
let meaningsCount;  //equal to posCount, defsCount
let partsOfSpeech = [];
let defs = [];
let synonyms = [];  //loop over all definitions for each meaning and push all synonyms
let antonyms = [];  //loop over all definitions for each meaning and push all antonyms
async function fetchData () {
    const response = await fetch(URL);
    if(response.ok) {
        console.log("Fetched Data Successfully! \n");
        const temp = await response.json();
        if (temp) {
            console.log(temp)
        }else{
            response.json(400).status("Not good to go")
        }
        const data = temp[0];
        if (data) {
            console.log(data)
        }else{
            response.json(400).status("Not good to go")
        }
        word = data.word;
        phonetic = data.phonetic;
        meaningsCount = data.meanings.length;
        for(let x = 0; x < meaningsCount; x++) {
            partsOfSpeech.push(data.meanings[x].partOfSpeech);
            defs.push(data.meanings[x].definitions[0].definition);
        }

        for(let i = 0; i < meaningsCount; i++) {
                let syns = data.meanings[i].synonyms;
                console.log(syns);
                synonyms = synonyms.concat(syns);
                let ants = data.meanings[i].antonyms;
                antonyms = antonyms.concat(ants);
        }


        //printing the data

        console.log(word, "\n");
        console.log(phonetic, "\n");
        console.log("Definitions: \n");
        for(let x = 0; x < meaningsCount; x++) {
            console.log(partsOfSpeech[x], "\n");
            console.log(defs[x], "\n");
        }
        if(synonyms.length > 0) {
            console.log("Synonyms: \n");
            for(let syn of synonyms) {
                console.log(syn, "\n");
            }
        }
        else {
            console.log(`No synonyms for ${word}`);
        }
        if(antonyms.length > 0) {
            for(let ant of antonyms) {
                console.log(ant, "\n");
            }
            console.log("Antonyms: \n");
        }
        else {
            console.log(`No antonyms for ${word}`);
        }

    }
    else {
        console.error("Error fetching data");
    }
}

function displayData() {
    
}


fetchData();
//displayData();



