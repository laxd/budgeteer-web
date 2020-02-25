import React, {useState} from 'react';
import {Button} from 'reactstrap';
import BudgeteerApi from '../../../services/api/BudgeteerApi'

export default function AddTransaction({account, addTransaction}) {
    const [transactionDate, setTransactionDate] = useState(new Date());
    const [vendor, setVendor] = useState('');
    const [amount, setAmount] = useState(0);

    const [adding, setAdding] = useState(false);

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleVendorChange = (event) => {
        setVendor(event.target.value);
    };

    const handleDateChange = (event) => {
        setTransactionDate(event.target.value);
    };

    const toggleAdding = () => {
        setAdding((a) => !a);
    };

    const handleSave = () => {
        const transaction = {
            date: transactionDate,
            vendor: vendor,
            amount: amount,
            cleared: false,
            accountId: account.id
        };

        console.log(transaction);

        BudgeteerApi.addTransaction(transaction)
            .then((transaction) => {
                addTransaction(transaction);
            })
    };

    if(adding) {
        return <div>
            <input value={transactionDate} onChange={handleDateChange} type="date" />
            <input value={vendor} onChange={handleVendorChange} />
            <input value={amount} onChange={handleAmountChange} />
            <Button onChange={toggleAdding}>Cancel</Button>
            <Button onClick={handleSave} color="primary">Save</Button>
        </div>
    }
    else {
        return <Button onClick={toggleAdding} color="primary">Add new transaction</Button>
    }
}