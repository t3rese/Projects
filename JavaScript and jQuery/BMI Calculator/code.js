$(function () {
    $("form").on("submit", calculateBMI);
});

function calculateBMI(event) {
    //prevent form from submitting
    event.preventDefault();

    //get  weight value and parse to number
    let weight = Number($("input#weight").val());

    //get  weight value and parse to number
    let height = Number($("input#height").val());

    //calculate BMI
    let bmiResult = (weight / height / height)*703;

    //calculate category
    if(bmiResult <= 18.4)
    {
        $("span#chart").text(`Underweight: ${bmiResult.toFixed(1)}`);
    }
    else if (bmiResult >=18.5 && bmiResult <=24.9 )
    {
        $("span#chart").text(`Healthy: ${bmiResult.toFixed(1)}`);
    }
    else if (bmiResult >=25 && bmiResult <=29.9)
    {
        $("span#chart").text(`Overweight: ${bmiResult.toFixed(1)}`);
    }
    else
    {
        $("span#chart").text(`Obese: ${bmiResult.toFixed(1)}`);
    }

    //create img element
    let pPP = 735/ 195;
    let pPI = (-385) / 23;

    let top = (height - 79) * pPI + 12;
    let left = (weight - 80) * pPP + 23;

    var personImg;
    personImg = new Image(12,23);
    personImg.setAttribute("class", "person");
    personImg.src = "person_icon.png";
    personImg.style.top = top+'px';
    personImg.style.left = left+'px';
    document.getElementById('chart').append(personImg);

}





