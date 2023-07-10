import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const signin = (newUser,callBack) => {
        setUser(newUser);
        callBack();
    }
    const signout = (callBack) => {
        setUser(null)
        callBack()
    }
    const value = {user, signin,signout}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;