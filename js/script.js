document.getElementById('expenseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    let newExpense = {
        amount: document.getElementById('amount').value,
        category: document.getElementById('category').value,
        date: document.getElementById('date').value
    };
    expenses.push(newExpense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    alert("Expense added successfully!");
    this.reset(); // Reset the form
    displayExpenses(); // Update the display after adding the expense
});

function displayExpenses() {
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    let expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';
    expenses.forEach(function(expense) {
        let li = document.createElement('li');
        li.textContent = `Amount: ${expense.amount}, Category: ${expense.category}, Date: ${expense.date}`;
        expenseList.appendChild(li);
    });
}

// Call the function to show expenses when the page loads
displayExpenses();


