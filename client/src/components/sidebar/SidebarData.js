import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import StoreIcon from '@material-ui/icons/Store';
import GroupIcon from '@material-ui/icons/Group';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const SidebarData = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: "/home"
  },
  {
    title: 'Products',
    icon: <StoreIcon />,
    link: "/dashboard-admin1"
  },
  {
    title: 'Users',
    icon: <GroupIcon />,
    link: "/dashboard-admin1"
  },
  {
    title: 'Orders',
    icon: <AssignmentIcon />,
    link: "/dashboard-admin1"
  },
]
