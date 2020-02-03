// class Transaction
class Transaction {
  constructor(amount, msg, typeOne, typeTwo, id, date) {
    this.amount = amount;
    this.typeOne = typeOne;
    this.typeTwo = typeTwo;
    this.msg = msg;
    this.id = id;
    this.date = date;
  }
}
//class UI to create elements in DOM
class UI {
  // Add transaction to list function
  addTransactionToList(transaction) {
    //Create element div
    const newTransaction = document.createElement("div");
    // "If statemet" concerning type of transaction and change sign  + / - before amount
    if (transaction.typeOne === "expend") {
      transaction.amount = `-${transaction.amount}`;
    } else {
      transaction.amount = `+${transaction.amount}`;
    }
    // "If statement" concerning empty msg value
    if (transaction.msg === "") {
      transaction.msg = currentList.options[currentList.selectedIndex].text;
    }
    // First letter from input comment transformed into big one in div transaction element
    transaction.msg =
      transaction.msg.charAt(0).toUpperCase() +
      transaction.msg.slice(1, transaction.msg.length);
    // Add class item to created div element
    newTransaction.classList.add("item");
    newTransaction.classList.add(`${transaction.typeOne}`);
    // "Switch" to select the appropriate transaction icon
    switch (transaction.typeTwo) {
      case "salary":
        transaction.typeTwo = `<i class="fas fa-money-bill-wave"></i>`;
        break;
      case "own-business":
        transaction.typeTwo = `<i class="fas fa-business-time"></i>`;
        break;
      case "sale":
        transaction.typeTwo = `<i class="fas fa-file-export"></i>`;
        break;
      case "social-benefit":
        transaction.typeTwo = `<i class="fab fa-accessible-icon"></i>`;
        break;
      case "award":
        transaction.typeTwo = `<i class="fas fa-trophy"></i>`;
        break;
      case "financial":
        transaction.typeTwo = `<i class="fas fa-coins"></i>`;
        break;
      case "real-estate":
        transaction.typeTwo = `<i class="fas fa-sign"></i>`;
        break;
      case "other":
        transaction.typeTwo = `<i class="fas fa-dice"></i>`;
        break;
      case "food":
        transaction.typeTwo = `<i class="fas fa-shopping-basket"></i>`;
        break;
      case "bills":
        transaction.typeTwo = `<i class="fas fa-home"></i>`;
        break;
      case "agd-rtv":
        transaction.typeTwo = `<i class="fas fa-tv"></i>`;
        break;
      case "household-chemicals":
        transaction.typeTwo = `<i class="fas fa-flask"></i>`;
        break;
      case "restaurant":
        transaction.typeTwo = `<i class="fas fa-utensils"></i>`;
        break;
      case "drugs":
        transaction.typeTwo = `<i class="fas fa-smoking"></i>`;
        break;
      case "entertainment":
        transaction.typeTwo = `<i class="fas fa-video"></i>`;
        break;
      case "renovation":
        transaction.typeTwo = `<i class="fas fa-hammer"></i>`;
        break;
      case "medicine":
        transaction.typeTwo = `<i class="fas fa-stethoscope"></i>`;
        break;
      case "gift":
        transaction.typeTwo = `<i class="fas fa-gifts"></i>`;
        break;
      case "outfit":
        transaction.typeTwo = `<i class="fas fa-tshirt"></i>`;
        break;
      case "fuel":
        transaction.typeTwo = `<i class="fas fa-gas-pump"></i>`;
        break;
      case "pet":
        transaction.typeTwo = `<i class="fas fa-paw"></i>`;
        break;
      case "hobby":
        transaction.typeTwo = `<i class="fas fa-icons"></i>`;
        break;
    }
    // Add HTML in new element
    newTransaction.innerHTML = `
    <div class="amount"><div class="number-amount">${transaction.amount}</div><div class="cur">PLN</div></div>
        <div class="comment">${transaction.msg}</div>
        <div class="type">${transaction.typeTwo}</div>
        <div class="date">${transaction.date}</div>
      <div class="id"><p>ID Transakcji:</p><div class="id-number"> ${transaction.id}</div></div>
         <a href="#" class="delete"><i class="fas fa-times"></i></a>
    `;
    // Add element into DOM
    if (transactionList.firstChild === null) {
      transactionList.appendChild(newTransaction);
    } else {
      transactionList.insertBefore(
        newTransaction,
        transactionList.firstElementChild
      );
    }
    const ui = new UI();
    ui.resume();
  }
  // Add transaction to list from Local Storage function
  addTransactionToListFromLocalStorage(transaction) {
    //Create element div
    const newTransaction = document.createElement("div");
    // Add class item to created div element
    newTransaction.classList.add("item");
    newTransaction.classList.add(`${transaction.typeOne}`);
    // Add HTML to new element
    newTransaction.innerHTML = `
        <div class="amount"><div class="number-amount">${transaction.amount}</div><div class="cur"> PLN</div></div>
        <div class="comment">${transaction.msg}</div>
        <div class="type">${transaction.typeTwo}</div>
        <div class="date">${transaction.date}</div>
        <div class="id"><p>ID Transakcji:</p><div class="id-number"> ${transaction.id}</div></div>
         <a href="#" class="delete"><i class="fas fa-times"></i></a>
    `;
    // Add element into DOM
    if (transactionList.firstChild === null) {
      transactionList.appendChild(newTransaction);
    } else {
      transactionList.insertBefore(
        newTransaction,
        transactionList.firstElementChild
      );
    }
    const ui = new UI();
    ui.resume();
  }
  // Show alert function
  showAlert(msg, className) {
    // Alert inner text
    alert.innerText = msg;
    // Add class error or success
    alert.classList.add(className);
    // Reset amount input value
    amountInput.value = "";
    // Focus again into amount input
    amountInput.focus();
    // Remove class with display:block after 3s
    setTimeout(function() {
      alert.classList.remove(className);
    }, 3000);
  }
  // Delate Transaction function
  deleteTransaction(target) {
    //Select right element
    if (target.parentElement.className === "delete") {
      //Remove right element
      target.parentElement.parentElement.remove();
    }
    // Init class UI
    const ui = new UI();
    // Function resume();
    ui.resume();
  }
  //Clear inputs values
  clearInputFields() {
    amountInput.value = "";
    commentInput.value = "";
  }
  // Display select list typeTwo on change between select list expend typeOne and select list income typeOne
  displayOnselectedList() {
    if (typeOneSelect.selectedIndex === 0) {
      selectIncomeList.classList.add("type-off");
      selectExpandList.classList.remove("type-off");
      // Set currnet displayed list
      currentList = expendList;
      return currentList;
    } else {
      selectExpandList.classList.add("type-off");
      selectIncomeList.classList.remove("type-off");
      // Set currnet displayed list
      currentList = incomeList;
      return currentList;
    }
  }
  // Resume function
  resume() {
    //Set balance 0
    let balance = 0;
    const allTransactions = document.querySelectorAll(".number-amount");
console.log(1);
    const info = document.querySelector(".balance");
    // Init UI class
    const ui = new UI();
    console.log(2);
    // Get values from transaction div's
    allTransactions.forEach(transaction => {
      balance += Number(transaction.innerText);
      console.log(3);
    });
    let goodBalance = balance.toFixed(2);
    // Create msg in div balance
    const basicMsg = "Brak transakcji";
    const msg = `Stan konta: ${goodBalance} PLN`;
    console.log(4);
    //"if statement" concerning msg in balance div
    console.log("All tran:",allTransactions.length)
    if (allTransactions.length === 0) {
      info.innerText = basicMsg;
      console.log(5);
    } else {
      info.innerText = msg;
      console.log(6);
    }
    console.log("All tran:",allTransactions.length)
    // Set styles in balance div
    if (balance > 0) {
      ui.resetClass(resume, resume.classList.length);
      resume.classList.add("plus");
    } else if (balance < 0) {
      ui.resetClass(resume, resume.classList.length);
      resume.classList.add("minus");
    } else {
      ui.resetClass(resume, resume.classList.length);
      resume.classList.add("zero");
    }
  }
  // Reset classList function
  resetClass(element, classListLength) {
    if (classListLength > 0) {
      element.classList.remove(element.classList[0]);
    }
  }
}
// class Local Storage
class Store {
  // get Transactions from Local Storage
  static getTransations() {
    let transactions;
    if (localStorage.getItem("transactions") === null) {
      transactions = [];
    } else {
      transactions = JSON.parse(localStorage.getItem("transactions"));
    }
    return transactions;
  }
  // Display Transactions from Local Storage function
  static displayTransations() {
    const transactions = Store.getTransations();

    transactions.forEach(transaction => {
      const ui = new UI();

      // Display in UI transactions and balance from Local Storga
      ui.addTransactionToListFromLocalStorage(transaction);
      ui.resume();
    });
  }
  // Add transaction to Local Storage
  static addTransaction(transaction) {
    const transactions = Store.getTransations();
    transactions.push(transaction);

    localStorage.setItem("transactions", JSON.stringify(transactions));
  }
  // Remove transaction from Local Storage
  static removeTransaction(id) {
    const transactions = Store.getTransations();

    transactions.forEach((transaction, index) => {
      if (transaction.id === id) {
        transactions.splice(index, 1);
      }
    });
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }
  // Get id from Local Storage
  static getId() {
    let idNumber;
    if (localStorage.getItem("id") === null) {
      idNumber = 0;
    } else {
      idNumber = JSON.parse(localStorage.getItem("id"));
    }
    return idNumber;
  }
  // Set id in Local Storage
  static setId(id) {
    let idNumber = Store.getId();
    idNumber = id;
    localStorage.setItem("id", JSON.stringify(idNumber));
  }
}

