$(function () {
    $("form").on("submit", digdog);
    $("table").on("click", revealTile);
});


function digdog(event)
{
    /*
    prevent form from submitting
    */
    event.preventDefault();

    //get grid value
    let grid = Number($("input#yardsize").val());

    //create table from user input
    for (let j = 0; j < grid; j++)
    {
    let row = $("<tr>");
    $("table#yard").append(row);

        for (let i = 0; i < grid; i++)
        {
            //create <td> and append to row
            row.append("<td>");
            //randomly hide bones
            let randomNum = (Math.random()*100);
                if (randomNum < 30)
                {
                    //hide bone
                    //add classes undug and hidden-bone
                    $('td:not(.undug)').addClass('hidden-bone undug');
                }
                else
                {
                    //no bone
                    //add class undug
                    $('td:not(.hidden-bone undug)').addClass('undug')
                }
        }
    }

    //display number of bones hidden
    let hiddenBones = $("td.hidden-bone").length;
    $("span#currentstate").text(`Bones Remaining: ${hiddenBones}`);

}


function revealTile (event)
{
    let clickedTile = $(event.target);
    let bonesRemain = $("td.hidden-bone").length;


    if (clickedTile.hasClass("hidden-bone") && bonesRemain === 1)
        {
            //Clicking a yard square with a hidden bone appends bone image
            clickedTile.addClass("dugbone");
            //Clicking a yard square with a hidden bone shows decremented count
            //$("span#currentstate").text(`Bones Remaining: ${bonesRemain-1}`);
            clickedTile.removeClass("hidden-bone undug");
            $("span#currentstate").text("You have won!");

        }
    else if (clickedTile.hasClass("hidden-bone"))
        {
        //Clicking a yard square with a hidden bone appends bone image
        clickedTile.addClass("dugbone");
        //Clicking a yard square with a hidden bone shows decremented count
        $("span#currentstate").text(`Bones Remaining: ${bonesRemain-1}`);
        clickedTile.removeClass("hidden-bone undug");
        }
    else
        {   //Clicking a yard square with no hidden bone turns it brown
            clickedTile.removeClass("undug").addClass("dug");
        }

}






