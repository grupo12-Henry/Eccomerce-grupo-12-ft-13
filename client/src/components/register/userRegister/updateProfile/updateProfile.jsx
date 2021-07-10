import React, { useRef, useState } from 'react'
import { useAuth } from '../../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom'


export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()


  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/dashboard")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }


  return (
    <header className="navbar">
      <nav>
        <ul className="list">
          <li className="list-item">
            <div>
              <h2>Update Profile</h2>
              <p>{error}</p>
              <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type='text' name='email' ref={emailRef} required defaultValue={currentUser.email}></input>
                <label>Password</label>
                <input type='password' name='email' ref={passwordRef} placeholder='Leave blank to keep the same'></input>
                <label>Password Confirmation</label>
                <input type='password' name='email' ref={passwordConfirmRef} placeholder='Leave blank to keep the same'></input>
                <button disabled={loading} className='SignUp' type='submit'>Update</button>
              </form>
            </div>
            <div><Link to='/dashboard'>Cancel</Link></div>
          </li>
        </ul>
      </nav>
    </header>
  )
}
