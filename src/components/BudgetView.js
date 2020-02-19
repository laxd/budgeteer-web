import React, {Component} from 'react';
import './App.css';
import TransactionList from './Transaction/TransactionList';
import AddTransaction from './Transaction/AddTransaction';
import AccountSelection from "./Account/AccountSelection";
import { AccountProvider } from './Account/AccountContext'
import AccountBalances from "./Account/AccountBalances";

class BudgetView extends Component {

    render() {
        return (
            <>
            <AccountProvider>
                <AccountSelection />
                <AccountBalances />
                <TransactionList />
                <AddTransaction />
            </AccountProvider>
            </>
        )
    }
}

export default BudgetView;