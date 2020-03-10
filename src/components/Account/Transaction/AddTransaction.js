import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
import BudgeteerApi from '../../../services/api/BudgeteerApi'
import './Transactions.css';

function AddTransaction({account, addTransaction}) {
    const [transaction, setTransaction] = useState({
        date: new Date().toISOString().substr(0, 10),
        vendor: '',
        amount: 0.00,
        status: "pending",
        accountId: account.id
    });

    const [adding, setAdding] = useState(false);

    const handleChange = (event) => {
        setTransaction({
            ...transaction,
            [event.target.name]: event.target.value
        })
    };

    const toggleAdding = () => {
        setAdding((a) => !a);
    };

    const handleSave = () => {
        console.log(transaction);

        BudgeteerApi.addTransaction(transaction)
            .then((transaction) => {
                addTransaction(transaction);
            })
    };

    if (adding) {
        return <div className="add-transaction">
            <div className="add-transaction-item">
                <label for="transactionDate" className="input-label-above">Date</label>
                <input value={transaction.date} id="transactionDate" name="date" onChange={handleChange} type="date"/>
            </div>
            <div className="add-transaction-item">
                <label for="vendor" className="input-label-above">Vendor</label>
                <input id="vendor" name="vendor" value={transaction.vendor} onChange={handleChange}/>
            </div>
            <div className="add-transaction-item">
                <label for="amount" className="input-label-above">Amount</label>
                <input id="amount" name="amount" value={transaction.amount} onChange={handleChange}/>
            </div>
            <button onClick={toggleAdding}>Cancel</button>
            <button onClick={handleSave} color="primary">Save</button>
        </div>
    }
    else {
        return <Button onClick={toggleAdding} color="primary">Add new transaction</Button>
    }
}

AddTransaction.propTypes = {
    addTransaction: PropTypes.function
};

export default AddTransaction;