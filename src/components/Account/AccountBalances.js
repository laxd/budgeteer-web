import React, { useContext, useEffect, useState } from 'react';
import { AccountContext } from './AccountContext';

function AccountBalances() {
    const [balance, setBalance] = useState(0);
    const [account] = useContext(AccountContext);

    useEffect(() => {
        if(account === undefined) {
            return;
        }

        // Will get cleared balance, reconcilled balance, and actual balance in future
        setBalance(account.balance);
    }, [account]);

    if(account === undefined) {
        return <></>
    }
    else {
        return (
        <div>Balance is {balance}</div>
        );
    }
}


export default AccountBalances;