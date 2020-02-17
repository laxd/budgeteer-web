import React, { useContext } from 'react'
import {AccountContext} from "./AccountContext";
import {Button} from "reactstrap";
import classnames from 'classnames'
import {getAccount} from "../services/api/BudgeteerApi";

const Account = props => {
    const [account, setAccount] = useContext(AccountContext);

    const handleAccountSelection = () => {
        // Get more detailed information about this account
        // and propagate
        getAccount(props.account.id)
            .then(account => setAccount(account));
    };

    return (
        <li>
            <Button color={classnames({'primary': props.account === account})} onClick={handleAccountSelection}>{props.account.name}</Button>
        </li>
    );
};

export default Account;