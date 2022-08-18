import { useState } from "react";
import OverView from "./OverView";

const TransactionMain = () => {

    const [transactions, setTransactions] = useState([]);
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);

    return (
        <main className="main">
            <OverView income={income} expense={expense} />
        </main>
    );
}

export default TransactionMain;