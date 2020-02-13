import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import { Table } from 'reactstrap';
import {AccountContext} from './AccountContext';
import Transaction from "./Transaction";

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);
    const [account] = useContext(AccountContext);

    useEffect(() => {
        // TODO: Refresh this when account changes
        if(account !== undefined) {
            console.log(account);
            // Fetch transactions for the given account
            axios.get(process.env.REACT_APP_BUDGETEER_API + account.links.transactions)
                .then(res => {
                    const transactions = res.data;
                    console.log(transactions);
                    setTransactions(transactions);
                });
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