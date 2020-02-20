import React, {useState, createContext} from 'react';

const BudgetContext = createContext();

function BudgetProvider({ children }) {
    const [budget, setBudget] = useState(undefined);

    return(
        <BudgetContext.Provider value={[budget, setBudget]}>
            {children}
        </BudgetContext.Provider>
    )
}

export {
    BudgetContext,
    BudgetProvider
}