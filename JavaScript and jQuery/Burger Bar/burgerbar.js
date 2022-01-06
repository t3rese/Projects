$(function () {
    $("#basics").on("click", "img", addToOrder);
    $("#extras").on("click", "img", addToOrder);
    $("#condiments").on("click", "img", addToOrder);
    $("#order").on("click", "img", removeFromOrder);
});

function addToOrder(event) {
    //get ingredient that was clicked
    let selectedIngredient = $(event.target);
    //remove ingredient
    selectedIngredient.remove();
    //add ingredient to order div
    $("#order").append(selectedIngredient);
}

function removeFromOrder(event) {
    let removeIngredient = $(event.target);
    //let ingredient = $("img").eq(removeIngredient).data("category");
    
    removeIngredient.remove();
    $("#basics").append(removeIngredient);
    //$("#extras").append(ingredient);
    //$("#condiments").append(ingredient);
}


