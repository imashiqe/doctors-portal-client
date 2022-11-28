import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [ user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email,password) => {
        setLoading(true);
        
        return createUserWithEmailAndPassword(auth, email,password)
    }
    
    const signIn = (email,password) => {
        setLoading(true);
         return signInWithEmailAndPassword(auth, email,password)
    }

    const updateUser = ( userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }
    const logOut = () => {
        setLoading(true);
         return signOut(auth)
    }

    useEffect(() =>{
      const unSubscribe=  onAuthStateChanged(auth, currentUser =>{
            console.log('user ovserving');
            setUser(currentUser);
            setLoading(false);
        });

        return () => unSubscribe();
    }, [])

    const authInfo = {
             createUser,
             signIn,
             user,
             logOut,
             updateUser,
             loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;