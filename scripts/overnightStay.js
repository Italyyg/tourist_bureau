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
    console.log(`The total room amount: $${roomTotal} for the number of nights of ${Number(stayForm.visitingDays.value)} on the day ${stayForm.checkIn.value}`);



    let priceOff = 0;
    if (stayForm.discount.value === "senior") {

        //attaching the discoun to the value
        priceOff = (10 / 100);

    }
    if (stayForm.discount.value === "military") {

        //attaching the discoun to the value
        priceOff = (20 / 100);

    }

    //console.log(priceOff)
    //testing if it works
    // console.log("you submitted the form!");
    //console.log(stayForm.checkIn.value);

let discountRoom = roomTotal- (roomTotal*priceOff)
let taxAmount = discountRoom*(12/100);

let fullAmount = discountRoom + taxAmount;
console.log("Total due $" + fullAmount)

let message =`
<div> The original Room cost: $${roomTotal}</div>
<div>The discount applied: ${priceOff.toFixed(2)}</div>
<div>The discounted room price: $${discountRoom}</div>
<div>Tax: $${taxAmount.toFixed(2)}</div>
<div>Total cost of stay: $${fullAmount.toFixed(2)}</div>
`
//adding message to screen
document.querySelector("#results").innerHTML=message;


}
function getRoomRate(checkIn, roomType) {

    //get the room based on date and room type
    let rate = 150;
    let date = checkIn.split("-")[1]
    //console.log(date)

    if (roomType === "suite") {
        rate = 210;
    }

    if (date >= 6 && date <= 8) {
        rate = 250;
        // console.log("holis");
        if (roomType === "suite") {

            rate = 350;
        }
    }
    //console.log(rate)
    return rate




}





