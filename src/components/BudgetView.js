import React, {useState} from 'react'
import BudgeteerApi from '../services/api/BudgeteerApi';
import { BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom';
import AccountList from './Account/AccountList';
import AccountView from './Account/AccountView';

/* TODO: Rename, as budget view should be for a single budget view */
export default function BudgetView({budget}) {

    /* TODO: Replace with SideMenu component */
    /*                     <BudgetView budget={budget}/> */
    return <div className="budget-container">
        <Router>
            <AccountList budget={budget}/>
            <Switch>
                <Route path="/budget">
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