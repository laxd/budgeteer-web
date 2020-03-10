import React from 'react';
import { formatCurrency } from '../../utils/Formatter'
import classNames from 'classnames';
import './Accounts.css';

function AccountBalance({transactions}) {
    console.log(transactions);
    const balance = transactions
        .map(t => parseFloat(t.amount))
        .reduce((total, amount) => total + amount, 0);
    
    const clearedBalance = transactions
        .filter(t => t.cleared)
        .map(t => t.amount)
        .reduce((total, amount) => total + amount, 0);

    const balanceClass = classNames({
        'balance': true,
        'balance-positive': balance >= 0,
        'balance-negative': balance < 0
    });

    const clearedClass = classNames({
        'balance': true,
        'balance-positive': clearedBalance >= 0,
        'balance-negative': clearedBalance < 0
    });

    return (
        <div className="balance-container">
            <div className="balance">
                <div className="balance-name">Balance:</div><div className={balanceClass}>{formatCurrency(balance)}</div>
            </div>
            <div className="balance">
                <div className="balance-name">Cleared:</div><div className={clearedClass}>{formatCurrency(clearedBalance)}</div>
            </div>
        </div>
    )
}


export default AccountBalance;