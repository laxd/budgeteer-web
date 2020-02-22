import React from 'react';
import '../App.css';
import TransactionList from './Transaction/TransactionList';
import AddTransaction from './Transaction/AddTransaction';

export default function AccountView({ account }) {
    return (
        <>
            <TransactionList account={account} />
            <AddTransaction />
        </>
    )
}