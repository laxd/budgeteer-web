import React from 'react'
import Budget from "./Budget";

export default function BudgetSelection({budget}) {
    return (
        <div className="content">Viewing budget {budget.name}</div>
    );
}