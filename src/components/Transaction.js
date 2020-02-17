import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';
import axios from 'axios';
import {setTransactionCleared} from "../services/api/BudgeteerApi";

export default function Transaction({ transaction }) {

    const [cleared, setCleared] = useState(transaction.cleared);

    function toggleCleared() {
        setCleared(!cleared);

        setTransactionCleared(transaction.id, cleared);
    }

    let icon;

    if(transaction.reconciled) {
        icon = <Button color="link"><FontAwesomeIcon icon={faCheckDouble} color="green"/></Button>
    }
    else if(cleared) {
        icon = <Button color="link" onClick={toggleCleared}><FontAwesomeIcon icon={faCheck} color="green"/></Button>
    }
    else {
        icon = <Button color="link" onClick={toggleCleared}><FontAwesomeIcon icon={faCheck} color="lightgray"/></Button>
    }


    return (
        <tr>
            <td>{new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "long",
                day: "2-digit"
            }).format(new Date(transaction.date))}</td>
            <td>{transaction.vendor }</td>
            <td>{new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(transaction.amount)}</td>
            <td>{icon}</td>
        </tr>
    )
}
