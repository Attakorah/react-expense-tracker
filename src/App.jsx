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

    return (
        <main className="app">
            <Header />
            <Balance transactions={transactions} />
            <TransactionForm onAddTransaction={addTransaction} />
            <TransactionList
              transactions={transactions}
              onDeleteTransaction={deleteTransaction}
            />
        </main>
    );
}

export default App;