import React from 'react';
import {
  FaHome,
  FaWineBottle,
  FaUser,
  FaTruck,
  FaFacebookMessenger
} from "react-icons/fa";

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard-admin',
    icon: <FaHome />
  },
  {
    title: 'Usuarios',
    path: '/dashboard-admin/usuarios',
    icon: <FaUser />,
  },
  {
    title: 'Productos',
    path: '/dashboard-admin/productos',
    icon: <FaWineBottle />,
  },
  {
    title: 'Pedidos',
    path: '/dashboard-admin/pedidos',
    icon: <FaTruck />,
  },
]
