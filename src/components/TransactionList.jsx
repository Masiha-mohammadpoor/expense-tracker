import TransactionSection from "./TransactionSection"
import { useState  , useEffect} from "react";

const TransactionList = ({transactions , remove}) => {

    const [search , setSearch] = useState("");
    const [filterTransaction , setFilterTransaction] = useState(transactions);

    const renderComponent = () => {
        return filterTransaction.map(t => {
            return <TransactionSection
                key={t.id}
                name={t.name}
                amount={t.amount}
                type={t.type}
                remove={() => remove(t.id)}
            />
        })
    }

    const searchHandler = (value) => {
        if(value === ""){
            setFilterTransaction(transactions)
        }else{
            const filtered = transactions.filter(t => {
                return t.name.toLowerCase().includes(value.toLowerCase());
            })
            setFilterTransaction(filtered)
        }
    }

    const changeHandler = (e) => {
        setSearch(e.target.value);
        searchHandler(e.target.value);
    }

    useEffect(() => {
        searchHandler(search)
    } , [transactions])

    return(
        <section className="transactionList">
            {transactions.length === 0 ? "" :
            <input
            type="text"
            placeholder="search..."
            className="searchInput"
            value={search}
            onChange={changeHandler}
            />
}
            {renderComponent()}
        </section>
    )
}
 
export default TransactionList;