import React from 'react';
import { AiOutlineHome, AiOutlineArrowRight, AiOutlineMessage } from "react-icons/ai";

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiOutlineHome />,
  },
  {
    title: 'Vinos',
    path: '/home/vinos',
    icon: <AiOutlineArrowRight />,
  },
  {
    title: 'Cervezas',
    path: '/home/cervezas',
    icon: <AiOutlineArrowRight />,
  },
  {
    title: 'Espumantes',
    path: '/home/espumantes',
    icon: <AiOutlineArrowRight />,
  },
  {
    title: 'Whiskys',
    path: '/home/whiskys',
    icon: <AiOutlineArrowRight />,
  },
  {
    title: 'Varios',
    path: '/home/varios',
    icon: <AiOutlineArrowRight />,
  },
  {
    title: 'Contacto',
    path: '/home/contacto',
    icon: <AiOutlineMessage />,
  },
]
