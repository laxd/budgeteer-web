import React, { useEffect, useState } from 'react'
import Account from './Account';
import axios from 'axios';
import '../Accounts.css'
import {getAccountsForBudget} from "./services/api/BudgeteerApi";

const Accounts = () => {

    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        getAccountsForBudget(123)
            .then(accounts => setAccounts(accounts));
    }, []);

    return (
        <>
        <div className="AccountsContainer">
            <ul>
                {accounts.map(account => (
                    <Account key={account.id} account={account} />
                ))}
            </ul>
        </div>
        </>
    );
};

export default Accounts;