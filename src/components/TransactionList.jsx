import TransactionItem from "./TransactionItem";

function TransactionList({ transactions, onDeleteTransaction }) {
    return (
        <section className="section-card">
            <h2>Transactions</h2>

            {transactions.length === 0 ? (
                <p className="empty-state">No transactions yet.</p>
            ) : (
                <ul className="transaction-list">
                    {transactions.map((transaction) => (
                        <TransactionItem
                            key={transaction.id}
                            transaction={transaction}
                            onDeleteTransaction={onDeleteTransaction}
                        />
                    ))}
                </ul>
            )}
        </section>
    );
}

export default TransactionList;