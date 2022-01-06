$(function () {
    $("#bulletPoint").hide();
    $("#bulletPoint2").hide();
    $("#addItem").on("click", addToList);
    $("#clearList").on("click", clearList);
    $("#userList").on("click", removeFromList);
});

function addToList(event) {
    event.preventDefault();
    //get user input
    let newItem = $("#itemToBuy").val();
    //add to list
    $("#userList li:last").after('<li>' + newItem + '</li>');
    //clear text box
    $("#itemToBuy").val(' ');
}

function removeFromList(event){
    let clickedItem = $(event.target);
    clickedItem.remove();
    $("#purchasedList").append(clickedItem);
}

function clearList(event) {
    event.preventDefault();
    $("#userList").empty();
    var nli = document.createElement("li");
    nli.innerHTML = "";
    document.getElementById("userList").appendChild(nli);
    $(nli).hide();
}
