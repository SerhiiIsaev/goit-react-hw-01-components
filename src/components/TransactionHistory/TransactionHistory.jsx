import styles from "./transactionHistory.module.css"
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => { 
    return (
        <table className={styles.transactionHistory}>
            <thead className={styles.tableHead}>
                <tr>
                    <th className={styles.cell}>Type</th>
                    <th className={styles.cell}>Amount</th>
                    <th className={styles.cell}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr className={styles.tableRow} key = {item.id}>
                        <td className={styles.cell}>{item.type}</td>
                        <td className={styles.cell}>{item.amount}</td>
                        <td className={styles.cell}>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.number.isRequired,
    })),
}

export {TransactionHistory}