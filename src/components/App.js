import React, {Component} from 'react';
import './App.css';
import BudgetView from './BudgetView'
import BudgetSelection from './Budget/BudgetSelection';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/budgets/:id" component={BudgetView} />
                    <Route path="/" component={BudgetSelection} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;