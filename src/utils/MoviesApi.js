class Api {
    constructor(url) {
      this.url = url;
    }
  
    _processingServerResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    getMovies() {
      return fetch(this.url).then(this._processingServerResponse);
    }
  }
  
  const apiMovies = new Api("https://api.nomoreparties.co/beatfilm-movies");
  
  export default apiMovies;