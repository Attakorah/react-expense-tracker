function TransactionItem({ transaction, onDeleteTransaction }) {
    return (
        <li className={`transaction-item ${transaction.type}`}>
            <div>
                <strong>{transaction.description}</strong>
                <span>{transaction.type}</span>
            </div>

            <div className="transaction-right">
                <p>
                    {transaction.type === "income" ? "+" : "-"} GHS {transaction.amount.toFixed(2)}
                </p>

                <button
                    className="delete-btn"
                    onClick={() => onDeleteTransaction(transaction.id)}
                >
                    Delete
                </button>
            </div>
        </li>
    );
}

export default TransactionItem;