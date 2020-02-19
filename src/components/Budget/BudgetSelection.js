import React, { useContext, useState, useEffect } from 'react'
import Budget from "./Budget";
import { getBudgets } from "../../services/api/BudgeteerApi";

function BudgetSelection() {
    const [budgets, setBudgets] = useState([]);

    useEffect(() => {
        getBudgets()
            .then(setBudgets);
    }, []);

    return (
        <ol>
            {budgets.map(b => (
                <Budget key={b.id} budget={b} />
            ))}
        </ol>
    );
}

export default BudgetSelection;