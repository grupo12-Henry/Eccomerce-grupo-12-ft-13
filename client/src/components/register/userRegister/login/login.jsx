import React, { useRef, useState } from 'react'
import { useAuth } from '../../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom'
import { StyledDiv } from "./styled";


export function validate(input) {
    let errors = {}

    if (!input.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
        errors.email = 'Email is invalid';
    } else {
        if (!input.password) {
            errors.password = 'Password is required';
        } else if (!/(?=.*[0-9])/.test(input.password)) {
            errors.password = 'Password is invalid';
        }
    }
    return errors;
};

export default function Login({ onClose }) {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const [input, setInput] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = function (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });

        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
        // setErrors termina guardando el objeto que retorna la function validate
    }

    async function HandleSubmit(e) {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
                if(process.env.REACT_APP_ADMIN_EMAIL === emailRef.current.value &&
                    passwordRef.current.value === process.env.REACT_APP_ADMIN_PASSWORD) {
                    await login(emailRef.current.value, passwordRef.current.value)
                    history.push('/dashboard-admin')
                } else {
                  await login(emailRef.current.value, passwordRef.current.value)
                  onClose()
                }
        }
        catch {
            setError('Failed to Log In')
        }
        setLoading(false)
    }

    //<div className='back'><Link to='/'>BACK TO ANIME DATABASE</Link></div>

    return (
        <StyledDiv>
        <div className='container' >
            <form method='post' onSubmit={HandleSubmit}>
                <div>
                <h2>Logueate</h2></div>
                <p>{error}</p>
                <div className='email'>
                    <label className='mr-4'>Correo Electronico: </label>
                    <input type='text' name='email' ref={emailRef} value={input.email} onChange={handleInputChange} required />
                    <span></span>
                    {errors.email && (
                        <p className="danger">{errors.email}</p>
                    )}
                </div>
                <div className='password'>
                    <label className='mr-4'>Contraseña: </label>
                    <input type='password' name='password' ref={passwordRef} value={input.password} onChange={handleInputChange} required />
                    <span></span>
                    {errors.password && (
                        <p className="danger">{errors.password}</p>
                    )}
                </div>
                <div className='pass'>
                    <Link className='pass' style={{color: '#ebc28e'}} to='/forgot-password'>Olvidaste tu contraseña?</Link>
                </div>
                <button disabled={loading} className='btn btn-light LogIn' type='submit'>Ingresar</button>
            </form>
            {/* <div className='signup_link'>No estas registrado?<Link className='signup_link2' to='/signup'>Registrate!</Link></div> */}
        </div>
        </StyledDiv>
    )
}