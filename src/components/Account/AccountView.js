import React, { useState, useEffect } from 'react';
import '../App.css';
import BudgeteerApi from '../../services/api/BudgeteerApi'
import TransactionList from './Transaction/TransactionList';
import AddTransaction from './Transaction/AddTransaction';
import AccountBalance from './AccountBalance'

export default function AccountView({ account }) {
    const [transactions, setTransactions] = useState([]);

    const addTransaction = (transaction) => {
        setTransactions(transactions => transactions.concat(transaction))
    };

    useEffect(() => {
        BudgeteerApi.getTransactionsForAccount(account)
            .then(transactions => setTransactions(transactions));
    }, [account]);

    return (
        <div className="account-container">
            <AccountBalance transactions={transactions} />
            <TransactionList transactions={transactions} />
            <AddTransaction account={account} addTransaction={addTransaction}/>
        </div>
    )
}