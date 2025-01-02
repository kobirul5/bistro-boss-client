import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser]= useState()
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser =()=>{
        setLoading(true);

        return signOut(auth)
    }

    const updateUserProfile = (name, photo)=>{
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo})
    }
      

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
           setUser(currentUser)
           setLoading(false)
          });
          return ()=>{
            return unsubscribe()
          }
    },[])
    console.log(user)
    const authInfo= {
        user,
        loading,
        createUser,
        signin,
        logoutUser,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;