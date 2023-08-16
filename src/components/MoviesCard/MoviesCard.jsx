import { transformTimeDuration } from "../../utils/utils";
import "./MoviesCard.css";

function MoviesCard({
  movie,
  savedMoviesPage,
  handleSeveMovie,
  handleSeveMovieDelete,
  movieIsSaved,
}) {
  function openTrailer() {
    window.open(movie.trailerLink);
  }

  function handleSaveButton() {
    handleSeveMovie(movie);
  }

  function handelDeleteButton() {
    handleSeveMovieDelete(movie._id || movieIsSaved);
  }
  return (
    <article className="card">
      <h3 className="card__title">{movie.nameRU}</h3>
      <p className="card__duration">{transformTimeDuration(movie.duration)}</p>
      <img
        onClick={openTrailer}
        className="card__image"
        src={movie.image}
        alt={movie.nameRU}
      />
      {savedMoviesPage ? (
        <button className="card__button card__button_text-size" type="button" onClick={handelDeleteButton}>✖</button>
      ) : (
        <button
          className={`card__button ${movieIsSaved  && "card__button_save_true"}`}
          type="button"
          onClick={!movieIsSaved ? handleSaveButton : handelDeleteButton}
        >
          {movieIsSaved ? "✓" : "Сохранить"}
        </button>
      )}
    </article>
  );
}

export default MoviesCard;
