import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, getUserDetails, postUsuarios, putUsuariosByadmin, deleteUsuarios } from '../../../../actions';
const {token}= {token:process.env.REACT_APP_ADMIN_TOKEN};
function GestionUsuarios() {
    
    const AllClients = useSelector(state => state.AllClients);
    const ClientDetails = useSelector(state => state.ClientDetails);
    const dispatch = useDispatch();
    
    useEffect(() => { 
        console.log(AllClients)
        dispatch(getAllUsers());
    }, []);


    //Estado local que maneja los valores de CREACION Y de MODIFICACIÓN del usuario. NO lleva el campo ID (este se asigna solo en la creación, y ya existe en la modificación)
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

    //Crea un Usuario
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
        dispatch(postUsuarios(user))
    }
    //Modifica un usuario
    const putSubmit = (ClientDetails, user) => {
        console.log(ClientDetails.id, 'user:', user)
        dispatch(putUsuariosByadmin(ClientDetails.id, user,token))
    }
    //Trae el detalle de un Usuario al estado de Redux ClientDetails
    const insertClientInfo = (e) => {
        dispatch(getUserDetails(e.target.value))
    }
    //Borra un Usuario
    const deleteSubmit = (e) => {
        if(window.confirm('¿Esta seguro de que desea borrar este usuario? Esta operación no se puede deshacer.')) {
           deleteUsuarios(e.target.value)
        } 
    }

    return (
        <div class='container' className='jah287'>

            <div class='containter mt-05 ml-3 mr-03 mb-3'>
            <h3 class='mt-03 ml-3 mr-03 mb-3'>Ver Usuarios</h3>
                <div class="table-responsive">
                    <table
                        class="table table-sm table-bordered mt-05 ml-3 mr-03 mb-3 "
                        data-toggle="table"
                        data-pagination="true"
                        data-search="true"
                        data-url="data.json">
                        <thead>
                            <tr>
                            <th scope="col" data-field="id" data-sortable="true" >ID</th>
                            <th scope="col" data-field="name" data-sortable="true" >Nombre</th>
                            <th scope="col" data-field="lastName" data-sortable="true" >Apellido</th>
                            <th scope="col" data-field="identityCard" data-sortable="true" >DNI</th>
                            <th scope="col" data-field="phone" data-sortable="true" >Telefono</th>
                            <th scope="col" data-field="mail" data-sortable="true" >Mail</th>
                            <th scope="col" data-field="adress" data-sortable="true" >Dirección</th>
                            <th scope="col" data-field="state" data-sortable="true" >Provincia</th>
                            <th scope="col" data-field="state" data-sortable="true" >Permisos</th>
                            <th scope="col" data-field="state" data-sortable="true" >Modificar</th>
                            <th scope="col" data-field="state" data-sortable="true" >Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            AllClients && AllClients?.map(client => (
                                    <tr>
                                    <th scope="row">{client?.id}</th>
                                    <td>{client?.name}</td>
                                    <td>{client?.lastName}</td>
                                    <td>{client?.identityCard}</td>
                                    <td>{client?.phone}</td>
                                    <td>{client?.mail}</td>
                                    <td>{client?.adress}</td>
                                    <td>{client?.state}</td>

                                    <td >
                                        {client?.admin==true? (<button class="btn btn-sm btn-success">
                                            ADMIN
                                        </button>) : null}
                                    </td>
                                    <td >
                                    <button class="btn btn-sm btn-info" value={client?.id} onClick={(e) => {e.preventDefault(); insertClientInfo(e)}} >
                                        Modificar
                                    </button>
                                    </td>
                                    <td >
                                        <button class="btn btn-sm btn-danger" value={client?.id} onClick={(e) => deleteSubmit(e)} >
                                            Eliminar
                                        </button>
                                    </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div class='d-flex'>
                <div class='d-flex'> 
                    {/* Formulario para crear un usuario  */}
                    <form onSubmit={handleSubmit}>
                    <div class="form ml-5">
                        <h2 class='rounded-bottom ml-5'>Crear un usuario</h2>
                        <div>
                            <input class="form-control mt-2 ml-3"
                                required autoComplete='off' 
                                placeholder='Nombre del usuario...' 
                                name='name' 
                                onChange={handleUser} 
                                value={user.name}>
                            </input>
                            <input class="form-control mt-2 ml-3"
                                required autoComplete='off' 
                                placeholder='Apellido del usuario...' 
                                name='lastName' 
                                onChange={handleUser} 
                                value={user.lastName}>
                            </input>
                            <input class="form-control mt-2 ml-3"
                                required autoComplete='off' 
                                placeholder='Telefono del usuario...' 
                                name='phone' 
                                onChange={handleUser} 
                                value={user.phone}>
                            </input>
                            <input class="form-control mt-2 ml-3"
                                required autoComplete='off' 
                                placeholder='Dirección...' 
                                name='adress' 
                                onChange={handleUser} 
                                value={user.adress}>
                            </input>
                            <input class="form-control mt-2 ml-3"
                                required autoComplete='off' 
                                placeholder='Provincia del usuario...' 
                                name='state' 
                                onChange={handleUser} 
                                value={user.state}>
                            </input>
                            <input class="form-control mt-2 ml-3"
                                required autoComplete='off' 
                                placeholder='Correo electronico...' 
                                name='mail' 
                                onChange={handleUser} 
                                value={user.mail}>
                            </input>
                            <input class="form-control mt-2 ml-3"
                                autoComplete='off' 
                                placeholder='DNI...' 
                                name='identityCard' 
                                onChange={handleUser} 
                                value={user.identityCard}>
                            </input>
                            <select class="form-control mt-2 ml-3" name="admin" onChange={handleUser}>
                                <option key='false' value='false'>Usuario</option>
                                <option key='true' value='true'>Admin</option>
                            </select>
                            <button class="btn btn-primary btn-lg btn-block mt-2 ml-3" name='submit' type='submit' onClick={handleSubmit}> CREAR</button>
                        </div> 
                    </div>
                    </form>

                    {/* Formulario para modificar un usuario */}

                    <form class="form mb-9 ml-5" onSubmit={putSubmit}>
                    <div class='ml-5'  >
                    <h2 class='rounded-bottom ml-3'>Modificar un usuario</h2>
                        <div >
                            <ol>
                                <li class='form-inline'>
                                    <span> Usuario Numero: </span>
                                    <input class="form-control mt-2 ml-3"
                                        required autoComplete='off' 
                                        name='id' 
                                        value={ClientDetails.id}>
                                    </input>
                                </li>
                                <li class='form-inline'>
                                    <span> Nombre: </span>
                                    <input class="form-control mt-2 ml-3"                        
                                        placeholder={ClientDetails.name} 
                                        name='name' 
                                        onChange={handleUser} 
                                        value={user.name}>
                                    </input>
                                </li>
                                <li class='form-inline'>
                                    <span> Apellido: </span>
                                    <input class="form-control mt-2 ml-3"                        
                                        placeholder={ClientDetails.lastName} 
                                        name='lastName' 
                                        onChange={handleUser} 
                                        value={user.lastName}>
                                    </input>
                                </li>
                                <li class='form-inline'>
                                    <span> Telefono: </span>
                                    <input class="form-control mt-2 ml-3"                        
                                        placeholder={ClientDetails.phone}
                                        name='phone' 
                                        onChange={handleUser} 
                                        value={user.phone}>
                                    </input>
                                </li>
                                <li class='form-inline'>
                                    <span> Provincia: </span>
                                    <input class="form-control mt-2 ml-3"
                                        placeholder={ClientDetails.state} 
                                        name='state' 
                                        onChange={handleUser} 
                                        value={user.state}>
                                    </input>
                                </li>
                                <li class='form-inline'>
                                    <span> Dirección: </span>
                                    <input class="form-control mt-2 ml-3"                      
                                        placeholder={ClientDetails.adress} 
                                        name='adress' 
                                        onChange={handleUser} 
                                        value={user.adress}>
                                    </input>
                                </li>
                                <li class='form-inline'>
                                    <span> Email: </span>
                                    <input class="form-control mt-2 ml-2"                      
                                        placeholder={ClientDetails.mail} 
                                        name='mail' 
                                        onChange={handleUser} 
                                        value={user.mail}>
                                    </input>
                                </li>
                                <li class='form-inline'>
                                    <span> DNI: </span>
                                    <input class="form-control mt-2 ml-5"                      
                                        placeholder={ClientDetails.identityCard} 
                                        name='identityCard' 
                                        onChange={handleUser} 
                                        value={user.identityCard}>
                                    </input>
                                </li>
                                <li class='form-inline'>
                                    <span> Permisos: </span>
                                    <select class="form-control w-75 mt-2 ml-3" name="admin" onChange={handleUser}>
                                        <option key='false' value='false'>Usuario</option>
                                        <option key='true' value='true'>Admin</option>
                                    </select>
                                </li>
                            </ol>

                            <button class="btn btn-primary btn-lg btn-block mt-2 ml-3" name='submit' type='submit' onClick={ (e) => { e.preventDefault() ; putSubmit(ClientDetails, user)}  }> CONFIRMAR MODIFICACIÓN</button>
                        </div> 
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
};



export default GestionUsuarios;
