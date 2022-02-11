// Grabbing the input fields
var calcBtn = document.getElementById("calculateBtn");
var people = document.getElementById("numOfPeople");
var tipOther = document.getElementById("other");

// Checking to see if they exist/non-empty
if (calcBtn && people) {
  calcBtn.addEventListener("click", getBill);
}

// Calculate Tip
function getBill() {
  //Getting individual values and converting string to Number
  var amount = Number(document.getElementById("billTotal").value);
  var tipAmount = Number(other.value);
  var totalPeople = Number(people.value);

  //Calculate amounts
  var tipPerPerson = tipAmount / totalPeople;
  var totalPerPerson = (amount + tipAmount) / totalPeople;

  //Write to input fields
  document.getElementById("tipPerPerson").value = tipPerPerson;
  document.getElementById("totalPerPerson").value = totalPerPerson;
}
