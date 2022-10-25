import './PageNotFound.css';
import { Link, useHistory } from "react-router-dom";
import React  from 'react';

function PageNotFound() {

  const history = useHistory();

  // ---ОБРАБОТЧИКИ---
  function handleClick() {
    history.goBack();
  };

  //---РАЗМЕТКА JSX---
  return (
    <section className='notfound'>
      <div className='notfound__desc'>
        <h2 className='notfound__title'>404</h2>
        <p className='notfound__subtitle'>Страница не найдена</p>
      </div>
      <Link onClick={handleClick} className='notfound__link app__link'>Назад</Link>
    </section>
  );
};
  
export default PageNotFound;