import './Login.css';
import Entrance from "../Entrance/Entrance";
import React from 'react';

function Login({ onLogin, infoMessage }){

  //---РАЗМЕТКА JSX---
  return (
    <Entrance
      type='signin'
      linkTo='signup'
      title='Рады видеть!'
      btnName='Войти'
      subtitle='Ещё не зарегистрированы?'
      linkName='Регистрация'
      onSubmit={onLogin}
      infoMessage={infoMessage}
    />
  );
};
 
export default Login;