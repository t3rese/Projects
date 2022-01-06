$(document).ready(initializePage);

function initializePage() {
    $("area#topHat").on("click", function ()
    {foundIt("<br>You found the cat with a top hat")})

    $("area#bowTie").on("click", function ()
    {foundIt("<br>You found the cat with a red bow tie")})

    $("area#pinkBow").on("click", function ()
    {foundIt("<br>You found the cat with a pink bow")})

    $("area#greenCat").on("click", function ()
    {foundIt("<br>You found the green cat")})

    $("area#whiteBunny").on("click", function ()
    {foundIt("<br>You found the white bunny")})
}

function foundIt(description) {
    $("p#results").append(description);
}
