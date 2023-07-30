import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
    return (
        <table class="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((element) => (
                    <tr>
                        <td>{element.type}</td>
                        <td>{element.amount}</td>
                        <td>{element.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.array,
};

export default TransactionHistory;
