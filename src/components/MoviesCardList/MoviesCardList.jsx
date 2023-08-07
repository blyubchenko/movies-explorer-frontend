import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const movies = [
    {
      country: 'США', 
      director: 'Квентин Тарантино',
      duration: 162,
      year: '1994',
      description: 'Криминальная драма об укрывательстве после ограбления ювелирного магазина и превратностях судьбы.',
      image: 'https://media.filmz.ru/photos/full/filmz.ru_f_47043.jpg',
      trailerLink: 'https://www.youtube.com/watch?v=s7EdQ4FqbhY', 
      thumbnail: 'https://images.kinorium.com/movie/poster/51057/180x270/51057.jpg',
      owner: '613bda1f5a111b001b2a3b42',
      movieId: 51057,
      nameRU: 'Криминальное чтиво',
      nameEN: 'Pulp Fiction'
    },
    {
      country: 'США', 
      director: 'Кристофер Нолан',
      duration: 148, 
      year: '2008',
      description: 'Супергеройский фильм о Бэтмене, сражающемся с дурманящим разум преступником Джокером.',
      image: 'https://filmonpaper.com/wp-content/uploads/2011/05/TheDarkKnight_quad_UK-1.jpg', 
      trailerLink: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
      thumbnail: 'https://images.kinorium.com/movie/poster/22673/180x270/22673.jpg',
      owner: '613bda435a111b001b2a3b43', 
      movieId: 22673,
      nameRU: 'Тёмный рыцарь',
      nameEN: 'The Dark Knight'
    },
    {
      country: 'США',
      director: 'Джон Фавро', 
      duration: 126,
      year: '2008', 
      description: 'Фильм о железном супергерое Железном человеке и его борьбе с оружейным магнатом Обадайей Стейном.',
      image: 'https://cdn.shopify.com/s/files/1/1288/8361/files/Marvels_Iron_Man_Side_2.jpg?v=1567028508',
      trailerLink: 'https://www.youtube.com/watch?v=8hYlB38asDY',
      thumbnail: 'https://images.kinorium.com/movie/poster/43614/180x270/43614.jpg',
      owner: '613bda765a111b001b2a3b44',
      movieId: 43614,
      nameRU: 'Железный человек',
      nameEN: 'Iron Man'
    },
    {
      country: 'США', 
      director: 'Стивен Спилберг',
      duration: 115, 
      year: '1993',
      description: 'Фильм о мальчике Эллиоте, подружившемся с инопланетянином, которого он спрятал от правительства в сарае.',
      image: 'https://avatars.mds.yandex.net/i?id=6263c3f4072cc81abb6f45138044c768b42521fd-9098231-images-thumbs&n=13', 
      trailerLink: 'https://www.youtube.com/watch?v=PfPdYYsEfAE',
      thumbnail: 'https://images.kinorium.com/movie/poster/38788/180x270/38788.jpg',
      owner: '613bda985a111b001b2a3b45',
      movieId: 38788,
      nameRU: 'Инопланетянин',
      nameEN: 'E.T. the Extra-Terrestrial'
    },
    {
      country: 'США',
      director: 'Джеймс Кэмерон',
      duration: 194, 
      year: '1997',
      description: 'Мелодрама о любви художника и аристократки на обреченном лайнере Титаник.',
      image: 'https://ru-instagram.ru/wp-content/uploads/2020/12/tit.jpg',
      trailerLink: 'https://www.youtube.com/watch?v=2e-eXJ6HgkQ',
      thumbnail: 'https://images.kinorium.com/movie/poster/652/180x270/652.jpg',
      owner: '613bdaae5a111b001b2a3b46',
      movieId: 652,
      nameRU: 'Титаник',
      nameEN: 'Titanic'
    },
    {
      country: 'США',
      director: 'Кристофер Нолан',
      duration: 164,
      year: '2010', 
      description: 'Фантастический боевик о группе людей, проникающих в сны других для кражи информации.',
      image: 'https://media.kg-portal.ru/movies/i/inception/posters/inception_28.jpg', 
      trailerLink: 'https://www.youtube.com/watch?v=8hP9D6kZseM', 
      thumbnail: 'https://images.kinorium.com/movie/poster/49177/180x270/49177.jpg',
      owner: '613bdb385a111b001b2a3b47',
      movieId: 49177,
      nameRU: 'Начало', 
      nameEN: 'Inception'
    },
    {
      country: 'США',
      director: 'Фрэнсис Форд Коппола',
      duration: 202,
      year: '1972',
      description: 'Криминальная драма об итало-американской мафиозной семье Корлеоне.',
      image: 'https://w.forfun.com/fetch/b7/b785bc6605b49223779c1609255729a0.jpeg?w=1470',
      trailerLink: 'https://www.youtube.com/watch?v=UaVTIH8mujA',
      thumbnail: 'https://images.kinorium.com/movie/poster/55050/180x270/55050.jpg',
      owner: '613bdb5d5a111b001b2a3b48', 
      movieId: 55050,
      nameRU: 'Крёстный отец',
      nameEN: 'The Godfather'
    },
    {
      country: 'Великобритания',
      director: 'Дэвид Йейтс',
      duration: 164, 
      year: '2011', 
      description: 'Фэнтези-фильм о мальчике Гарри Поттере, который учится в школе волшебства Хогвартс.',
      image: 'https://w.forfun.com/fetch/b9/b9caa234c1d9156f168f9452a1ce2d97.jpeg',
      trailerLink: 'https://www.youtube.com/watch?v=FBPXmnfuDKU',
      thumbnail: 'https://images.kinorium.com/movie/poster/65693/180x270/65693.jpg',
      owner: '613bdb815a111b001b2a3b49',
      movieId: 65693,
      nameRU: 'Гарри Поттер и Дары Смерти: часть 2',
      nameEN: 'Harry Potter and the Deathly Hallows: Part 2'
    },
    {
     country: 'США',
     director: 'Стивен Спилберг',
     duration: 115,
     year: '1975',
     description: 'Фильм ужасов про акулу-убийцу, нападающую на отдыхающих у побережья.',
     image: 'https://i.pinimg.com/originals/e7/02/d2/e702d2e57b54feb69428ef854c714079.jpg',
     trailerLink: 'https://www.youtube.com/watch?v=j09qs3zB_Yk',
     thumbnail: 'https://images.kinorium.com/movie/poster/4755/180x270/4755.jpg',
     owner: '613bdba25a111b001b2a3b4a',
     movieId: 4755, 
     nameRU: 'Челюсти',
     nameEN: 'Jaws'
    },
    
  {
    country: 'США',
    director: 'Фрэнсис Форд Коппола', 
    duration: 183,
    year: '1972',
    description: 'Криминальная драма о возвышении Майкла Корлеоне, сына главы нью-йоркской мафии.',
    image: 'https://www.doostihaa.com/img/uploads/2022/01/The-Godfather-2-1974-Poster.jpg',
    trailerLink: 'https://www.youtube.com/watch?v=UaVTIH8mujA', 
    thumbnail: 'https://images.kinorium.com/movie/poster/691/180x270/691.jpg',
    owner: '123bdba25a111b001b2a3b4b',
    movieId: 691,
    nameRU: 'Крестный отец 2',
    nameEN: 'The Godfather: Part II'
  },

  {
    country: 'США, Великобритания', 
    director: 'Кристофер Нолан',
    duration: 169,
    year: '2014',
    description: 'Фантастический фильм о группе исследователей, путешествующих сквозь червоточину в поисках пригодной для жизни планеты.',
    image: 'https://papik.pro/uploads/posts/2021-10/1634577999_26-papik-pro-p-poster-interstellar-26.jpg',
    trailerLink: 'https://www.youtube.com/watch?v=Lm8p5rlrSkY',
    thumbnail: 'https://www.film.ru/sites/default/files/styles/thumb_small/public/movies/posters/Interstellar_2014_0.jpg',
    owner: '613bdaae5a111b001b2a3b46',
    movieId: 4246,
    nameRU: 'Интерстеллар',
    nameEN: 'Interstellar'
  },

  {
    country: 'США', 
    director: 'Майкл Бэй',
    duration: 144,
    year: '1996', 
    description: 'Фантастический боевик о спасении Земли от удара гигантского астероида.',
    image: 'http://images-s.kinorium.com/movie/poster/109198/w1500_2704134.jpg',
    trailerLink: 'https://www.youtube.com/watch?v=VS5W4RxGv4s',
    thumbnail: 'https://images.kinorium.com/movie/poster/2239/180x270/2239.jpg',
    owner: '123bdba45a111b001b2a3b4d',
    movieId: 2239,
    nameRU: 'Армагеддон',
    nameEN: 'Armageddon'
  }
  ];

function MoviesCardList({isSavedMode, onSaveFilm, savedMoviesPage}) {
    return(
        <section className="cards">
        {movies.map((movie) => {
          return (
            <MoviesCard
                onSaveFilm={onSaveFilm}
                isSavedMode={isSavedMode}
                title={movie.nameRU}
                image={movie.image}
                duration={movie.duration}
                savedMoviesPage={savedMoviesPage}
            />
          );
        })}
        </section>
    )
}

export default MoviesCardList;