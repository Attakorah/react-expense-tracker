import { useState } from "react";

function TransactionForm({ onAddTransaction }) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("income");

    function handleSubmit(event) {
        event.preventDefault();

        if (description.trim() === "" || amount === "") {
            return;
        }

        const newTransaction = {
            id: Date.now(),
            description: description.trim(),
            amount: Number(amount),
            type
        };

        onAddTransaction(newTransaction);

        setDescription("");
        setAmount("");
        setType("income");
    }

    return (
        <section className="section-card">
            <h2>Add Transaction</h2>

            <form className="transaction-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                />

                <select
                    value={type}
                    onChange={(event) => setType(event.target.value)}
                >
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>

                <button type="submit">Add Transaction</button>
            </form>
        </section>
    );
}

export default TransactionForm;