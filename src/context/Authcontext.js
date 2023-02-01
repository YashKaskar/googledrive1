import React, { useContext, useEffect, useState } from 'react'
import {auth} from '../firebase'


const AuthContext = React.createContext()


export function useAuth() {  
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    
    function signup(email, password) {  
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {   
       const unsubscribe =  auth.onAuthStateChanged(user => {   
            setCurrentUser(user)
        })
    

        return unsubscribe
    },[]) 
    const [currentUser, setCurrentUser] = useState()

    const value = {
        currentUser,
        signup
    }

    
  return (
    <div>
          <AuthContext.Provider value={value}>    
              {children}
          </AuthContext.Provider>
    </div>
  )
}
