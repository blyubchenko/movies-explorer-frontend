import './Portfolio.css';

function Portfolio() {
    return(
        <section className="portfolio section section_size_narrow">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list list">
          <li className="portfolio__item">
            <a
              target="_blank"
              href="https://github.com/blyubchenko/how-to-learn"
              className="portfolio__link link"
            >
              Статичный сайт
            </a>
          </li>
          <li className="portfolio__item">
            <a
              target="_blank"
              href="https://blyubchenko.github.io/russian-travel/"
              className="portfolio__link link"
            >
              Адаптивный сайт
            </a>
          </li>
          <li className="portfolio__item">
            <a
              target="_blank"
              href="https://blyubchenko.github.io/react-mesto-auth/"
              className="portfolio__link link"
            >
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </section>
    )
}

export default Portfolio;