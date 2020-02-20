import React  from 'react'
import {Button} from "reactstrap";
import classnames from 'classnames'
import {getAccount} from "../../services/api/BudgeteerApi";

function Account({ account, setAccount }) {

    const handleAccountSelection = () => {
        // Get more detailed information about this account
        // and propagate
        getAccount(account.id)
            .then(a => setAccount(a));
    };

    const getButtonColor = () => {
        return "primary";
    };

    return (
        <li>
            <Button color={getButtonColor()} onClick={handleAccountSelection}>{account.name}</Button>
        </li>
    );
}

export default Account;