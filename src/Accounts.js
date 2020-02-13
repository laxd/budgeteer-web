import React, { Component } from 'react'
import Account from './Account';
import axios from 'axios';
import './Accounts.css'

class Accounts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            accounts: []
        };
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_BUDGETEER_API + '/accounts')
            .then(res => {
                const accounts = res.data.data;
                this.setState({accounts});
            });
    }

    render() {
        return (
            <>
            <div className="AccountsContainer">
                <ul>
                    {this.state.accounts.map(account => (
                        <Account key={account.id} account={account} />
                    ))}
                </ul>
            </div>
            </>
        );
    }
}

export default Accounts;