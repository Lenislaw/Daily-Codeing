// Lisen for submit

document.getElementById("loan-form").addEventListener("submit", function(e) {
  //Hide results
  document.getElementById("results").style.display = "none";
  document.getElementById("loading").style.display = "block";
  
  setTimeout(calculateResults, 3000);

  //Show loader;
  e.preventDefault();
});

// Calculate Results
function calculateResults(e) {
  console.log("calc");
  // UI Vars

  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

    //Show results
    document.getElementById("results").style.display = "block";
    // Hide loader
    document.getElementById("loading").style.display = "none";
    // Show allert
    alert.style.display = "block";
  } else {
    console.log(123);
    showError("Please check your values");
  }
}
function showError(error) {
  // Hide loader
  document.getElementById("loading").style.display = "none";
  //Get elements
  const card = document.querySelector(".card");
  const loading = document.querySelector("#loading");
  console.log(card);
  if (
    card.lastElementChild.previousElementSibling.previousElementSibling.classList.contains(
      "alert"
    )
  ) {
    return;
  } else {
    //Create a div
    const errorDiv = document.createElement("div");

    //Add class
    errorDiv.className = "alert";

    //Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above btn
    card.insertBefore(errorDiv, loading);

    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
  }
}

function clearError() {
  document.querySelector(".alert").remove();
}
