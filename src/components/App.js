import React, {Component} from 'react';
import './App.css';
import BudgetSelection from './Budget/BudgetSelection';
import {getBudgets, getAccountsForBudget} from "../services/api/BudgeteerApi";
import MenuBar from './MenuBar'
import BudgetView from './BudgetView';

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
        getBudgets()
            .then(b => this.setBudgets(b));
    }

    setBudget = async (budget) => {
        const accounts = await getAccountsForBudget(budget.id);
        budget.accounts = accounts;

        this.setState({
            selectedBudget: budget
        });
    }

    render() {
        if(this.state.selectedBudget === undefined) {
            return (
                <>
                    <MenuBar budget={this.state.selectedBudget} />   
                    <BudgetSelection budgets={this.state.budgets} setBudget={this.state.setBudget}/>
                </>
            )
        }
        else {
            return (
                <>                    
                    <MenuBar budget={this.state.selectedBudget} />   
                    <BudgetView budget={this.state.selectedBudget}/>
                </>
            )
        }
    }
}

export default App;