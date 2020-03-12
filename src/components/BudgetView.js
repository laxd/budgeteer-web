import React, {useState} from 'react'
import AccountList from './Account/AccountList';
import AccountView from './Account/AccountView';

export default function BudgetView({budget}) {
    const [account, setAccount] = useState(undefined);

    return <div className="budget-container">
        <AccountList budget={budget} setAccount={setAccount}/>
        { account ?
            <AccountView account={account}/> :
            null
        }
    </div>
}