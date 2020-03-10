import React from 'react'
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import Transaction from "./Transaction";
import './Transactions.css';

function TransactionList({transactions}) {
    if(!transactions) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <>
            <table className="table transaction-list">
                <thead>
                <tr>
                    <th>Vendor</th>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
                </tbody>
            </table>
        </>
    );
}

TransactionList.propTypes = {
    transactions: PropTypes.array
};

export default TransactionList;