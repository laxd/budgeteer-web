import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap';
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

    if(transactions) {
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
    else {
        return (
            <div>Loading...</div>
        )
    }

    
}

export default TransactionList;