import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../services/firebaseConfig";

export const AuthContext=createContext();

export function AuthProvider({children}){
    const[user,setUser]=useState(null);

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return ()=> unsubscribe();
    },[])

return(
    <AuthContext.Provider value={{user,setUser}}>
            {children}
    </AuthContext.Provider>
);
}