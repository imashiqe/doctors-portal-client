import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [ user, setUser] = useState(null);
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email,password)
    }
    
    const signIn = (email,password) => {
         return signInWithEmailAndPassword(auth, email,password)
    }

    const updateUser = ( userInfo) => {
        return updateProfile(user, userInfo);
    }
    const logOut = () => {
         return signOut(auth)
    }

    useEffect(() =>{
      const unSubscribe=  onAuthStateChanged(auth, currentUser =>{
            console.log('user ovserving');
            setUser(currentUser);
        });

        return () => unSubscribe();
    }, [])

    const authInfo = {
             createUser,
             signIn,
             user,
             logOut,
             updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;