import TransactionSection from "./TransactionSection"


const TransactionList = ({transactions}) => {

    const renderComponent = () => {
        return transactions.map(t => {
            return <TransactionSection
                key={t.id}
                name={t.name}
                amount={t.amount}
                type={t.type}
            />
        })
    }


    return(
        <section className="transactionList">
            {renderComponent()}
        </section>
    )
}
 
export default TransactionList;