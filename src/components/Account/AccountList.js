import React, { useEffect, useState, useContext } from 'react'
import Account from './AccountSelection';
import { AccountContext } from './AccountContext';
import './Accounts.css';
import {getAccountsForBudget} from "../../services/api/BudgeteerApi";

function AccountList({budget, setAccount}) {
    const [accounts, setAccounts] = useState(undefined);

    useEffect(() => {
        if(budget === undefined) {
            return;
        }

        getAccountsForBudget(budget.id)
            .then(accounts => {
                setAccounts(accounts);

                if(accounts.length > 0) {
                    // Set the first one as selected
                    setAccount(accounts[0])
                }
            });
    }, [budget]);

    return (
        <>
        <div className="AccountsContainer">
            <ul>
                {accounts ? accounts.map(account => (
                    <Account key={account.id} account={account} setAccount={setAccount} />
                )):""}
            </ul>
        </div>
        </>
    );
}

export default AccountList;