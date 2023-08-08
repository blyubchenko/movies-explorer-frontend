import './Techs.css'

function Techs() {
    return(
        <section className="technologies section" id="technologies">
            <div className="section_size_narrow section">
              <h2 className="title-main">Технологии</h2>
              <div className="line-decor line-decor_color_black"></div>
              <h3 className="technologies__title title">7 технологий</h3>
              <p className="technologies__subtitle">
                На курсе веб-разработки мы освоили технологии, которые применили
                в дипломном проекте.
              </p>
              <ul className="technologies__list list">
                <li className="technologies__item">HTML</li>
                <li className="technologies__item">CSS</li>
                <li className="technologies__item">JS</li>
                <li className="technologies__item">React</li>
                <li className="technologies__item">Git</li>
                <li className="technologies__item">Express.js</li>
                <li className="technologies__item">mongoDB</li>
              </ul>
            </div>
          </section>
    )
}

export default Techs;