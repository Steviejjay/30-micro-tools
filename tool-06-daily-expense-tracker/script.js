// Get elements
const expenseNameInput = document.getElementById('expenseName');
const amountInput = document.getElementById('amount');
const categorySelect = document.getElementById('category');
const addBtn = document.getElementById('addBtn');
const expensesList = document.getElementById('expensesList');
const totalDiv = document.getElementById('total');

// Array to store all expenses
let expenses = [];

addBtn.addEventListener('click', addExpense);

function addExpense() {
  // Get values
  const name = expenseNameInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const category = categorySelect.value;

  // Validate
  if (!name || !amount || amount <= 0) {
    alert('Please enter a valid expense name and amount');
    return;
  }

  // Create expense object
  const expense = {
    name: name,
    amount: amount,
    category: category,
  };

  // Add to array
  expenses.push(expense);

  // Clear inputs
  expenseNameInput.value = '';
  amountInput.value = '';

  displayExpenses();
}

function displayExpenses() {
  // Clear the list
  expensesList.innerHTML = '';

  let total = 0;

  // Loop through each expense
  expenses.forEach((expense) => {
    // Create HTML for each expense
    const expenseDiv = document.createElement('div');
    expenseDiv.className = 'expense-item';

    expenseDiv.innerHTML = `
      <div class="expense-info">
        <div class="expense-name">${expense.name}</div>
        <div class="expense-category">${expense.category}</div>
      </div>
      <div class="expense-amount">$${expense.amount.toFixed(2)}</div>
    `;

    // Add to list
    expensesList.appendChild(expenseDiv);

    // Add to total
    total += expense.amount;
  });

  // Update total display
  totalDiv.textContent = `Total: ${total.toFixed(2)}`;
}
