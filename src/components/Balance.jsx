function Balance({ transactions }) {
    const totalIncome = transactions
        .filter((transaction) => transaction.type === "income")
        .reduce((total, transaction) => total + transaction.amount, 0);

    const totalExpense = transactions
        .filter((transaction) => transaction.type === "expense")
        .reduce((total, transaction) => total + transaction.amount, 0);

    const balance = totalIncome - totalExpense;

    return (
        <section className="balance-card">
            <h2>Current Balance</h2>
            <p className="balance">GHS {balance.toFixed(2)}</p>

            <div className="summary-grid">
                <div>
                    <span>Income</span>
                    <strong className="income">GHS {totalIncome.toFixed(2)}</strong>
                </div>

                <div>
                    <span>Expenses</span>
                    <strong className="expense">GHS {totalExpense.toFixed(2)}</strong>
                </div>
            </div>
        </section>
    );
}

export default Balance;