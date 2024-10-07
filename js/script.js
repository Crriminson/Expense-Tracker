// Event listener for form submission
document.getElementById('expenseForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Retrieve the current list of expenses from localStorage, or initialize an empty array if none exist
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    // Create a new expense object with the form input values
    let newExpense = {
        amount: document.getElementById('amount').value,
        category: document.getElementById('category').value,
        date: document.getElementById('date').value
    };

    // Add the new expense to the expenses array
    expenses.push(newExpense);

    // Store the updated expenses array back into localStorage
    localStorage.setItem('expenses', JSON.stringify(expenses));

    // Notify the user that the expense was added
    alert("Expense added successfully!");

    // Reset the form inputs
    this.reset();

    // Refresh the displayed list of expenses
    displayExpenses();
});

// Function to display expenses from localStorage
function displayExpenses() {
    // Retrieve the expenses from localStorage, or initialize an empty array if none exist
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    // Get the expenseList element where expenses will be displayed
    let expenseList = document.getElementById('expenseList');

    // Clear any existing content in the expense list to avoid duplicate entries
    expenseList.innerHTML = '';

    // Loop through the expenses and create a list item for each
    expenses.forEach(function(expense) {
        // Create a new list item element
        let li = document.createElement('li');

        // Set the text content of the list item to show the expense details
        li.textContent = `Amount: ${expense.amount}, Category: ${expense.category}, Date: ${expense.date}`;

        // Append the list item to the expense list
        expenseList.appendChild(li);
    });
}

// Call the displayExpenses function when the page loads to show any previously added expenses
displayExpenses();
