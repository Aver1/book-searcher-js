const KEY_ID = '?key=AIzaSyC9migw2bItRwFDEc2ulBFSe4P5fL6vko8';
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes'+KEY_ID+"&q=flowers";

class BooksApi {
  constructor({ baseUrl, headers }) {
    // this._headers = headers;
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
      if (res.ok) {
          return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
  };

  getBooks(url) {
    return fetch(`${this._baseUrl}`+url, {
      headers: this._headers
    })
    .then(this._checkResponse)
  }
}

export const booksApi = new BooksApi ({
  baseUrl: BASE_URL
})
