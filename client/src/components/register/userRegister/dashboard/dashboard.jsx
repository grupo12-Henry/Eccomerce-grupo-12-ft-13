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
            <div class=" col-sm-12  col-lg-9 ">
              <br />
              <br />
              <div class="panel panel-info">
                
                <div class="panel-body">
                  <div class="row">
                    
                    <form class='mt-5'  onSubmit={(e) => putSubmit(e)} >
                        <h2>Modifica tus datos</h2>
                      
                        <br />
                      
                      <img
                        style={{ borderRadius: "50%", height:'96px', width: '96px' }}
                        alt="User Pic"
                        src={currentUser.photoURL || photo}
                        class="img-circle img-responsive "
                        
                      /><div class="col-sm-8">
                          <input class="form-control mt-2 ml-1 "
                            placeholder={User.name || 'Name'}
                            name='name'
                            onChange={handleUser}
                            value={User.name}>
                          </input></div>
                          <div class="col-sm-8">
                          <input class="form-control mt-2 ml-1 "
                            placeholder={user.lastName || 'Last name'}
                            name='lastName'
                            onChange={handleUser}
                            value={User.lastName}>
                          </input></div>
                          <div class="col-sm-8">
                          <input class="form-control mt-2 ml-1"
                            placeholder={User.phone || 'Phone'}
                            name='phone'
                            onChange={handleUser}
                            value={User.phone}>
                          </input></div>
                          <div class="col-sm-8">
                          <input class="form-control mt-2 ml-1"
                            placeholder={User.state || 'State'}
                            name='state'
                            onChange={handleUser}
                            value={User.state}>
                          </input></div>
                          <div class="col-sm-8">
                          <input class="form-control mt-2 ml-1"
                            placeholder={User.adress || 'Adress'}
                            name='adress'
                            onChange={handleUser}
                            value={User.adress}>
                          </input></div>
                          <div class="col-sm-8">
                          <input class="form-control mt-2 ml-1"
                            placeholder={User.identityCard || 'DNI'}
                            name='identityCard'
                            onChange={handleUser}
                            value={User.identityCard}>
                          </input></div>
                          

                          <div class="col-sm-8"> <button class="btn btn-dark btn-lg btn-block mt-2 ml-1" name='submit' type='submit' onClick={() => { putSubmit(user, user) }}> CONFIRMAR MODIFICACIÓN</button></div>
                    
                    </form>
                    <div class=" col-sm-8 col-md-7 col-lg-7 mt-1 ml-1 RespButtonss">
                     
                      
                            <Link to={`/micuenta/mispedidos/${user.id}`} ><a class="btn btn-dark mt-1">
                              Mis pedidos anteriores
                            </a>
                            </Link>
                            <Link to={`/micuenta/favoritos/${user.id}`} ><a class="btn btn-dark mt-1">  
                             Mis favoritos
                          </a>
                          </Link>
                          
                       
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