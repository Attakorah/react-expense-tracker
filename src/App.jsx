import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
    const [transactions, setTransactions] = useState(() => {
      const savedTransactions = localStorage.getItem("transactions");

      if (savedTransactions) {
        return JSON.parse(savedTransactions);
      }

      return [
        {
            id: 1,
            description: "Freelance project",
            amount: 500,
            type: "income"
        },
        {
            id: 2,
            description: "Internet bundle",
            amount: 50,
            type: "expense"
        }
      ];
    });

      const [filter, setFilter] = useState("all");

      useEffect(() => {
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions]);

    function addTransaction(transaction) {
        setTransactions((prevTransactions) => [
            ...prevTransactions,
            transaction
        ]);
    }

    function deleteTransaction(id) {
      setTransactions((prevTransactions) =>
          prevTransactions.filter((transaction) => transaction.id !== id)
      );
    }

    function clearAllTransactions() {
      setTransactions([]);
    }

    const filteredTransactions = transactions.filter((transaction) => {
      if (filter === "income") {
          return transaction.type === "income";
      }

      if (filter === "expense") {
          return transaction.type === "expense";
      }

      return true;
    });

    return (
        <main className="app">
            <Header />
            <Balance transactions={transactions} />
            <TransactionForm onAddTransaction={addTransaction} />
            <section className="filter-card">
              <button
                    className={filter === "all" ? "active-filter" : ""}
                    onClick={() => setFilter("all")}
                >
                    All
              </button>

              <button
                    className={filter === "income" ? "active-filter" : ""}
                    onClick={() => setFilter("income")}
                >
                    Income
              </button>

              <button
                    className={filter === "expense" ? "active-filter" : ""}
                    onClick={() => setFilter("expense")}
                >
                    Expense
              </button>
            </section>

            {transactions.length > 0 && (
              <button className="clear-all-btn" onClick={clearAllTransactions}>
                Clear All Transactions
              </button>
            )}
            
            <TransactionList
              transactions={filteredTransactions}
              onDeleteTransaction={deleteTransaction}
            />
        </main>
    );
}

export default App;