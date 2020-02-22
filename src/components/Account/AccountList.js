import React, { useEffect, useState } from 'react'
import Account from './AccountSelection';
import './Accounts.css';
import {getAccountsForBudget} from "../../services/api/BudgeteerApi";

function AccountList({budget, setAccount}) {
    const [accounts, setAccounts] = useState(undefined);

    useEffect(() => {
        if(budget === undefined || budget.id === undefined) {
            return;
        }

        getAccountsForBudget(budget)
            .then(accounts => {
                setAccounts(accounts);

                if(accounts.length > 0) {
                    setAccount(accounts[0]);
                }
            });
    }, [budget, setAccount]);

    if(accounts === undefined) {
        return null;
    }

    return (
        <>
        <div className="AccountsContainer">
            <ul>
                {accounts.map(account => (
                    <Account key={account.id} account={account} setAccount={setAccount} />
                ))}
            </ul>
        </div>
        </>
    );
}

export default AccountList;