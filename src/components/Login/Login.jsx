import { Link } from "react-router-dom"
export default function Login(){
    return(
        <>
        <main className='form-body'>
        <div className='form-container'>
            <h1>Log In</h1>
            <form>
            <label for="E-mail">E-mail</label>
            <input type='email' id="e-mail" name="E-mail" />
            <label for="E-mail">Password</label>
            <input type='password' id="password" name="E-mail" />
            <button>Submit</button>

            <Link to='/register'>
            <a href="" className="login-register-link">Don't have an account? Register!</a>
            </Link>
            </form>
        </div>
        </main>
        </>
    )
}