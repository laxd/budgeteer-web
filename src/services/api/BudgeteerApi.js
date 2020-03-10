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
            .then(res => res.data)
            .catch(err => {
                handleError(err);
                return [];
            });
    };

    getAccountsForBudget(budget) {
        return this.api.get(budget.links.accounts)
            .then(res => res.data)
            .catch(err => {
                handleError(err);
                return [];
            });
    };

    async getAccount(id) {
        const account = await this.api.get(`/accounts/${id}`).data;

        account.transactions = await this.api.get(account.links.transactions);

        console.log("Retrieving account: " + id);
        return account;
    };

    getTransactionsForAccount(account) {
        return this.api.get(account.links.transactions)
            .then(res => res.data)
            .catch(err => {
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
        // Convert date to unix timestamp
        transaction.date = Date.parse(transaction.date) / 1000;

        return this.api.post('/transactions', transaction)
            .then(res => res.data)
            .catch(err => {
                handleError(err);
                return undefined;
            });
    }
}


export default new BudgeteerApi();