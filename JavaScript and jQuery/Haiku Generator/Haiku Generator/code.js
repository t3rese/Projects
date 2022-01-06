$(function () {
    $("form").on("submit", addWord);
    $("button").on("click", generateHaiku);
});

let wordsBySyllables = [
    [], // 0-syllable words (ignore)
    ["act", "beg", "bit", "at"], // 1-syllable words
    ["alone", "apple", "windy"], // 2-syllable words
    ["mineral", "recipe","realize" ], // 3-syllable words
    ["architecture", "delivery", "society"], // 4-syllable words
    ["negotiation", "imagination"], // 5-syllable words
    ["responsibility", "vulnerability", "Imperialism"], // 6-syllable words
    ["unconstitutionally","superficiality", "irreversibility"]  // 7-syllable words
    ];

function addWord(event) {
    event.preventDefault();

    // Get the word from the text box
    let word = $("input#word").val();

    // Split word by a delimiter to count syllables
    let wordSyllables = word.split("-");

    // use syllable count to add to an appropriate array
    if (wordSyllables.length < 8) {
        $("p#error").empty();
        wordsBySyllables[wordSyllables.length].push(wordSyllables.join(""));
    } else {
        // error if too many syllables
        $("p#firstLine").empty();
        $("p#secondLine").empty();
        $("p#thirdLine").empty();
        $("p#error").text("Word must be between 1 and 7 syllables");
    }

}

function generateHaiku () {

    //$("p#output").empty();
    let firstLine = generateFiveSyllableLine();
    let secondLine = generateSevenSyllableLine();
    let thirdLine = generateFiveSyllableLine();
    $("p#error").empty();
    $("p#firstLine").text(firstLine);
    $("p#secondLine").text(secondLine);
    $("p#thirdLine").text(thirdLine);

}


function generateFiveSyllableLine ()
{
    let line = [];
    let syllableCount = 0;
        do
        {
            //generate random number from 1 - 5
            let randomNum = (Math.floor(Math.random() * 5) + 1);
            if ( (syllableCount + randomNum) <= 5)
            {
                let randomWord;
                //random column number
                let randomNum2 = Math.floor(Math.random()*wordsBySyllables[randomNum].length);
                randomWord = wordsBySyllables [randomNum] [randomNum2];
                line.push(randomWord);
                syllableCount += randomNum;
            }

        }while (syllableCount !==5);
    return line;
}

function generateSevenSyllableLine ()
{
    let line = [];
    let syllableCount = 0;
    do
    {
        //generate random number from 1 - 7
        let randomNum = (Math.floor(Math.random() * 7) + 1);
        if ( (syllableCount + randomNum) <= 7)
        {
            let randomWord;
            let randomNum2 = Math.floor(Math.random()*wordsBySyllables[randomNum].length);
            randomWord = wordsBySyllables [randomNum] [randomNum2];
            line.push(randomWord);
            syllableCount += randomNum;
        }
    }while (syllableCount !==7);
    return line;
}


