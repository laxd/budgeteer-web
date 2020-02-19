import React, { useContext } from 'react'
import {AccountContext} from "./AccountContext";
import {Button} from "reactstrap";
import classnames from 'classnames'
import {getAccount} from "../../services/api/BudgeteerApi";

function Account({ account }) {
    const [selectedAccount, setAccount] = useContext(AccountContext);

    const handleAccountSelection = () => {
        // Get more detailed information about this account
        // and propagate
        getAccount(account.id)
            .then(a => setAccount(a));
    };

    const getButtonColor = () => {
        if(account === undefined || selectedAccount === undefined) {
            return null;
        }
        else {
            return classnames({
                'primary': account.id === selectedAccount.id
            });
        }
    };

    return (
        <li>
            <Button color={getButtonColor()} onClick={handleAccountSelection}>{account.name}</Button>
        </li>
    );
}

export default Account;