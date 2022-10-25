import './Logo.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import React  from 'react';


function Logo() {


  return (
    <Link to='/' className='logo'>
      <img className='logo__pic' src={logo} alt='Логотип приложения Movies' />
    </Link>
  );
}
  
export default Logo;