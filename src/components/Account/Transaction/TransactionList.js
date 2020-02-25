import React from 'react'
import { Table } from 'reactstrap';
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
            <div className="transaction-list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </div>     
        </>
    );
}

export default TransactionList;