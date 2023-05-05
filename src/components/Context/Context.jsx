import { createContext, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { useState } from "react";




export const UserContext = createContext()






export const  ContextProvider = ({children}) => {

    const [formData, setFormData] = useState({})

    const handleChange =(event) => {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
    
    }

    const handleSubmit =(event) => {
        console.log(formData)
        event.preventDefault()
        createUser(formData.Email, formData.Password)}
    

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }




    const contextValue = {
        createUser,
        handleSubmit,
        handleChange

    }

    return(
        <UserContext.Provider value={contextValue} >
            {children}
        </UserContext.Provider>
    )



}

