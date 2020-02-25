import React from 'react';
import { formatCurrency } from '../../utils/Formatter'
import classNames from 'classnames';

function AccountBalance({transactions}) {
    const balance = transactions
        .map(t => parseFloat(t.amount))
        .reduce((total, amount) => {
            return total += amount;
        });

    const clearedBalance = transactions
    .filter(t => t.cleared)
    .map(t => t.amount)
    .reduce((total, amount) => total + amount);

    const balanceClass = classNames({
        'balance': true,
        'balance-positive': balance >= 0,
        'balance-negative': balance < 0
    })

    const clearedClass = classNames({
        'balance': true,
        'balance-positive': clearedBalance >= 0,
        'balance-negative': clearedBalance < 0
    })

    return (
        <>
            <div className="balance">
                <div>Balance:</div><div className={balanceClass}>{formatCurrency(balance)}</div>
            </div>
            <div className="balance">
                <div>Cleared:</div><div className={clearedClass}>{formatCurrency(clearedBalance)}</div>
            </div>
        </>
    )
}


export default AccountBalance;