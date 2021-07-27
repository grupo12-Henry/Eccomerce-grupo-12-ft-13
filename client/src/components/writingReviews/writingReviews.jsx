import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import Nav from "../navbar/navbar";
import Footer from "../footer/footer";

export default function Dashboard() {
  const pedidos = useSelector((state) => state.pedidos);
  console.log("TUS PEDIDOS REY", pedidos);

  const dispatch = useDispatch();

  const handleUser = (e) => {
    //setUser({
    //...User,
    //[e.target.name]: e.target.value,
    //});
  };
  /* 
  const putSubmit = () => {
    //e.preventDefault()
    window.localStorage.setItem('user', JSON.stringify(User))
    dispatch(putUsuarios(user.id, User))
  }
 */

  return (
    <>
      <Nav />
      <h2 class="d-flex justify-content-center">Calificá este producto</h2>
      <div class="container-fluid d-flex justify-content-center">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad">
            <form class="mt-3 ml-2" onSubmit={(e) => console.log(e)}>
              <div class="form-row mb-5">
                <br />
                <div>
                  <textarea
                    class="form-control mt-2 ml-5"
                    placeholder="Deja tu comentario aca"
                    name="identityCard"
                    onChange={handleUser}
                  ></textarea>

                  <button
                    class="btn btn-dark btn-lg btn-block mt-2 ml-5"
                    name="submit"
                    type="submit"
                    onClick={() => {
                      //   putSubmit(user, user);
                    }}
                  >
                    ENVIAR CALIFICACION
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
