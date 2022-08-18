import {useState} from "react";
import swal from "sweetalert";


const TransactionForm = ({addTransaction}) => {

    const [formData ,setFormData] = useState({
        name : "",
        amount : 0,
        type : "expense"
    })

    const changeHandler = (e) => {
        setFormData({...formData , [e.target.name] : e.target.value});
    }

    const submitHandler = e => {
        e.preventDefault();
        if(formData.name === ""){
            swal("" , "please enter the value" , "error")
        }else{
        addTransaction({...formData ,id:Date.now()});
        setFormData({
            name : "",
            amount : 0,
            type : "expense",
        })
    }
    }


    return (
        <form className="form" onSubmit={submitHandler}>
            <input
                type="text"
                name="name"
                placeholder="name..."
                value={formData.name}
                onChange={changeHandler} />
            <input
                type="number"
                name="amount"
                placeholder="amount..."
                value={formData.amount} 
                onChange={changeHandler}/>
            <div>
            <label htmlFor="income">income
                    <input
                        type="radio"
                        value="income"
                        id="income"
                        name="type"
                        style={{accentColor:"#008000"}}
                        checked={formData.type === "income"}
                        onChange={changeHandler} />
                </label>
                <label htmlFor="expense">expense
                    <input
                        type="radio"
                        value="expense"
                        id="expense"
                        name="type"
                        style={{accentColor:"#a4161a"}}
                        checked={formData.type === "expense"} 
                        onChange={changeHandler}/>
                </label>
            </div>
            <button type="submit">add transaction</button>
        </form>
    );
}

export default TransactionForm;