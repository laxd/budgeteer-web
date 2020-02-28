import axios from 'axios';
import handleError from '../ErrorHandler';

class BudgeteerApi {

    constructor() {
        this.api = axios.create({
            baseURL: process.env.REACT_APP_BUDGETEER_API
        });
    }

    getBudgets() {
        return this.api.get("/budgets")
            .then(res => {
                return res.data;
            }).catch(err => {
                handleError(err);
                return [];
            });
    };
    
    getAccountsForBudget(budget) {
        return this.api.get(budget.links.accounts)
            .then(res => {
                return res.data;
            }).catch(err => {
                handleError(err);
                return [];
            });
    };
    
    getAccount(id) {
        return this.api.get(`/accounts/${id}`)
            .then(res => {
                return res.data;
            }).catch(err => {
                handleError(err);
                return undefined;
            });
    };
    
    getTransactionsForAccount(account) {
        return this.api.get(account.links.transactions)
            .then(res => {
                return res.data;
            }).catch(err => {
                handleError(err);
                return [];
            });
    };
    
    setTransactionCleared(id, cleared) {
        return this.api.put(`/transactions/${id}`, {
            cleared: cleared
        }).catch(err => handleError(err));
    };
    
    addTransaction(transaction) {
        return this.api.post('/transactions', transaction)
        .then(res => {
            return res.data;
        }).catch(err => {
            handleError(err);
            return undefined;
        });
    }
}


export default new BudgeteerApi();