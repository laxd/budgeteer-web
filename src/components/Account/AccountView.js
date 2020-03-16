import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.scss';
import BudgeteerApi from '../../services/api/BudgeteerApi'
import TransactionList from './Transaction/TransactionList';
import AddTransaction from './Transaction/AddTransaction';
import AccountBalance from './AccountBalance'

export default function AccountView() {
    const { id } = useParams();

    const [account, setAccount] = useState(undefined);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        BudgeteerApi.getAccount(id)
            .then(account => {
                setAccount(account);

                BudgeteerApi.getTransactionsForAccount(account)
                    .then(transactions => setTransactions(transactions));
            });

    }, [id]);

    const addTransaction = (transaction) => {
        transaction.push(transaction)
    };

    if(!account) {
        return null;
    }

    return (
        <div className="account-container">
            <AccountBalance transactions={transactions} />
            <TransactionList transactions={transactions} />
            <AddTransaction account={account} addTransaction={addTransaction}/>
        </div>
    )
}