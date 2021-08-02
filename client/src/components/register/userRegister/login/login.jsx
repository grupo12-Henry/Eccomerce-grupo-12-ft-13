import React, { useRef, useState , useEffect} from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import {getUser} from "../../../../actions/index"
import { useAuth } from '../../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom'
import { StyledDiv } from "./styled";
import Sidebar from '../../../dashboard-user/sidebar/Sidebar';
import Footer from '../../../footer/footer';


export function validate(input) {
    
    let errors = {}
    //Validaciones si existe formato correcto mail y pass
    if (!input.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
        errors.email = 'Email is invalid';
    } else {
        if (!input.password) {
            errors.password = 'Password is required';
        } else if (!/(?=.*)/.test(input.password)) {
            errors.password = 'Password is invalid';
        }
    }
    return errors;
}; 
    // !-- Fin validaciones 

export default function Login({ onClose }) {
    const user1=useSelector((state) => state.user)
    const user = window.localStorage.getItem('user')?user1:null
    const dispatch = useDispatch()
    const emailRef = useRef()
    console.log('email', emailRef)
    const passwordRef = useRef()
    const { login } = useAuth()
    console.log(login)
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
useEffect(async () => {
        
    if(process.env.REACT_APP_ADMIN_EMAIL === emailRef.current.value|| user&&user.email===emailRef.current.value &&
            passwordRef.current.value === process.env.REACT_APP_ADMIN_PASSWORD||true&&
            user&&user.admin===true) {
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/home')
        }else return
},[user])
    async function HandleSubmit(e) {
        dispatch(getUser(emailRef.current.value))
        e.preventDefault()
        try {
            console.log('primero entre')
            setError('')
            setLoading(true)

                if(process.env.REACT_APP_ADMIN_EMAIL === emailRef.current.value||user.email===emailRef.current.value &&
                    passwordRef.current.value === process.env.REACT_APP_ADMIN_PASSWORD||true&&
                    user.admin===true) {
                    await login(emailRef.current.value, passwordRef.current.value)
                    history.push('/home')
                } else {
                    await login(emailRef.current.value, passwordRef.current.value)
                    onClose()
                }
        }
        catch {
            console.log('entro directo')
            setError('Failed to Log In')
        }
        setLoading(false)
    }

    //<div className='back'><Link to='/'>BACK TO ANIME DATABASE</Link></div>
    //console.log('hola',user1)
// if(user.admin)
    return (
        <>
        <StyledDiv>
        <div className='container' >
            <form className='formulariodeLogin' method='post' onSubmit={HandleSubmit}>
                
                <div className='email'>
                    <label className='mr-4'>Correo Electronico: </label>
                    <input type='text' name='email' ref={emailRef} value={input.email} onChange={handleInputChange} required='' />
                    <span></span>
                    {errors.email && (
                        <p className="danger">{errors.email}</p>
                    )}
                </div>
                <div className='password'>
                    <label className='mr-4'>Contraseña: </label>
                    <input type='password' name='password' ref={passwordRef} value={input.password} onChange={handleInputChange} required='' />
                    <span></span>
                    {errors.password && (
                        <p className="danger">{errors.password}</p>
                    )}
                </div>
                <div className='pass'>
                    <Link className='pass' style={{color: '#ebc28e'}} to='/forgot-password'>Olvidaste tu contraseña?</Link>
                </div>
                <button className='btn btn-light LogIn'>Ingresar</button>
            </form>
            {/* <div className='signup_link'>No estas registrado?<Link className='signup_link2' to='/signup'>Registrate!</Link></div> */}
        </div>
        </StyledDiv>
        </>
    )
}