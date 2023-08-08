import './Promo.css';

function Promo() {
  return (
    <section className="banner section section_size_narrow">
      <h1 className="banner__title title">
        Учебный проект студента факультета Веб&nbsp;-&nbsp;разработки.
      </h1>
      <nav className="banner__nav">
        <ul className="banner__nav-list list">
          <li>
            <a className="link banner__nav-link" href="#project">
              О проекте
            </a>
          </li>
          <li>
            <a className="link banner__nav-link" href="#technologies">
              Технологии
            </a>
          </li>
          <li>
            <a className="link banner__nav-link" href="#student">
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Promo;
