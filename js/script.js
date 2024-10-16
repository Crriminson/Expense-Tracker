<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Expense Tracker</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <h1>Welcome to Expense Tracker</h1>

    <!-- Image of saving money -->
    <img src="images/save-jar.jpg" alt="Jar of coins labeled 'SAVE'">

    <!-- Add Expense Form -->
    <form id="expenseForm">
        <input type="number" id="amount" placeholder="Amount" required>
        <input type="text" id="category" placeholder="Category" required>
        <input type="date" id="date" required>
        <button type="submit">Add Expense</button>
    </form>

    <!-- Display Expenses -->
    <h2>Expense List</h2>
    <ul id="expenseList"></ul>

    <!-- Passkey protection script -->
    <script>
        let storedPasskey = localStorage.getItem("passkey");
        if (!storedPasskey) {
            let newPasskey = prompt("Set your passkey:");
            localStorage.setItem("passkey", newPasskey);
        } else {
            let userPasskey = prompt("Enter your passkey:");
            if (userPasskey !== storedPasskey) {
                alert("Wrong passkey!");
                window.location.reload();
            }
        }
    </script>
    <!-- Link to the external script -->
    <script src="js/script.js"></script>
</body>
</html>
