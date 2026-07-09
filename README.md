React Expense Tracker

A modern expense tracker application built with React and Vite.

This project is part of my journey toward becoming a Full-Stack AI Developer. It helped me practice React component architecture, state management, forms, filtering, local storage, and financial calculations.

Features
Add income transactions
Add expense transactions
Delete transactions
Clear all transactions
Filter transactions by:
All
Income
Expense
Calculate total income
Calculate total expenses
Calculate current balance
Local storage persistence
Responsive finance dashboard UI
Technologies Used
React
Vite
JavaScript
CSS
Git
GitHub
React Concepts Practiced
Components
Props
useState
useEffect
Controlled inputs
Form handling
Event handling
Rendering lists with .map()
Filtering arrays with .filter()
Calculating totals with .reduce()
Conditional rendering
Local storage
Project Structure
react-expense-tracker/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Balance.jsx
│   │   ├── TransactionForm.jsx
│   │   ├── TransactionList.jsx
│   │   └── TransactionItem.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
Components
Header

Displays the project title and description.

Balance

Calculates and displays total income, total expenses, and current balance.

TransactionForm

Handles form input for adding new income or expense transactions.

TransactionList

Displays all filtered transactions.

TransactionItem

Displays a single transaction and allows it to be deleted.

Installation and Setup

Clone the repository:

git clone https://github.com/Attakorah/react-expense-tracker.git

Go into the project folder:

cd react-expense-tracker

Install dependencies:

npm install

Run the development server:

npm run dev

Then open the local URL shown in your terminal, usually:

http://localhost:5173/
Build for Production
npm run build
Author

Attakorah Emmanuel

Computer Science student at the University of Energy and Natural Resources.

Goal: To become a Full-Stack AI Developer building AI-powered web and mobile applications.

Status

Completed ✅