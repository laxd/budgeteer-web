import axios from 'axios';

class BudgeteerApi {
    getBudgets() {
        return axios.get(process.env.REACT_APP_BUDGETEER_API + "/budgets")
            .then(res => {
                return res.data;
            });
    };
    
    getAccountsForBudget(budget) {
        return axios.get(process.env.REACT_APP_BUDGETEER_API + budget.links.accounts)
            .then(res => {
                return res.data;
            });
    };
    
    getAccount(id) {
        return axios.get(process.env.REACT_APP_BUDGETEER_API + `/accounts/${id}`)
            .then(res => {
                return res.data;
            });
    };
    
    getTransactionsForAccount(account) {
        return axios.get(process.env.REACT_APP_BUDGETEER_API + account.links.transactions)
            .then(res => {
                return res.data;
            });
    };
    
    setTransactionCleared(id, cleared) {
        return axios.put(process.env.REACT_APP_BUDGETEER_API + `/transactions/${id}`, {
            cleared: cleared
        });
    };
    
    addTransaction(transaction) {
        return axios.post(process.env.REACT_APP_BUDGETEER_API + '/transactions', transaction)
        .then(res => {
            return res.data;
        }).catch(err => console.log(err.message));
    }
}


export default new BudgeteerApi();