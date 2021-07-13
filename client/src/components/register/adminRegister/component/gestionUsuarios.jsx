import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postUsuarios } from '../../../../actions';

function GestionUsuarios() {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    const [user, setUser] = useState({
        name: '',
        lastName: '',
        phone: '',
        state: '',
        adress: '',
        mail: '',
        identityCard: '',
        admin: ''
    })

    const handleUser = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    
    const handleSubmit = (e) => {
        e.preventDefault()
        //setSubmit(true)
        dispatch(postUsuarios(user))
        alert('User Created')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
            <div class="form-row">
                <h2>Crear nuevo usuario</h2>
                <br/>
                <div >
                    <input class="form-control"
                        required autoComplete='off' 
                        placeholder='Nombre del usuario...' 
                        name='name' 
                        onChange={handleUser} 
                        value={user.name}>
                    </input>
                    <input class="form-control"
                        required autoComplete='off' 
                        placeholder='Apellido del usuario...' 
                        name='lastName' 
                        onChange={handleUser} 
                        value={user.lastName}>
                    </input>
                    <input class="form-control"
                        required autoComplete='off' 
                        placeholder='Telefono del usuario...' 
                        name='phone' 
                        onChange={handleUser} 
                        value={user.phone}>
                    </input>
                    <input class="form-control"
                        required autoComplete='off' 
                        placeholder='Provincia del usuario...' 
                        name='state' 
                        onChange={handleUser} 
                        value={user.state}>
                    </input>
                    <input class="form-control"
                        required autoComplete='off' 
                        placeholder='Provincia del usuario...' 
                        name='adress' 
                        onChange={handleUser} 
                        value={user.adress}>
                    </input>
                    <input class="form-control"
                        required autoComplete='off' 
                        placeholder='Correo electronico...' 
                        name='mail' 
                        onChange={handleUser} 
                        value={user.mail}>
                    </input>
                    <input class="form-control"
                        autoComplete='off' 
                        placeholder='Tarjeta C/D...' 
                        name='identityCard' 
                        onChange={handleUser} 
                        value={user.identityCard}>
                    </input>
                    <input class="form-control"
                        autoComplete='off' 
                        placeholder='Hecer admin (true o false)..' 
                        name='admin' 
                        onChange={handleUser} 
                        value={user.admin}>
                    </input>
                </div>
                <div >
                    <input class="btn btn-primary btn-md" type='submit' onSubmit={handleSubmit}/>
                </div> 
                </div>{console.log(user)}
            </form>
        </div>
    )
};



export default GestionUsuarios;
// export default connect(null, useDispatch)(GestionUsuarios)

// id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     allowNull: false,
//     autoIncrement: true
// }