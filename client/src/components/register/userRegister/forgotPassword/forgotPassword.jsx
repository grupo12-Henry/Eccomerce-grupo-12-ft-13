import React, { useRef, useState } from 'react'
import { useAuth } from '../../../../contexts/AuthContext';
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)


    async function HandleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check email for intructions')
        }
        catch {
            setError('Failed to Reset')
        }
        setLoading(false)
    }


    return (
        <header className="navbar"> 
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <div>
                            <h2>Password Reset</h2>
                            <p>{error}</p>
                            <p>{message}</p>
                            <form onSubmit={HandleSubmit}>
                                <label>Email</label>
                                <input type='text' name='email' ref={emailRef}></input>
                                <button disabled={loading} className='LogIn' type='submit'>Reset Password</button>
                            </form>
                            <div>
                                <Link to='/login'>Login</Link>
                            </div>
                        </div>
                        <div>Need an account? Log In <Link to='/signup'>Registrate</Link></div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
