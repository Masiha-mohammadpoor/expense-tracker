import {FaTrashAlt} from "react-icons/fa";

const TransactionSection = ({name ,amount , type , remove}) => {
    return (
        <article className="transaction" style={{borderRight : type === "income" && "3px solid #008000"}}>
                <div>
                <h3>{name}</h3>
                <span>{type === "income" ? "+" : "-"} {amount}</span>
                </div>
            <button onClick={remove}><FaTrashAlt/></button>
        </article>
    );
}

export default TransactionSection;