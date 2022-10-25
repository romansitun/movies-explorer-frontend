import './AboutMe.css';
import photo from '../../images/my-photo.jpg';
import React  from 'react';

function AboutMe() {

  return (
    <section className='student content__section' id='student'>
      <h2 className='content__title'>Студент</h2>
      <article className='about-me'>
        <div className='about-me__text-box'>
          <div className='about-me__main-info'>
            <h3 className='about-me__title'>Роман</h3>
            <p className='about-me__subtitle'>Фронтенд-разработчик, 26 лет</p>
            <p className='about-me__text'>Для современного мира укрепление и развитие внутренней структуры является качественно новой ступенью позиций, занимаемых участниками в отношении поставленных задач. Разнообразный и богатый опыт говорит нам, что укрепление и развитие внутренней структуры обеспечивает актуальность модели развития. Но граница обучения кадров, в своём классическом представлении, допускает внедрение новых предложений.
            </p>
          </div>
          <ul className='about-me__contacts'>
            <li className='about-me__contact'><a className='about-me__link app__link-outside' href='https://vk.com/id184339319' target='_blank' rel='noopener noreferrer'>Вконтакте</a></li>
            <li className='about-me__contact'><a className='about-me__link app__link-outside' href='https://github.com/romansitun' target='_blank' rel='noopener noreferrer'>Github</a></li>
          </ul>
        </div>
        <div className='about-me__photo-box'>
          <img className='about-me__photo' src={photo} alt='Фото студента' />
        </div>
      </article>
    </section>
  );
}
  
export default AboutMe;