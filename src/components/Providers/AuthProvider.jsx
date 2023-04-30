import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';


// create context
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true); 
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

    // observed user auth state 
    useEffect(()=>{
        // const unsubscribe = auth.onAuthStateChanged((user)=>{
        //     if(user){
        //         setUser(user);
        //     }else{
        //         setUser(null);
        //     }
        // })
        // return unsubscribe;
        const unsubscribe = onAuthStateChanged(auth,currentUser=> {
            setUser(currentUser);
            setLoading(false);
        })
        
        // stop observing while unmounting 
        return ()=> {
            return unsubscribe()
        }   
    },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading,
    }

    return (
        //create context and provider

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;