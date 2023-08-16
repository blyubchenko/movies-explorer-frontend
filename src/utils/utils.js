export function transformTimeDuration (duration) {
    const hours = Math.trunc(duration/60);
    const minutes = duration%60;
    if(hours === 0){
      return `${duration} минут`;
    } 
    if (minutes === 0){
      return `${hours} ч`;
    }
    else {
      return `${hours}ч ${minutes}м`
    }
  }

export function convertMovie(movies) {
    return movies.map((movie) => {
      return {
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        director: movie.director,
        country: movie.country,
        year: movie.year,
        duration: movie.duration,
        description: movie.description,
        trailerLink: movie.trailerLink,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      };
    });
  }

  export function filterMovies(movies, query, checkedShort) {
    const moviesQuery = movies.filter((movie) => {
      const ruNameMovie = String(movie.nameRU).toLowerCase().trim();
      const enNameMovie = String(movie.nameEN).toLowerCase().trim();
      const userQuery = query.toLowerCase().trim();
      return ruNameMovie.includes(userQuery) || enNameMovie.includes(userQuery);
    });
   return checkedShort ? filterShortMovies(moviesQuery) : moviesQuery;
  }

  export function filterShortMovies(movies) {
    return movies.filter((movie) => {
      return movie.duration < 40;
    });
  }
  
  export function checkingMovieSaving(saveMovies, movie) {
    if (!saveMovies) {
      return;
    }
    const savedMovie = saveMovies.find((saveMovie) => saveMovie.movieId === movie.movieId);
    return savedMovie ? savedMovie._id : null;
  }
  
  
  
