import { Link } from "react-router-dom"
import GoogleButton from 'react-google-button'
import { useState , useContext } from "react"
import {UserContext} from '../Context/Context'

export default function Login(){
    const {handleChange,handleSubmit} = useContext(UserContext)
    
    return(
        <>
        <main className='form-body'>
        <div className='form-container'>
            <h1>Log In</h1>
            <form>
            <label for="E-mail">E-mail</label>
            <input onChange={handleChange} type='email' id="e-mail" name="E-mail" />
            <label for="Password">Password</label>
            <input onChange={handleChange} type='password' id="password" name="Password" />
            <button onClick={handleSubmit}>Submit</button>

            <Link to='/register'>
            <a href="" className="login-register-link">Don't have an account? Register!</a>
            </Link>
            <GoogleButton type="light" className="google-button"/>
            </form>
        </div>
        </main>
        </>
    )
}