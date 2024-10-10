//
//For now pretend that these values are coming a user filling out aform
//const bill =100
//const numberOfGuests = 4
//const tipPercentage = 20

//The  () contains parameters (params)
//params allows us to pass info into the function
//function can have as many params as you you need , we just comma sep then
//the names in the params have no relation to any any names elsewher in the code

//function calculateTipAmount(bill,tip) {
    //variables /constants you create within a funcion
    //only exist within the function

//const tipAmount = bill * (tip / 100)

    //Anycode within this {} belong to this function
    //return is how we get info back out of function
    //it doesnt make the tip amount variable exists outside the function
    //it just returns the value not the
    //return also stops the function from doing anything else

//return tipAmount
//}

//calucalate howmuch the tip will be

//const tipAmount = calculateTipAmount(bill, tipPercentage)

 






//get the total bill (bill+tip)
//const billPlusTip = bill + tipAmount
//console.log({billPlusTip})

//divide that total bill between the guests
//const  amountPerGuest =billPlusTip /numberOfGuests
//console.log({amountPerGuest})//

//display the total bill and how much each guest need to pay
//replace our hard coded amounts,with actual user inputs
// For now, pretend that these values are coming a user filling out a form
function calculateTipAmount(bill, tip) {
    return bill * (tip / 100)
}

function calculateBillPlusTip(bill, tip) {
    return bill + tip
}

function splitBill(totalBill, numberOfGuests) {
    return totalBill / numberOfGuests
}


function handleSubmit(event) {
    event.preventDefault()
   

    //Access the values of form inputs
    //this must be withinour handle submit because otherwise the form wonnt be submitted yet
    const bill = parseFloat(document.querySelector('#bill').value)
    const numberOfGuests = parseInt(document.querySelector('#guests').value)
    const tipPercentage = parseFloat(document.querySelector('#tip').value)
   
   
    const tipAmount = calculateTipAmount(bill, tipPercentage)
    
    const billPlusTip = calculateBillPlusTip(bill, tipAmount)
    const amountPerGuest = splitBill(billPlusTip, numberOfGuests)


    const resultsBox = document.querySelector('#results')

    
    resultsBox.innerHTML = `The tip is £${tipAmount.toFixed(2)}. The total bill is £${billPlusTip.toFixed(2)}.  Each person must pay £${amountPerGuest.toFixed(2)}`

   
    
    console.log('bill,guests,tip')
}

const form = document.querySelector('form')
//callback is when we pass a function into another function as a param

form.addEventListener('submit',handleSubmit)



// For now, pretend that these values are coming a user filling out a form
const bill = 100
const numberOfGuests = 4
const tipPercentage = 20

// Calculate how much the tip will be


// Get the total bill (bill + tip)


// Dividide that total bill between the guests




// Display the total bill, and how much each guest needs to pay
// Replace our hard coded amounts, with actual user input