import { NavLink, useNavigate } from "react-router-dom";
import './css/Header.css'
import { useState } from "react";

const Header = ({ }) => {
  const [isHandleMenu, setIsHandleMenu] = useState(false)

  const navigate = useNavigate();

  const handleExit = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('stateRender')
    navigate('/login')
  }

  const handleMenu = () => {
    setIsHandleMenu(!isHandleMenu)
  }

  return (
    <>
      <div className="header_container_nav_mobile">
        <ul className="header_nav_elements">
          <li><NavLink to='/home' className='header_link' >EVERCHIC</NavLink></li>
          <li onClick={() => setIsHandleMenu(true)}><i className='bx bx-menu header_menu'></i></li>
        </ul>
      </div>
      {
        isHandleMenu &&
        <div className="header_container">
          <i className='bx bx-x header_close_menu' onClick={() => setIsHandleMenu(false)}></i>
          <ul className='header_ul_link_container'>
            <li onClick={() => setIsHandleMenu(false)}>
              <NavLink to='/home' className='header_link header_logo' >EVERCHIC</NavLink>
            </li>
            <li onClick={() => setIsHandleMenu(false)}>
              <NavLink to='contacts' className='header_link'>Contactos</NavLink>
            </li>
            <li onClick={() => setIsHandleMenu(false)}>
              <NavLink to='orders' className='header_link'>Ordenes</NavLink>
            </li>
            <li onClick={() => setIsHandleMenu(false)}>
              <NavLink to='finance' className='header_link'>Finanzas</NavLink></li>
            <li onClick={() => setIsHandleMenu(false)}>
              <NavLink to='inventory' className='header_link'>Inventario</NavLink>
            </li>
            <li onClick={() => setIsHandleMenu(false)}>
              <NavLink to='chat' className='header_link'>Chat</NavLink>
            </li>
          </ul>
          <i className='bx bxs-log-out header_logout' onClick={handleExit}></i>
        </div>
      }
    </>
  );
}

export default Header;
