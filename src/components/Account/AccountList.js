import React, { useEffect, useState } from 'react'
import AccountSelection from './AccountSelection';
import './Accounts.scss';
import BudgeteerApi from "../../services/api/BudgeteerApi";

function AccountList({budget}) {
    const [accounts, setAccounts] = useState(undefined);

    useEffect(() => {
        if(budget === undefined || budget.id === undefined) {
            return;
        }

        BudgeteerApi.getAccountsForBudget(budget)
            .then(async (accounts) => {
                setAccounts(accounts);
            });
    }, [budget]);

    if(!accounts) {
        return null;
    }

    return (
        <>
        <div className="account-list">
            Accounts:
            <div className="account-list-container">
                {accounts.map(account => (
                    <AccountSelection key={account.id} account={account} />
                ))}
            </div>
        </div>
        </>
    );
}

export default AccountList;