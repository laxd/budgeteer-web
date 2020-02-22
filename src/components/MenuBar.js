import React from 'react'
import AccountList from './Account/AccountList'
import { Button } from 'reactstrap';

export default function MenuBar({budget}) {
    if(budget) {
        return (
            <div>
                <div>Budget: {budget.name}</div>
                <Button>Change</Button>
    
                <AccountList accounts={budget.accounts}/>            
            </div>
        )
    }
    else {
        return (
            <div>
                <div>No budget selected</div>
                <Button>Set budget</Button>
            </div>
        )
    }
}
