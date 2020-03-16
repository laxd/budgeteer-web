import React from 'react'
import { Link } from 'react-router-dom';

import AccountList from './Account/AccountList'

export default function MenuBar({budget}) {

    return <>
    <div className="menu-bar">
        <Link className="button account-list-item" to={`/budget`}>Budget</Link>
        <AccountList budget={budget}/>
    </div>
    </>;
}
