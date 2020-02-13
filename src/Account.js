import React, { useContext } from 'react'
import {AccountContext} from "./AccountContext";
import {Button} from "reactstrap";
import classnames from 'classnames'

const Account = props => {
    const [account, setAccount] = useContext(AccountContext);

    const handleAccountSelection = () => {
        console.log("Selecting account: " + props.account);
        setAccount(props.account);
    };

    return (
        <li>
            <Button color={classnames({'primary': props.account === account})} onClick={handleAccountSelection}>{props.account.name}</Button>
        </li>
    );
};

export default Account;