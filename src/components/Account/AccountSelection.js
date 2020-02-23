import React  from 'react'
import {Button} from "reactstrap";
import BudgeteerApi from "../../services/api/BudgeteerApi";

function AccountSelection({ account, setAccount }) {

    const handleAccountSelection = () => {
        // Get more detailed information about this account
        // and propagate
        BudgeteerApi.getAccount(account.id)
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

export default AccountSelection;