import React from 'react'
import TransactionList from "./Transaction/TransactionList";
import AddTransaction from "./Transaction/AddTransaction";

export default function Account({account}) {
    return (
        <>
            <TransactionList account={account} />
            <AddTransaction />
        </>
    )
}
