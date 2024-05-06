"use strict"
console.log("Im Working!");

window.onload = function () {

    //we are grabbing the form to making easier to work with and no constantly call it
    let overNightForm = document.querySelector("#overnightForm");

    //when sumbitted, it will run the function below
    overNightForm.addEventListener("submit", vacationFee);

}
function vacationFee(event) {

    //keeps the form from submitting and refreshing the page
    event.preventDefault();

    //lets get the form from the event and assign it to a variable
    //we have selected the form so now with target, we can select ID's easier
    let theForm = event.target


}