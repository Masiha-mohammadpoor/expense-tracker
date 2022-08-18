import { useState } from "react";
import OverView from "./OverView";
import TransactionList from "./TransactionList";

const TransactionMain = () => {

    const [transactions, setTransactions] = useState([]);
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);


    const addTransaction = (value) => {
        setTransactions([...transactions , value])
    }
    return (
        <main className="main">
            <OverView income={income} expense={expense} addTransaction={addTransaction}/>
            <TransactionList transactions={transactions}/>
        </main>
    );
}

export default TransactionMain;