import React from 'react'
import {Button} from "reactstrap";

function Budget({budget, setBudget}) {

    const handleSelection = () => {
        setBudget(budget);
    };

    return (
        <li>
            <Button onClick={handleSelection}>{budget.name}</Button>
        </li>
    );
}

export default Budget;