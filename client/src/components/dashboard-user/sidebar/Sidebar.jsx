import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import Dropdown from "react-bootstrap/Dropdown";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import logo from './logo.png';
import SearchBar from '../../searchbar/searchbar';
import {FiShoppingCart} from 'react-icons/fi';
import {FaRegUser} from 'react-icons/fa';
import { useAuth } from "../../../contexts/AuthContext";
import { useSelector, useDispatch  } from 'react-redux';
import NavModal from '../../navModal/navModal';
import './sidebar.css';

const Nav = styled.div`
background: black;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const SidebarNav = styled.nav`
background: black;
width: 235px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
transition: 350ms;
z-index: 10;
`

const SidebarWrap = styled.div`
width: 100%;
`

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [isOpen, setIsOpen] = useState(false);
  const user1 = useSelector((state) => state.user);
  const productCart = useSelector((state) => state.productCart);
  const handleLogin = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const history = useHistory();

  const { currentUser, logout } = useAuth();

  const handleLogOut = async () => {
    window.localStorage.removeItem('user')
    await logout();
    setIsOpen(false);
    history.push("/home");
  };

  return (
    <>
      <IconContext.Provider value={{ color: 'white' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>

          <div className='logo'>
            <a href="/home">
              <img src={logo} alt='Logo' className="logo"/>
            </a>
          </div>


            <div className="usuario">
                <a href="/home/user" onClick={handleLogin}>
                  <FaRegUser />
                </a>
            </div>

            <div className="searchBar">
                <SearchBar />
            </div>

            <div className="carrito">
                <a href="/home/compras">
                  <i class="fas fa-shopping-cart">
                    <FiShoppingCart />
                    <span id="cart_menu_num" class="top-0 start-100 translate-middle badge rounded-pill bg-danger" data-action="cart-can">{productCart?.filter(e=>e.stock>0).length}</span>
                  </i>
                </a>
            </div>



            <li>
            {currentUser ? (
                  <Dropdown className="dropdown">
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                      Options
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="/micuenta">Mi cuenta</Dropdown.Item>
                      <Dropdown.Item href="/update-profile">Cambiar contraseña</Dropdown.Item>
                      {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL||user1&&user1.admin ? (
												<Dropdown.Item href="/dashboard-admin">
													Dashboard Admin
												</Dropdown.Item>
											)
                      : null
                      }
                    <Dropdown.Item onClick={handleLogOut} href="/home">Cerrar Sesion</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
            ) :
            ( null
            //   <li class="mt-3">
            // <a class=" m-4" href="/home/user" onClick={handleLogin}>
            //   <img alt="user img" src={user} width="20px" />
            // </a>
            // </li>
            )
            }
            </li>
            
           
        </Nav>

        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  )
}

export default Sidebar;
