import React, { useEffect, useState, useContext } from 'react'
import Account from './Account';
import { AccountContext } from './AccountContext';
import './Accounts.css';
import {getAccountsForBudget} from "../../services/api/BudgeteerApi";

function AccountList() {
    const [selectedAccount, setAccount] = useContext(AccountContext);
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        getAccountsForBudget(123)
            .then(accounts => {
                setAccounts(accounts);

                if(accounts.length > 0) {
                    // Set the first one as selected
                    setAccount(accounts[0])
                }
            });
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
}

export default AccountList;