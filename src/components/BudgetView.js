import React, {useState} from 'react'
import AccountList from './Account/AccountList';
import AccountView from './Account/AccountView';

export default function BudgetView({budget}) {
    const [account, setAccount] = useState(undefined);

    if(account === undefined) {
        return <AccountList budget={budget} setAccount={setAccount} />
    }
    else {
        return <AccountView account={account} />
    }
}
