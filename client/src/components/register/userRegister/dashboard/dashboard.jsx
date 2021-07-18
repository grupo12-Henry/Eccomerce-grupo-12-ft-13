import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";
import Nav from "../../../navbar/navbar";
import Footer from "../../../footer/footer";
import Loading from "../../../loading/Loading";

export default function Dashboard() {
  const user = useSelector((state) => state.user);
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();

  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to Log Out");
    }
  }
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 400);
  }, []);

  if (!loading) {
    return <Loading />;
  }
  console.log(user)
  return (
    <>
      <Nav />
      {currentUser ? (
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad">
              <br />
              <br />
              <div class="panel panel-info">
                <div class="panel-heading">
                  <h3 class="text-center">Perfil de usuario</h3>
                </div>
                <div class="panel-body">
                  <div class="row">
                    <div class="col-md-3 col-lg-3 " align="center">
                      <img
                        style={{ borderRadius: "50%" }}
                        alt="User Pic"
                        src={currentUser.photoURL}
                        class="img-circle img-responsive"
                      />
                    </div>
                    <div class=" col-md-9 col-lg-9 ">
                      <table class="table table-user-information">
                        <tbody>
                          <tr>
                            <td>Nombre:</td>
                            <td>{user.name}</td>
                          </tr>
                          <tr>
                            <td>Apellido:</td>
                            <td>{user.lastName}</td>
                          </tr>
                          <tr>
                            <td>Fecha de nacimiento</td>
                            <td>01/24/1988</td>
                          </tr>
                          <tr>
                            <td>Dirección</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Email:</td>
                            <td>
                              <a href="mailto:info@support.com">
                                <strong></strong>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Teléfono</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Provincia</td>
                            <td></td>
                          </tr>
                          <a href="edit.html" style={{ textAlign: "center" }}>
                            Modificar datos
                          </a>
                        </tbody>
                      </table>
                      <div class="mb-5">
                        <Link to={`/micuenta/mispedidos/${user.id}`} class="btn btn-dark" ><a class="btn btn-dark">
                          Mis pedidos anteriores
                        </a>
                        </Link>
                        <a href="#" class="btn btn-dark ml-5">
                          Mis favoritos
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="panel-footer">
                    <br />
                    <Link to="/home" className="btn btn-dark mr-3">
                      VOLVER
                    </Link>
                    <button className="btn btn-warning " onClick={handleLogout}>
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
      <Footer />
    </>
  );
      
}