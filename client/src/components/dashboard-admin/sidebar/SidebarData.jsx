import React from 'react';
import {
  FiUsers,
  FiDatabase
} from "react-icons/fi";
import { RiShoppingCartLine } from "react-icons/ri";

export const SidebarData = [
  {
    title: 'Usuarios',
    path: '/dashboard-admin/usuarios',
    icon: <FiUsers />,
  },
  {
    title: 'Productos',
    path: '/dashboard-admin/productos',
    icon: <FiDatabase />,
  },
  {
    title: 'Pedidos',
    path: '/dashboard-admin/pedidos',
    icon: <RiShoppingCartLine />,
  },
]
