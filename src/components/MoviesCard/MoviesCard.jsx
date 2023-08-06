import "./MoviesCard.css";

function MoviesCard({title, image, duration, onSaveFilm, isSavedMode, savedMoviesPage}) {
  return (
    <article className="card">
      <h3 className="card__title">{title}</h3>
      <p className="card__duration">{duration} минут</p>
      <img
        className="card__image"
        src={image}
        alt={title}
      />
      <button className={`card__button ${savedMoviesPage && "card__button_text-size"} ${isSavedMode ? 'card__button_save_true' : ''}`} onClick={onSaveFilm}>
      {isSavedMode 
    ? "✓" 
    : savedMoviesPage
      ? "✖"
      : "Сохранить"
  }
        </button>
    </article>
  );
}

export default MoviesCard;