import React, { useEffect, useState } from 'react'
import AccountSelection from './AccountSelection';
import './Accounts.css';
import BudgeteerApi from "../../services/api/BudgeteerApi";

function AccountList({budget, setAccount}) {
    const [accounts, setAccounts] = useState(undefined);

    useEffect(() => {
        if(budget === undefined || budget.id === undefined) {
            return;
        }

        BudgeteerApi.getAccountsForBudget(budget)
            .then(async (accounts) => {
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
        <div className="account-list">
            Accounts:
            <div className="account-list-container">
                {accounts.map(account => (
                    <AccountSelection key={account.id} account={account} setAccount={setAccount} />
                ))}
            </div>
        </div>
        </>
    );
}

export default AccountList;