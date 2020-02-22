import axios from 'axios';

const getBudgets = () => {
    return axios.get(process.env.REACT_APP_BUDGETEER_API + "/budgets")
        .then(res => {
            return res.data;
        });
};

const getAccountsForBudget = (budget) => {
    return axios.get(process.env.REACT_APP_BUDGETEER_API + budget.links.accounts)
        .then(res => {
            return res.data;
        });
};

const getAccount = (id) => {
    return axios.get(process.env.REACT_APP_BUDGETEER_API + `/accounts/${id}`)
        .then(res => {
            return res.data;
        });
};

const getTransactionsForAccount = (account) => {
    return axios.get(process.env.REACT_APP_BUDGETEER_API + account.links.transactions)
        .then(res => {
            return res.data;
        });
};

const setTransactionCleared = (id, cleared) => {
    return axios.put(process.env.REACT_APP_BUDGETEER_API + `/transactions/${id}`, {
        cleared: cleared
    });
};


export {
    getBudgets,
    getAccountsForBudget,
    getAccount,
    getTransactionsForAccount,
    setTransactionCleared
}