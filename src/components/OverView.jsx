import TransactionForm from "./TransactionForm";
import { useState } from "react";


const OverView = ({income , expense , addTransaction}) => {

    const [isShow , setIsShow] = useState(false);

    return ( 
        <section className="overview">
            <article>
                <div>Balance : {income - expense} $</div>
                <button className={`addButton ${isShow && "cancelButton"}`} onClick={() => setIsShow(prev => !prev)}>
                    {isShow ? "Cancel" : "Add"}
                    </button>
            </article>
            <article>
                {isShow && <TransactionForm addTransaction={addTransaction}/>}
            </article>
            <article className="incomeAndExpense">
                <div>
                    <h2>income</h2>
                    <span style={{color:"#008000"}}>{income} $</span>
                </div>
                <div>
                    <h2>expense</h2>
                    <span style={{color:"#a4161a"}}>{expense} $</span>
                </div>
            </article>
        </section>
    );
}
 
export default OverView;