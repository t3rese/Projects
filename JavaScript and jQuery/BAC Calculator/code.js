$(function () {
    $("form").on("submit", calculateBAC);
}
);

function calculateBAC(event) {
    //prevent form from submitting
    event.preventDefault();

    //get  weight value and parse to number
    let weight = Number($("input#weightInPounds").val());

    //get beers value and parse to number
    let beers = Number($("input#numberBeer").val());

    //get wine value and parse to number
    let wine = Number($("input#glassWine").val());

    //get liquor value and parse to number
    let liquor = Number($("input#ouncesLiquor").val());

    //get hours value and parse to number
    let hours = Number($("input#firstDrink").val());

    //calculate total liquid ounces
    let ounces = (beers * 0.54) + (wine * 0.6) + (liquor * 0.6)

    //calculate BAC
    let bacResult = ((ounces * 7.5)/weight) - (hours * 0.015)

    //print result in bacResult paragraph
    $("p#bac").text(`Your BAC is ${bacResult.toFixed(3)}%`);

    //move slider
    $("#slider").val(bacResult);


}

