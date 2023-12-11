/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var dailyCost = 35;
var numDays = 0;
var totalCost = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
document.querySelectorAll("#monday, #tuesday, #wednesday, #thursday, #friday").forEach(function(element) {
    element.addEventListener("click", function() {
        if (!element.classList.contains("clicked")) {
            element.classList.add("clicked");
            calculateCost();
        }
    });
});

calculateCost();

function calculateCost() {
    var selectedDays = document.querySelectorAll("#monday.clicked, #tuesday.clicked, #wednesday.clicked, #thursday.clicked, #friday.clicked");
    numDays = selectedDays.length;
    totalCost = dailyCost * numDays;
    document.getElementById('calculated-cost').innerHTML = totalCost;
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
document.getElementById("clear-button").addEventListener("click", function() {
    document.querySelectorAll("#monday, #tuesday, #wednesday, #thursday, #friday").forEach(function(element) {
        element.classList.remove("clicked");
    });

    numDays = 0;
    totalCost = 0;

    document.getElementById('calculated-cost').innerHTML = totalCost;
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
document.getElementById("half").addEventListener("click", function() {
    this.classList.add("clicked");
    document.getElementById("full").classList.remove("clicked");
    dailyCost = 20;
    calculateCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
document.getElementById("full").addEventListener("click", function() {
    this.classList.add("clicked");
    document.getElementById("half").classList.remove("clicked");
    dailyCost = 35;
    calculateCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
