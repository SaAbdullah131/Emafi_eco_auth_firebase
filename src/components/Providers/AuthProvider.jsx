import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';


// create context
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    // create user
    const createUser = ((email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    })
    // sign in
    const signIn = ((email,password)=> {
        return signInWithEmailAndPassword(auth,email,password);
    })
    // sign out
    const logOut = () => {
        return signOut(auth);
    }
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
    }
    return (
        //create context and provider

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;