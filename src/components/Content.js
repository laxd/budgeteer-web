import React, {useState} from 'react'
import MenuBar from './MenuBar';
import { BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom';
import AccountView from './Account/AccountView';
import BudgetView from './Budget/BudgetView';

export default function Content({budget}) {

    return <div className="budget-container">
        <Router>
            <MenuBar budget={budget}/>
            <Switch>
                <Route path="/budget">
                    <BudgetView budget={budget} />
                </Route>
                <Route path="/accounts/:id">
                    <AccountView />
                </Route>
                <Route path="/">
                    <div>Select an account!</div>
                </Route>
            </Switch>
        </Router>
    </div>
}