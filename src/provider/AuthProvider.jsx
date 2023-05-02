import React, { createContext, useEffect, useState } from 'react';
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';
export const AuthContext =createContext(null);


const auth =getAuth(app); 
const googleAuthProvider =new GoogleAuthProvider();
const githubProvider =new GithubAuthProvider();


const AuthProvider = ({children}) => {

    const [user,setUser] =useState(null);
    const [loading,setLoading] = useState(true);

      
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password )
    }
    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut =()=>{
        return signOut(auth);
    }
    const signInWithGoogle =()=>{
        return signInWithPopup(auth,googleAuthProvider)
    }
    const signInGithub = ()=>{
        return signInWithPopup(auth,githubProvider)
    }
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
            console.log('auth state change',currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo ={
        user,
        loading,
        createUser,
        signInWithGoogle ,
        signInGithub,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value ={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;