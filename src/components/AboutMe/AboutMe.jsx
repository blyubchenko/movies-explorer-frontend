import './AboutMe.css';
import foto from '../../images/pic__COLOR_pic.jpg'

function AboutMe() {
    return(
        <section
        className="about-me section section_size_narrow"
        id="student"
      >
        <h2 className="title-main">Студент</h2>
        <div className="line-decor"></div>
        <div className="about-me__wrapper">
          <div>
            <h3 className="about-me__title">Борис</h3>
            <p className="about-me__subtitle">
              Фронтенд-разработчик, 30 лет
            </p>
            <p className="about-me__paragraph">
              Я родился и живу в Саратове, закончил факультет экономики СГУ.
              У меня есть жена и дочь. Я люблю слушать музыку, а ещё
              увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в
              компании «СКБ Контур». После того, как прошёл курс по
              веб-разработке, начал заниматься фриланс-заказами и ушёл с
              постоянной работы.
            </p>
            <a
              href="https://github.com/blyubchenko"
              className="about-me__link link"
              target="_blank"
            >
              Github
            </a>
          </div>
          <img src={foto} alt="Фото автора" className="about-me__image" />
        </div>
      </section>
    )
}

export default AboutMe;