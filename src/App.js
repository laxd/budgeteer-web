import React, {Component} from 'react';
import {Button} from 'reactstrap';
import './App.css';
import TransactionList from './TransactionList';
import Accounts from "./Accounts";
import { AccountProvider } from './AccountContext'

class App extends Component {

    render() {
        return (
            <>
            <AccountProvider>
                <Accounts />
                <TransactionList />
            </AccountProvider>
            <div>
                <Button color="primary">Add new transaction</Button>
            </div>
            </>
        )
    }
}

export default App;