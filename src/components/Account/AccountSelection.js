import React  from 'react'

function AccountSelection({ account, setAccount }) {

    const handleAccountSelection = () => {
        setAccount(account);
    };

    return (
        <button className="account-list-item" onClick={handleAccountSelection}>{account.name}</button>
    );
}

export default AccountSelection;