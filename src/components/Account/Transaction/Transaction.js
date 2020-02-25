import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';
import BudgeteerApi from "../../../services/api/BudgeteerApi";
import { formatCurrency, formatDate } from '../../../utils/Formatter';

export default function Transaction({ transaction }) {

    const [cleared, setCleared] = useState(transaction.cleared);

    function clearTransaction() {
        setCleared(true);

        BudgeteerApi.setTransactionCleared(transaction.id, true);
    }

    function unclearTransaction() {
        setCleared(false);

        BudgeteerApi.setTransactionCleared(transaction.id, false);

    }

    let icon;

    if(transaction.reconciled) {
        icon = <Button color="link"><FontAwesomeIcon icon={faCheckDouble} color="green"/></Button>
    }
    else if(cleared) {
        icon = <Button color="link" onClick={unclearTransaction}><FontAwesomeIcon icon={faCheck} color="green"/></Button>
    }
    else {
        icon = <Button color="link" onClick={clearTransaction}><FontAwesomeIcon icon={faCheck} color="lightgray"/></Button>
    }

    return (
        <tr>
            <td>{formatDate(transaction.date)}</td>
            <td>{transaction.vendor }</td>
            <td>{formatCurrency(transaction.amount)}</td>
            <td>{icon}</td>
        </tr>
    )
}
