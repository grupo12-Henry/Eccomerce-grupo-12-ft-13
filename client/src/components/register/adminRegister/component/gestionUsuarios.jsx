import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, getUserDetails, postUsuarios, putUsuarios, deleteUsuarios } from '../../../../actions';

function GestionUsuarios() {

    const AllClients = useSelector(state => state.AllClients);
    const ClientDetails = useSelector(state => state.ClientDetails);
    const dispatch = useDispatch();

    useEffect(() => { 
        dispatch(getAllUsers());
    }, []);

    //A partir de aca es lo que estaba codeado.
    const [user, setUser] = useState({ 
        id:'',
        name: '',
        lastname: '',
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
        alert('Usuario modificado')
    }

    const insertClientInfo = (e) => {
        e.preventDefault();
        dispatch(getUserDetails(e.target.value))
    }

    const deleteSubmit = (e) => {
        deleteUsuarios(e.target.value)
        alert('Usuario borrado')
    }

    return (
        <div class='container'>

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
                        <th scope="col" data-field="lastname" data-sortable="true" >Apellido</th>
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
                            AllClients.map(client => (
                                <tr>
                                <th scope="row">{client.id}</th>
                                <td>{client.name}</td>
                                <td>{client.lastname}</td>
                                <td>{client.identityCard}</td>
                                <td>{client.phone}</td>
                                <td>{client.mail}</td>
                                <td>{client.adress}</td>
                                <td>{client.state}</td>
                                <td >{client.admin && client.admin}</td>
                                <td >
                                <button class="btn btn-sm btn-info" value={client.id} onClick={(e) => { insertClientInfo(e)}} >
                                    Modificar
                                </button>
                            </td>
                            <td >
                                <button class="btn btn-sm btn-danger" value={client.id} onClick={(e) => deleteSubmit(e)} >
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

            {/* A partir de aca es lo que estaba codeado  */}
            <form onSubmit={handleSubmit}>
            <div class="form-row mt-5 ml-2">
                <h2 class='rounded-bottom'>Crear un usuario</h2>
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
                        name='lastname' 
                        onChange={handleUser} 
                        value={user.lastname}>
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
                        placeholder='Dirección...' 
                        name='adress' 
                        onChange={handleUser} 
                        value={user.adress}>
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
                        placeholder='Correo electronico...' 
                        name='mail' 
                        onChange={handleUser} 
                        value={user.mail}>
                    </input>
                    <input class="form-control mt-2 ml-5"
                        autoComplete='off' 
                        placeholder='DNI...' 
                        name='identityCard' 
                        onChange={handleUser} 
                        value={user.identityCard}>
                    </input>
                    {/* <input class="form-control mt-2 ml-5"
                        autoComplete='off' 
                        placeholder='Hecer admin (true o false)..' 
                        name='admin' 
                        onChange={handleUser} 
                        value={user.admin}>
                    </input> */}

                    <label>Permisos: </label>
                    <select class="form-control mt-2 ml-5" name="admin" value={user.admin} onChange={handleUser}>
                        <option key='false' value='false'>Usuario</option>
                        <option key='true' value='true'>Admin</option>
                    </select>



                </div>
                <div >
                    <input class="btn btn-primary btn-md mt-5 ml-5" type='submit' onSubmit={handleSubmit}/>
                </div> 
            </div>
            </form>

            <form class='mt-5 ml-2' onSubmit={putSubmit} >
            <div class="form-row mb-9" >
                <h2>Modificar un usuario</h2>
                <br/>
                <div >
                    <input class="form-control mt-5 ml-5"
                        required autoComplete='off' 
                        placeholder={ClientDetails.id} 
                        name='id' 
                        onChange={handleUser} 
                        value={user.id}>
                    </input>
                    <input class="form-control mt-2 ml-5"
                        
                        placeholder={ClientDetails.name} 
                        name='name' 
                        onChange={handleUser} 
                        value={user.name}>
                    </input>
                    <input class="form-control mt-2 ml-5"
                        
                        placeholder={ClientDetails.lastname} 
                        name='lastname' 
                        onChange={handleUser} 
                        value={user.lastname}>
                    </input>
                    <input class="form-control mt-2 ml-5"
                        
                        placeholder={ClientDetails.phone}
                        name='phone' 
                        onChange={handleUser} 
                        value={user.phone}>
                    </input>
                    <input class="form-control mt-2 ml-5"
                        placeholder={ClientDetails.state} 
                        name='state' 
                        onChange={handleUser} 
                        value={user.state}>
                    </input>
                    <input class="form-control mt-2 ml-5"
                      
                        placeholder={ClientDetails.adress} 
                        name='adress' 
                        onChange={handleUser} 
                        value={user.adress}>
                    </input>
                    <input class="form-control mt-2 ml-5"
                      
                        placeholder={ClientDetails.mail} 
                        name='mail' 
                        onChange={handleUser} 
                        value={user.mail}>
                    </input>
                    <input class="form-control mt-2 ml-5"
                      
                        placeholder={ClientDetails.identityCard} 
                        name='identityCard' 
                        onChange={handleUser} 
                        value={user.identityCard}>
                    </input>
                    {/* <input class="form-control mt-2 ml-5"                       
                        placeholder={ClientDetails.admin} 
                        name='admin' 
                        onChange={handleUser} 
                        value={user.admin}>
                    </input> */}
                    <label>Permisos: </label>
                    <select class="form-control mt-2 ml-5" name="admin" value={user.admin} onChange={handleUser}>
                        <option key='false' value='false'>Usuario</option>
                        <option key='true' value='true'>Admin</option>
                    </select>

                </div>
                <div >
                    <input class="btn btn-primary btn-m mt-5 ml-5" type='submit' onSubmit={handleSubmit}/>
                </div> 
                </div>
            </form>

            {/* <form onSubmit={deleteSubmit}>
            <h2>Eliminar un usuario</h2>
                <br/>
                <div >
                    <input class="form-control mt-5 ml-5"
                        required autoComplete='off' 
                        placeholder='Id del usuario...' 
                        name='id' 
                        onChange={handleUser} 
                        value={user.id}>
                    </input>
                    <input class="btn btn-primary btn-m mt-5 ml-5" type='submit'/>
                </div>
            </form > */}

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