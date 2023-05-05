import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {UserContext} from '../Context/Context'



export default function Register(){

    const {handleChange,handleSubmit} = useContext(UserContext)

    // // const [formData, setFormData] = useState({})

    // // function handleChange(event){
    // //     const {name, value, type, checked} = event.target
    // //     setFormData(prevFormData => {
    // //     return {
    // //         ...prevFormData,
    // //         [name]: type === "checkbox" ? checked : value
    // //     }
    // // })
    
    // // }
    // // function handleSubmit(event){
    // //     console.log(formData)
    // //     event.preventDefault()
    // //     createUser(formData.Email, formData.Password)
    // }
    return(
        <>
        <main className='form-body'>
        <div className='form-container'>
            <h1>Register</h1>
            <form>
            <label  htmlFor="Email">E-mail</label>
            <input onChange={handleChange} type='email' id="e-mail" name="Email" required />
            <label htmlFor="Password">Password</label>
            <input onChange={handleChange} type='password' id="password" name="Password" required />
            <label htmlFor="ConfirmPass">Confirm Password</label>
            <input type='password' onChange={handleChange} id="conpassword" name="ConfirmPass" required />
            <button onClick={handleSubmit} >Submit</button>
            <Link to='/login'>
            <a  className="login-register-link">Already have an account? Register!</a>
            </Link>
            
            </form>
        </div>
        </main>
        </>
    )
}