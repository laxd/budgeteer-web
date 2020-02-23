import React from 'react'
import { Table } from 'reactstrap';
import Transaction from "./Transaction";

function TransactionList({account}) {
    if(account === undefined) {
        return <div>Select an account to see transactions!</div>
    }

    if(!account.transactions) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Vendor</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {account.transactions.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default TransactionList;