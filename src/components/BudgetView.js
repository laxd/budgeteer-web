import React, {Component} from 'react';
import {Button} from 'reactstrap';
import '../App.css';
import TransactionList from './TransactionList';
import Accounts from "./Accounts";
import { AccountProvider } from './AccountContext'
import AccountBalances from "./AccountBalances";

class BudgetView extends Component {

    render() {
        return (
            <>
            <AccountProvider>
                <Accounts />
                <AccountBalances />
                <TransactionList />
            </AccountProvider>
            <div>
                <Button color="primary">Add new transaction</Button>
            </div>
            </>
        )
    }
}

export default BudgetView;