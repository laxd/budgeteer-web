import axios from 'axios';

const getBudgets = () => {
    return axios.get(process.env.REACT_APP_BUDGETEER_API + "/budgets")
        .then(res => {
            console.log(res.data);
            return res.data;
        });
};

const getAccountsForBudget = (id) => {
    return axios.get(process.env.REACT_APP_BUDGETEER_API + '/accounts')
        .then(res => {
            console.log(res.data.data);
            return res.data.data;
        });
};

const getAccount = (id) => {
    return axios.get(process.env.REACT_APP_BUDGETEER_API + `/accounts/${id}`)
        .then(res => {
            console.log(res.data);
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