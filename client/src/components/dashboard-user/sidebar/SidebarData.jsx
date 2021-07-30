import React from 'react';
import {
  FaHome,
  FaWineBottle,
  FaWineGlassAlt,
  FaFacebookMessenger,
  FaHeart
} from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <FaHome />,
  },
  {
    title: 'Vinos',
    path: '/home/vinos',
    icon: <FaWineGlassAlt />,
    subnav: [
      {
        title: 'vinos'
      }
    ]
  },
  {
    title: 'Cervezas',
    path: '/home/cervezas',
    icon: <FaWineBottle />,
  },
  {
    title: 'Espumantes',
    path: '/home/espumantes',
    icon: <FaWineBottle />,
  },
  {
    title: 'Whiskys',
    path: '/home/whiskys',
    icon: <FaWineBottle />,
  },
  {
    title: 'Varios',
    path: '/home/varios',
    icon: <FaWineBottle />,
  },
  {
    title: 'Contacto',
    path: '/home/contacto',
    icon: <FaFacebookMessenger />,
  },
  {
    title: 'Favoritos',
    path: '/home/favoritos',
    icon: <FaHeart />,
  }
]
