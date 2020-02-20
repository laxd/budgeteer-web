import React, {Component, useContext} from 'react';
import './App.css';
import BudgetView from './Account/BudgetView'
import BudgetSelection from './Budget/BudgetSelection';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {BudgetContext} from "./Budget/BudgetContext";
import {getBudgets} from "../services/api/BudgeteerApi";

class App extends Component {

    state = {
        budgets: []
    };

    componentDidMount() {
        getBudgets()
            .then(b => {
                console.log(b);
                this.state.budgets = b;
            })
    }

    render() {
        if(this.state.budgets === []) {
            return <BudgetSelection/>
        }
        else {
            return <BudgetView/>
        }
    }
}

export default App;