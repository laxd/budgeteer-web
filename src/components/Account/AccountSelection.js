import React  from 'react'
import { Link } from 'react-router-dom';

function AccountSelection({ account }) {

    return (
        <Link className="button account-list-item" to={`/accounts/${account.id}`}>{account.name}</Link>
    );
}

export default AccountSelection;