// Variables
const amountInput = document.getElementById("amount");
const typeOneSelect = document.getElementById("select-type");
const selectExpandList = document.getElementById("select-type-expand");
const selectIncomeList = document.getElementById("select-type-income");
const expendList = document.getElementById("expend-list");
const incomeList = document.getElementById("income-list");
const commentInput = document.getElementById("comment");
const sumbmitBtn = document.getElementById("submit");
const alert = document.getElementById("alert");
const transactionList = document.getElementById("collection");
const resume = document.getElementById("resume");

let currentList = expendList;

// Event Listener for change select lists
typeOneSelect.addEventListener("change", function() {
  const ui = new UI();

  ui.displayOnselectedList();
});
// Event Listener for submit button
sumbmitBtn.addEventListener("click", function(e) {
  e.preventDefault();
  // Get values
  let amount = Number(amountInput.value).toFixed(2);
  const typeOne = typeOneSelect.options[typeOneSelect.selectedIndex].value;
  const typeTwo = currentList.options[currentList.selectedIndex].value;

  let msg = commentInput.value;
  let id = parseInt(Store.getId(), 10);
  // Create transaction date
  const date = new Date();
  const day = date.getUTCDate();
  let month = date.getUTCMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  const year = date.getUTCFullYear();
  const transactionDate = `${day}.${month}.${year}`;

  // Create Transaction object
  const transaction = new Transaction(
    amount,
    msg,
    typeOne,
    typeTwo,
    id,
    transactionDate
  );
  id++;
  // Set ID in Local Storage
  Store.setId(id);
  // Init class UI
  const ui = new UI();
  // Validate
  if (amount <= 0) {
    // Error alert
    ui.showAlert("Kwota minimalna to 1", "error");
  } else {
    // Add transaction to list
    ui.addTransactionToList(transaction);
    
    // Add transaction to local storge
    Store.addTransaction(transaction);
    
    // Success alert
    ui.showAlert("Sukces, dodano transakcje do listy", "success");
    
    // Clear inputs values
    ui.clearInputFields();
    
    // Update Balance
    ui.resume();
    
  }
  
});

// Delete transaction Event Listener
transactionList.addEventListener("click", function(e) {
  // Init class UI
  const ui = new UI();
  // Delete transaction from DOM
  ui.deleteTransaction(e.target);
  // Delete transaction from Local Storage
  Store.removeTransaction(
    parseInt(
      e.target.parentElement.parentElement.firstElementChild.nextElementSibling
        .nextElementSibling.nextElementSibling.nextElementSibling
        .firstElementChild.nextElementSibling.textContent,
      10
    )
  );
  // Success alert
  ui.showAlert("Transakcja anulowana", "success");
  ui.resume();
});

// Display transactions DOM loaded
window.addEventListener("DOMContentLoaded", function() {
  // Display transactions from Local Storage
  Store.displayTransations();
  // Init class UI
  const ui = new UI();
  // Display balance
  ui.resume();
});
