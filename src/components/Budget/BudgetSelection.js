import React from 'react'
import Budget from "./Budget";

export default function BudgetSelection({budgets, setBudget}) {
    return (
        <ol>
            {budgets.map(b => (
                <Budget key={b.id} budget={b} setBudget={setBudget} />
            ))}
        </ol>
    );
}