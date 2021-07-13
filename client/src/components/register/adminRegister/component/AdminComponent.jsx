import React from 'react'
import GestionProductos from './gestionProductos'
import GestionUsuarios from './gestionUsuarios'
import GestionPedidos from './gestionPedidos'

export default function AdminComponent() {
  return (
    <div>
      <p>Gestion de productos</p>
      <GestionProductos/>
      <p>Gestion de usuarios</p>
      <GestionUsuarios/>
      <p>Gestion de pedidos</p>
      <GestionPedidos/>
    </div>
  )
}
