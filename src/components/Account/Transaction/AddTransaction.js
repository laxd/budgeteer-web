import React, {useState} from 'react';
import {Button} from 'reactstrap';
import BudgeteerApi from '../../../services/api/BudgeteerApi'

export default function AddTransaction({account, addTransaction}) {
    const [transaction, setTransaction] = useState({
        transactionDate: new Date(),
        vendor: '',
        amount: 0.00,
        cleared: false,
        accountId: account.id
    })
    
    const [adding, setAdding] = useState(false);

    const handleChange = (event) => {
        console.log(event.target.name)
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

    if(adding) {
        return <div className="add-transaction">
            <input name="transactionDate" value={transaction.transactionDate} onChange={handleChange} type="date" />
            <input name="vendor" value={transaction.vendor} onChange={handleChange} />
            <input name="amount" value={transaction.amount} onChange={handleChange} />
            <div><Button onClick={toggleAdding}>Cancel</Button>
            <Button onClick={handleSave} color="primary">Save</Button>
        </div></div>
    }
    else {
        return <Button onClick={toggleAdding} color="primary">Add new transaction</Button>
    }
}