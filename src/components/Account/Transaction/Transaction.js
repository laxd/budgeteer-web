import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';
import BudgeteerApi from "../../../services/api/BudgeteerApi";
import { formatCurrency, formatDate } from '../../../utils/Formatter';
import classNames from 'classnames';

function Transaction({ transaction }) {

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
        <tr>
            <td>{transaction.vendor}</td>
            <td>{formatDate(transaction.date)}</td>
            <td>{transaction.category === undefined ?
                "No category defined" :
                transaction.category.name}</td>
            <td className={amountClass}>{formatCurrency(transaction.amount)}</td>
            <td>{icon}</td>
        </tr>
    )
}

Transaction.propTypes = {
    transaction: PropTypes.shape({
        vendor: PropTypes.string,
        date: PropTypes.number,
        amount: PropTypes.number
    })
};

export default Transaction
