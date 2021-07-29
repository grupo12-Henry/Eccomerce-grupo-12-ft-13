import React from 'react';
import {
  FiUsers,
  FiDatabase
} from "react-icons/fi";
import { RiShoppingCartLine } from "react-icons/ri";
import {AiOutlineHome} from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'Home',
    path: '/dashboard-admin',
    icon: <AiOutlineHome />
  },
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
