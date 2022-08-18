import {FaTrashAlt} from "react-icons/fa";

const TransactionSection = ({name ,amount , type}) => {
    return (
        <article className="transaction" style={{borderRight : type === "income" && "3px solid #008000"}}>
                <h3>{name}</h3>
                <span>{type === "income" ? "+" : "-"} {amount}</span>
            <button><FaTrashAlt/></button>
        </article>
    );
}

export default TransactionSection;