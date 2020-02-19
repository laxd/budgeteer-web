import React, {useState, createContext} from 'react';

const AccountContext = createContext();

function AccountProvider({ children }) {
    const [account, setAccount] = useState(undefined);

    return(
        <AccountContext.Provider value={[account, setAccount]}>
            {children}
        </AccountContext.Provider>
    )
}

export {
    AccountContext,
    AccountProvider
}