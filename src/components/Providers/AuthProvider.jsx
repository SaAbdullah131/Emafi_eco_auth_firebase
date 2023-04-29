import React, { createContext } from 'react';

// create context
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const user = {displayName: 'Al Katra'}
    const authInfo = {
        user,
    }
    return (
        //create context and provider

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;