import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";
import Loading from "../../../dashboard-user/loading/LoadingAdmin";
import { getUser, putUsuarios } from "../../../../actions";
import photo from '../../../../assets/images/avatar.png'

export default function Dashboard() {
  const user = useSelector((state) => state.user);
  console.log('USER', user)
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const dispatch = useDispatch()
  const [User, setUser] = useState(user)

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   //dispatch(postUsuarios(user))
  // }
  const handleUser = (e) => {
    setUser({
      ...User,
      [e.target.name]: e.target.value
    })
  }

  const putSubmit = (e) => {
    
    window.localStorage.setItem('user', JSON.stringify(User))
    dispatch(putUsuarios(user.id, User))
  }

  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/home");
    } catch {
      setError("Failed to Log Out");
    }
  }
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 600);
  }, []);

  if (!loading) {
    return <Loading />;
  }
  return (
    <>
      {currentUser ? (
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad">
              <br />
              <br />
              <div class="panel panel-info">
                
                <div class="panel-body">
                  <div class="row">
                    
                    <form class='mt-5 ml-2' onSubmit={(e) => putSubmit(e)} >
                        <h2>Modifica tus datos</h2>
                      <div class="form-row mb-5 mt-4" >
                        <br />
                      
                      <img
                        style={{ borderRadius: "50%", height:'96px', width: '96px' }}
                        alt="User Pic"
                        src={currentUser.photoURL || photo}
                        class="img-circle img-responsive"
                      />
                    
                        <div >
                         
                          <input class="form-control mt-2 ml-5"
                            placeholder={User.name || 'Name'}
                            name='name'
                            onChange={handleUser}
                            value={User.name}>
                          </input>
                          <input class="form-control mt-2 ml-5"
                            placeholder={user.lastName || 'Last name'}
                            name='lastName'
                            onChange={handleUser}
                            value={User.lastName}>
                          </input>
                          <input class="form-control mt-2 ml-5"
                            placeholder={User.phone || 'Phone'}
                            name='phone'
                            onChange={handleUser}
                            value={User.phone}>
                          </input>
                          <input class="form-control mt-2 ml-5"
                            placeholder={User.state || 'State'}
                            name='state'
                            onChange={handleUser}
                            value={User.state}>
                          </input>
                          <input class="form-control mt-2 ml-5"
                            placeholder={User.adress || 'Adress'}
                            name='adress'
                            onChange={handleUser}
                            value={User.adress}>
                          </input>
                          {/* <input class="form-control mt-2 ml-5"                      
                        placeholder={User.mail||'Email'} 
                        name='mail' 
                        onChange={handleUser} 
                        value={User.mail}>
                    </input> */}
                          <input class="form-control mt-2 ml-5"
                            placeholder={User.identityCard || 'DNI'}
                            name='identityCard'
                            onChange={handleUser}
                            value={User.identityCard}>
                          </input>
                          

                          <button class="btn btn-dark btn-lg btn-block mt-2 ml-5" name='submit' type='submit' onClick={() => { putSubmit(user, user) }}> CONFIRMAR MODIFICACIÓN</button>
                        </div>
                      </div>
                    </form>
                    <div class=" col-md-9 col-lg-9 ">
                      <div class="mb-2">
                      
                            <Link to={`/micuenta/mispedidos/${user.id}`} ><a class="btn btn-dark mr-2">
                              Mis pedidos anteriores
                            </a>
                            </Link>
                            <Link to={`/micuenta/favoritos/${user.id}`} ><a class="btn btn-dark">  
                             Mis favoritos
                          </a>
                          </Link>
                          
                        </div>
                    </div>
                  </div>
                  <div class="panel-footer">
                    <br />
                    <Link to="/home" className="btn btn-dark mr-3">
                      VOLVER
                    </Link>
                    <button className="btn btn-danger " onClick={handleLogout}>
                      Cerrar Sesion
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">Volvé a loguearte</div>
      )}
    </>
  );
}