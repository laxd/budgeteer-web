import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import {BudgetContext} from "./BudgetContext";
import {Button} from "reactstrap";

function Budget({budget}) {
    const [selectedBudget, setBudget] = useContext(BudgetContext);

    console.log(budget);



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