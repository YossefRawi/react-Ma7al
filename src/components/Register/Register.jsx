import { Link } from "react-router-dom"

export default function Register(){
    return(
        <>
        <main className='form-body'>
        <div className='form-container'>
            <h1>Register</h1>
            <form>
            <label for="E-mail">E-mail</label>
            <input type='email' id="e-mail" name="E-mail" required />
            <label for="Password">Password</label>
            <input type='password' id="password" name="Password" required />
            <label for="conPassword">Confirm Password</label>
            <input type='password' id="conpassword" name="conPassword" required />
            <button>Submit</button>
            <Link to='/login'>
            <a href="" className="login-register-link">Already have an account? Register!</a>
            </Link>
            </form>
        </div>
        </main>
        </>
    )
}