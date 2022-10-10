import './Portfolio.css';
import arrow from '../../images/arrow.svg';


function Portfolio() {

  return (
    <section className='portfolio content__section'>
    <h2 className='portfolio__title'>Портфолио</h2>
    <ul className='portfolio__projects'>
      <li className='portfolio__project'>
        <a className='portfolio__name app__link' href='https://github.com/romansitun/how-to-learn' target='_blank' rel='noopener noreferrer'>Статичный сайт</a>
        <a className='portfolio__link app__link' href='https://github.com/romansitun/how-to-learn' target='_blank' rel='noopener noreferrer'><img className='portfolio__pic' src={arrow} alt='Ссылка на проект со статичным сайтом'/></a>
      </li>
      <li className='portfolio__project'>
        <a className='portfolio__name app__link' href='https://github.com/romansitun/russian-travel' target='_blank' rel='noopener noreferrer'>Адаптивный сайт</a>
        <a className='portfolio__link app__link' href='https://github.com/romansitun/russian-travel' target='_blank' rel='noopener noreferrer'><img className='portfolio__pic' src={arrow} alt='Ссылка на проект с адаптивным сайтом'/></a>
      </li>
      <li className='portfolio__project'>
        <a className='portfolio__name app__link' href='https://github.com/romansitun/react-mesto-api-full' target='_blank' rel='noopener noreferrer'>Одностраничное приложение</a>
        <a className='portfolio__link app__link' href='https://github.com/romansitun/react-mesto-api-full' target='_blank' rel='noopener noreferrer'><img className='portfolio__pic' src={arrow} alt='Ссылка на проект с одностраничным приложением'/></a>
      </li>
    </ul>
    </section>
  );
}
  
export default Portfolio;