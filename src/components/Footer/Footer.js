import './Footer.css';
import { Route } from 'react-router';

function Footer() {

  const endpoints = ['/movies', '/saved-movies', '/'];

  return (
    <Route exact path={endpoints}>
      <footer className='footer'>
        <h4 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h4>
        <div className='footer__box'>
          <p className='footer__year'> &copy; 2022</p>
          <ul className='footer__links'>
            <li className='footer__item'><a className='footer__link app__link-outside' href='https://praktikum.yandex.ru' target='_blank' rel='noopener noreferrer'>Яндекс.Практикум</a></li>
            <li className='footer__item'><a className='footer__link app__link-outside' href='https://github.com/romansitun' target='_blank' rel='noopener noreferrer'>Github</a></li>
            <li className='footer__item'><a className='footer__link app__link-outside' href='https://vk.com/id184339319' target='_blank' rel='noopener noreferrer'>Вконтакте</a></li>
          </ul>
        </div>
      </footer>
    </Route>
  );
}
  
export default Footer;