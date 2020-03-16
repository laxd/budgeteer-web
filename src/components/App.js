import React, {Component} from 'react';
import './App.scss';
import BudgeteerApi from "../services/api/BudgeteerApi";
import BudgetView from './Content';
import ErrorBoundary from './ErrorBoundary';
import { ToastContainer } from 'react-toastify';

class App extends Component {

    state = {
        budgets: [],
        selectedBudget: undefined,
    };

    setBudgets(budgets) {
        this.setState({
            budgets: budgets
        });

        if(budgets !== undefined && budgets.length > 0) {
            this.setState({
                selectedBudget: budgets[0]
            });
        }
    }

    async componentDidMount() {
        const budgets = await BudgeteerApi.getBudgets();

        this.setBudgets(budgets);
    }

    setBudget = async (budget) => {
        budget.accounts = await BudgeteerApi.getAccountsForBudget(budget.id);

        this.setState({
            selectedBudget: budget
        });
    };

    render() {

        return <>
            <ErrorBoundary>
                <ToastContainer />
                <BudgetView budget={this.state.selectedBudget}/>
            </ErrorBoundary>
        </>
    }
}

export default App;