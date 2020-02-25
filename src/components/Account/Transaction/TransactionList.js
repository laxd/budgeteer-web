import React from 'react'
import { Table } from 'reactstrap';
import Transaction from "./Transaction";

function TransactionList({transactions}) {
    if(!transactions) {
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
                    {transactions.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default TransactionList;