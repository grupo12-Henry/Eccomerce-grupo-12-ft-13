import React from 'react'
import './navCategories.css';

export default function navCategories() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light position-absolute ‎‎pl-sm-2 bg-transparent ">
        <div class="container-fluid" >
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="nav justify-content-center">
            <li class="nav-item">
            <a class="navbar-brand font-weight-bold" aria-current="page" href="/home">Home</a>
              </li>              
            <li class="nav-item">
            <a class="navbar-brand" href="/vinos"> Vinos</a>
              </li> 
              <li class="nav-item">
                <a class="navbar-brand" aria-current="page" href="/cervezas">Cervezas</a>
              </li>
              <li class="nav-item">
                <a class="navbar-brand" href="/espumantes">Espumantes</a>
              </li>
              <li class="nav-item">
                <a class="navbar-brand" href="/varios">Varios</a>
              </li>
              <li class="nav-item">
                <a class="navbar-brand" href="/whiskys" tabindex="-1" aria-disabled="true">Whiskys</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}