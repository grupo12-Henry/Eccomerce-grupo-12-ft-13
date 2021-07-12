import React from 'react'



export default function navCategories() {

  


    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/home">Home</a>
          <a class="navbar-brand" href="/vinos">Vinos</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
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
              <li class="nav-item">
                <a class="navbar-brand" href="/bebidas" tabindex="-1" aria-disabled="true">Bebidas</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}