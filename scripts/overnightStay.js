"use strict"
console.log("Im Working!");

window.onload = function () {

    //we are grabbing the form to making easier to work with and no constantly call it
    let stayForm = document.querySelector("#overnightForm");

    //when sumbitted, it will run the function below
    stayForm.addEventListener("submit", vacationFee);

}
function vacationFee(event) {

    //keeps the form from submitting and refreshing the page
    event.preventDefault();

    //lets get the form from the event and assign it to a variable
    //we have selected the form so now with target, we can select ID's easier
    let stayForm = event.target;
    let roomTotal = stayForm.visitingDays.value * getRoomRate(stayForm.checkIn.value, stayForm.roomType.value)

    //testing if it works
     console.log("you submitted the form!");
     console.log(stayForm.checkIn.value);


}
function getRoomRate(checkIn, roomType) {

    //get the room based on date and room type
    let rate = 150;
    let date= checkIn.split("-")[1]
    console.log(date)

    if (roomType === "suite") {
        rate = 250;
    }

    return 150;




}

