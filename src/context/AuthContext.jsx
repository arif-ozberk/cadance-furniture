import React, { createContext } from 'react'


export const AuthContextProvider = createContext({});


const AuthContext = ({ children }) => {

    return (
        <AuthContext.Provider
            value={{

            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
