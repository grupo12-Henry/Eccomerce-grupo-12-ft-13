import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../../../contexts/AuthContext';

export default function Dashboard() {
    const [error, setError] = useState('')
    const { currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogout (){
        setError('')

        try{
            await logout()
            history.push('/login')
        } catch{
            setError('Failed to Log Out')
        }
    }

    return (
        <div>
<<<<<<< HEAD
            <div><Link to='/home'>BACK</Link></div>
=======
            <div><Link to='/'>BACK TO ANIME DATABASE</Link></div>
>>>>>>> 58c4f90a9e45caa53e268a861b8c97610886b860
            <h2>Profile</h2>
            <p>{error}</p>
            <strong>Email:</strong>{currentUser.email}
            <Link to='/update-profile'>Update Profile</Link>
            <div>
                Need an account? Log In <Link to='/signup'>Sign Up</Link>
                <button variant='link' onClick={handleLogout}>Log Out</button>
            </div>
        </div>
    )
}
