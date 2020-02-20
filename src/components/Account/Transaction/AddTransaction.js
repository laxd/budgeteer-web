import React, {useState} from 'react';
import {Button} from 'reactstrap';

export default function AddTransaction() {
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

    const handleClick = () => {
        console.log("Adding...");
        setAdding((a) => !a);
    };

    const handleSave = () => {
        console.log("Saving...");
        const transaction = {
            date: transactionDate,
            vendor: vendor,
            amount: amount,
            cleared: false
        };



        console.log(transaction);
    };

    let addField;
    if(adding) {
        addField = <div>
            <input value={transactionDate} onChange={handleDateChange} type="date" />
            <input value={vendor} onChange={handleVendorChange} />
            <input value={amount} onChange={handleAmountChange} />
            <Button>Cancel</Button>
            <Button onClick={handleSave} color="primary">Save</Button>
        </div>
    }

    return (
        <div>
            {addField}
            <Button onClick={handleClick} color="primary">Add new transaction</Button>
        </div>
    );
}