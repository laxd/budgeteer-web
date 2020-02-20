import React, { useState } from 'react';
import '../App.css';
import AccountSelection from "./AccountSelection";
import Account from "./Account";
import AccountList from "./AccountList";

export default function BudgetView({ budget }) {

    const [account, setAccount] = useState(undefined);

    return (
        <>
            <AccountList budget={budget} setAccount={setAccount} />
            <Account account={account} />
        </>
    )
}