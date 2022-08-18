const TransactionForm = () => {
    return (
        <form className="form">
            <input
                type="text"
                name="name"
                placeholder="name..." />
            <input
                type="number"
                name="amount..."
                placeholder="amount..." />
            <div>
            <label htmlFor="income">income
                    <input
                        type="radio"
                        value="income"
                        id="income"
                        name="type"
                        style={{accentColor:"#008000"}} />
                </label>
                <label htmlFor="expense">expense
                    <input
                        type="radio"
                        value="expense"
                        id="expense"
                        name="type"
                        style={{accentColor:"#a4161a"}} />
                </label>
            </div>
            <button type="submit">add transaction</button>
        </form>
    );
}

export default TransactionForm;