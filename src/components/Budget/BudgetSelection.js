import React, { useContext, useState, useEffect } from 'react'
import Budget from "./Budget";
import { getBudgets } from "../../services/api/BudgeteerApi";

function BudgetSelection() {
    const [budgets, setBudgets] = useState([]);

    useEffect(() => {
        console.log("Getting budgets...");
        getBudgets()
            .then(budgets => {
                console.log(budgets);
                setBudgets(budgets)
            });
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