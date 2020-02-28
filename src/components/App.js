import React, {Component} from 'react';
import './App.css';
import BudgetSelection from './Budget/BudgetSelection';
import BudgeteerApi from "../services/api/BudgeteerApi";
import MenuBar from './MenuBar'
import BudgetView from './BudgetView';
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

    componentDidMount() {
        BudgeteerApi.getBudgets()
            .then(b => this.setBudgets(b))
    }

    setBudget = async (budget) => {
        const accounts = await BudgeteerApi.getAccountsForBudget(budget.id);
        budget.accounts = accounts;

        this.setState({
            selectedBudget: budget
        });
    }

    render() {

        return <>
            <ErrorBoundary>
                <ToastContainer />
                <MenuBar budget={this.state.selectedBudget} />   
                {this.state.selectedBudget === undefined ?
                    <BudgetSelection budgets={this.state.budgets} setBudget={this.state.setBudget}/>
                :
                    <BudgetView budget={this.state.selectedBudget}/>
            }
            </ErrorBoundary>
        </>
    }
}

export default App;