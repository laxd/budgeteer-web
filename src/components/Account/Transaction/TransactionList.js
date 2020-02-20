import React, { useContext, useState, useEffect } from 'react'
import { Table } from 'reactstrap';
import {AccountContext} from '../AccountContext';
import Transaction from "./Transaction";
import {getTransactionsForAccount} from "../../../services/api/BudgeteerApi";

function TransactionList({account}) {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        if(account !== undefined) {
            getTransactionsForAccount(account)
                .then((transactions => setTransactions(transactions)));
        }
    }, [account]);

    if(account === undefined) {
        return <div>Select an account to see transactions!</div>
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