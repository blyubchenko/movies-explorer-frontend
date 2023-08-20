export const BASE_URL = "https://api.movies.blyubchenko.nomoredomains.xyz";
function inspectResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    return response.json().then((errorData) => {
      return Promise.reject(new Error(errorData.message));
    });
  }

}

export function register(name, email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name, email, password }),
  }).then((response) => inspectResponse(response));
}

export function login(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => inspectResponse(response))
}

export function logout() {
  return fetch(`${BASE_URL}/signout`, {
    method: "GET",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => inspectResponse(response))
}

export function getUserData () {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => inspectResponse(response))
    .then((data) =>  data);
};


export function editUserData(userData) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: userData.name,
      email: userData.email,
    }),
  }).then((response) => inspectResponse(response))
};

export function saveMovie(movieData) {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      country: movieData.country,
      director: movieData.director,
      duration: movieData.duration,
      year: movieData.year,
      description: movieData.description,
      image: movieData.image,
      trailerLink: movieData.trailerLink,
      thumbnail: movieData.thumbnail,
      movieId: movieData.movieId,
      nameRU: movieData.nameRU,
      nameEN: movieData.nameEN,
    }),
  }).then((response) => inspectResponse(response))
}

export function deleteMovie(MovieId) {
  return fetch(`${BASE_URL}/movies/${MovieId}`, {
    method: "DELETE",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => inspectResponse(response))
}

export function getSaveMovies() {
  return fetch(`${BASE_URL}/movies`, {
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => inspectResponse(response))
}