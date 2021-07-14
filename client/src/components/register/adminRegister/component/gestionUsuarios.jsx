import React, { useState} from 'react'
import { useDispatch } from 'react-redux';
import { postUsuarios, putUsuarios } from '../../../../actions';

function GestionUsuarios() {
    // const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    const [user, setUser] = useState({
        id:'',
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

    const putSubmit = (e) => {
        e.preventDefault()
        //setSubmit(true)
        putUsuarios(user)
        alert('User updated')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div class="form-row mt-5 ml-2">
                <h2 class='rounded-bottom'>Crear nuevo usuario</h2>
                <br></br><hr/>
                <div>
                    <input class="form-control mt-5 ml-5"
                        required autoComplete='off' 
                        placeholder='Nombre del usuario...' 
                        name='name' 
                        onChange={handleUser} 
                        value={user.name}>
                    </input>
                    <input class="form-control mt-2 ml-5"
                        required autoComplete='off' 
                        placeholder='Apellido del usuario...' 
                        name='lastName' 
                        onChange={handleUser} 
                        value={user.lastName}>
                    </input>
                    <input class="form-control mt-2 ml-5"
                        required autoComplete='off' 
                        placeholder='Telefono del usuario...' 
                        name='phone' 
                        onChange={handleUser} 
                        value={user.phone}>
                    </input>
                    <input class="form-control mt-2 ml-5"
                        required autoComplete='off' 
                        placeholder='Provincia del usuario...' 
                        name='state' 
                        onChange={handleUser} 
                        value={user.state}>
                    </input>
                    <input class="form-control mt-2 ml-5"
                        required autoComplete='off' 
                        placeholder='Provincia del usuario...' 
                        name='adress' 
                        onChange={handleUser} 
                        value={user.adress}>
                    </input>
                    <input class="form-control mt-2 ml-5"
                        required autoComplete='off' 
                        placeholder='Correo electronico...' 
                        name='mail' 
                        onChange={handleUser} 
                        value={user.mail}>
                    </input>
                    <input class="form-control mt-2 ml-5"
                        autoComplete='off' 
                        placeholder='Tarjeta C/D...' 
                        name='identityCard' 
                        onChange={handleUser} 
                        value={user.identityCard}>
                    </input>
                    <input class="form-control mt-2 ml-5"
                        autoComplete='off' 
                        placeholder='Hecer admin (true o false)..' 
                        name='admin' 
                        onChange={handleUser} 
                        value={user.admin}>
                    </input>
                </div>
                <div >
                    <input class="btn btn-primary btn-md mt-5 ml-5" type='submit' onSubmit={handleSubmit}/>
                </div> 
                </div>
            </form>
            <form class='mt-5 ml-2' onSubmit={putSubmit} >
            <div class="form-row">
                <h2>Modificar usuario</h2>
                <br/>
                <div >
                    <input class="form-control mt-5 ml-5"
                        required autoComplete='off' 
                        placeholder='Id del usuario...' 
                        name='id' 
                        onChange={handleUser} 
                        value={user.id}>
                    </input>
                    <input class="form-control mt-2 ml-5"
                        
                        placeholder='Nombre del usuario...' 
                        name='name' 
                        onChange={handleUser} 
                        value={user.name}>
                    </input>
                    <input class="form-control mt-2 ml-5"
                        
                        placeholder='Apellido del usuario...' 
                        name='lastName' 
                        onChange={handleUser} 
                        value={user.lastName}>
                    </input>
                    <input class="form-control mt-2 ml-5"
                        
                        placeholder='Telefono del usuario...' 
                        name='phone' 
                        onChange={handleUser} 
                        value={user.phone}>
                    </input>
                    <input class="form-control mt-2 ml-5"
                        placeholder='Provincia del usuario...' 
                        name='state' 
                        onChange={handleUser} 
                        value={user.state}>
                    </input>
                    <input class="form-control mt-2 ml-5"
                      
                        placeholder='Provincia del usuario...' 
                        name='adress' 
                        onChange={handleUser} 
                        value={user.adress}>
                    </input>
                    <input class="form-control mt-2 ml-5"
                      
                        placeholder='Correo electronico...' 
                        name='mail' 
                        onChange={handleUser} 
                        value={user.mail}>
                    </input>
                    <input class="form-control mt-2 ml-5"
                      
                        placeholder='Tarjeta C/D...' 
                        name='identityCard' 
                        onChange={handleUser} 
                        value={user.identityCard}>
                    </input>
                    <input class="form-control mt-2 ml-5"
                       
                        placeholder='Hecer admin (true o false)..' 
                        name='admin' 
                        onChange={handleUser} 
                        value={user.admin}>
                    </input>
                </div>
                <div >
                    <input class="btn btn-primary btn-m mt-5 ml-5" type='submit' onSubmit={handleSubmit}/>
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