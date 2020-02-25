import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';
import BudgeteerApi from "../../../services/api/BudgeteerApi";
import { formatCurrency, formatDate } from '../../../utils/Formatter';
import classNames from 'classnames';

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

    const amountClass = classNames({
        'transaction-amount': true,
        'transaction-credit': transaction.amount >= 0,
        'transaction-debit': transaction.amount < 0
    });

    return (
        <div className="transaction">
            <div className="transaction-description">{transaction.vendor}</div>
            <div className="transaction-date">{formatDate(transaction.date)}</div>
            <div className={amountClass}>{formatCurrency(transaction.amount)}</div>
            <div className="transaction-status">{icon}</div>
        </div>
    )
}
