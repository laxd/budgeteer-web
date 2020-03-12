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

                await Promise.all(accounts.map(async (account) => {
                    return BudgeteerApi.getTransactionsForAccount(account)
                    .then(transactions => {
                        account.transactions = transactions;
                    });
                }));

                console.log("Got all accounts for budget");
                console.log(accounts);

                if(accounts.length > 0) {
                    console.log(accounts[0]);
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
            <ul>
                {accounts.map(account => (
                    <AccountSelection key={account.id} account={account} setAccount={setAccount} />
                ))}
            </ul>
        </div>
        </>
    );
}

export default AccountList;