import './Entrance.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import React from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import InfoMessage from '../InfoMessage/InfoMessage';


function Entrance({
  type,
  linkTo,
  title,
  btnName,
  subtitle,
  linkName,
  onSubmit,
  infoMessage,
 }) {

  const {values, errors, isValid, handleChange} = useFormWithValidation();

  // ---ОБРАБОТЧИКИ---
  function handleSubmit(e) {
    e.preventDefault();
    type === 'signup'
      ? onSubmit(values.name, values.email, values.password)
      : onSubmit(values.email, values.password);
  };

  //---РАЗМЕТКА JSX---
  return (
    <section className='entrance'>
      <Logo />
      <h2 className='entrance__title'>{title}</h2>
      <form className='entrance__form' onSubmit={handleSubmit}>
        {type === 'signup' && (
          <label className='entrance__label'>Имя
            <input
              id='name'
              type='text'
              className='entrance__input'
              name='name'
              minLength='2'
              maxLength='30'
              required
              pattern='^[A-Za-zА-Яа-яЁё /s -]+$'
              value={values.name || ''}
              onChange={handleChange}
            />
            <span id='name-error' className='entrance__error'>
              {errors.name ? `Поле должно быть заполнено и может содержать только латиницу,
                кириллицу, пробел или дефис` : ''}
            </span>
            </label>
        )}
        <label className='entrance__label'>E-mail
          <input
            id='email'
            type='email'
            className='entrance__input'
            name='email'
            minLength='2'
            maxLength='30'
            required
            value={values.email || ''}
            onChange={handleChange}
          />
          <span id='email-error' className='entrance__error'>
            {errors.email || ''}
          </span>
        </label>
        <label className='entrance__label'>Пароль
          <input
            id='password'
            type='password'
            className='entrance__input'
            name='password'
            minLength='4'
            maxLength='20'
            required
            value={values.password || ''}
            onChange={handleChange}
          />
          <span id='password-error' className='entrance__error'>
            {errors.password || ''}
          </span>
        </label>

        <InfoMessage {...infoMessage} />

        <button
          className={`entrance__submit-btn app__link
            ${type === 'signup' && 'entrance__login-btn'}
          `}
          type='submit'
          disabled={!isValid}
        >
          {btnName}
        </button>
        <p className='entrance__subtitle'>{subtitle}
          <Link to={linkTo} className='entrance__link app__link'>{linkName}</Link>
        </p>
      </form>
    </section>
  );
};
  
export default Entrance;