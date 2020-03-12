import React, { useState } from 'react';
import '../App.css';
import TransactionList from './Transaction/TransactionList';
import AddTransaction from './Transaction/AddTransaction';
import AccountBalance from './AccountBalance'

export default function AccountView({ account }) {
    const [transactions, setTransactions] = useState(account.transactions);

    const addTransaction = (transaction) => {
        setTransactions(transactions => transactions.concat(transaction))
    };

    return (
        <div className="account-container">
            <AccountBalance transactions={transactions} />
            <TransactionList transactions={transactions} />
            <AddTransaction account={account} addTransaction={addTransaction}/>
        </div>
    )
}