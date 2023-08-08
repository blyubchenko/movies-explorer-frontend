import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="project section section_size_narrow" id="project">
      <h2 className="title-main">О проекте</h2>
      <div className="line-decor"></div>
      <div className="project__wrapper">
        <h5 className="project__subtitle">Дипломный проект включал 5 этапов</h5>
        <p className="project__paragraph">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <h5 className="project__subtitle">
          На выполнение диплома ушло 5 недель
        </h5>
        <p className="project__paragraph">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="project__time-conteiner">
        <span className="project__time-bord project__time-bord_color_green">
          1 неделя
        </span>
        <span className="project__time-text">Back-end</span>
        <span className="project__time-bord project__time-bord_color_gray">
          4 недели
        </span>
        <span className="project__time-text">Front-end</span>
      </div>
    </section>
  );
}

export default AboutProject;
