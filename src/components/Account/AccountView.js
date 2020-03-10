import React, { useState } from 'react';
import '../App.css';
import TransactionList from './Transaction/TransactionList';
import AddTransaction from './Transaction/AddTransaction';
import AccountBalance from './AccountBalance'
import { formatCurrency } from '../../utils/Formatter';

export default function AccountView({ account }) {
    const [transactions, setTransactions] = useState(account.transactions);

    const addTransaction = (transaction) => {
        setTransactions(transactions => transactions.concat(transaction))
    };

    return (
        <>
            <AccountBalance transactions={transactions} />
            <TransactionList transactions={transactions} />
            <AddTransaction account={account} addTransaction={addTransaction}/>
        </>
    )
}