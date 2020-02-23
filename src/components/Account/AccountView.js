import React from 'react';
import '../App.css';
import TransactionList from './Transaction/TransactionList';
import AddTransaction from './Transaction/AddTransaction';
import AccountBalance from './AccountBalance'

export default function AccountView({ account }) {
    return (
        <>
            <AccountBalance balance={account.balance} />
            <TransactionList transactions={account.transactions} />
            <AddTransaction account={account} />
        </>
    )
}