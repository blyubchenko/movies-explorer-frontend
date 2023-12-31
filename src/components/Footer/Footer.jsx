import './Footer.css'

function Footer() {
    return(
        <footer className="footer section section_size_narrow">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__wrapper">
          <span className="footer__copyright">© 2023</span>
          <ul className="footer__list list">
            <li>
              <a
              target="_blank"
                href="https://practicum.yandex.ru/"
                className="footer__link link"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a href="https://github.com/" target="_blank" className="footer__link link">
                Github
              </a>
            </li>
          </ul>
        </div>
      </footer>
    )
}

export default Footer;