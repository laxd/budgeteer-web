import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import { Table } from 'reactstrap';
import {AccountContext} from './AccountContext';
import Transaction from "./Transaction";
import {getTransactionsForAccount} from "../services/api/BudgeteerApi";

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);
    const [account] = useContext(AccountContext);

    useEffect(() => {
        if(account !== undefined) {
            getTransactionsForAccount(account)
                .then((transactions => setTransactions(transactions)));
        }
    }, [account]);

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
};

export default TransactionList;