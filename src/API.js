const API_KEY = '89ad5bc8717613587973e9385a58da18';
const BASE_URL = 'https://api.themoviedb.org/3';

//список найпопулярніших фільмів
export const getTrendingMovies = () => {
  return fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
    .then(respons => respons.json())
    .then(data => data.results);
};

//пошук фільму за ключовим словом на сторінці фільмів
export const getSearchMovies = request => {
  return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${request}`)
    .then(respons => respons.json())
    .then(data => data.results);
};

//запит повної інформації про фільм для сторінки кінофільму
export const getMovieById = id => {
    return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
        .then(respons => respons.json());
};
//запит інформації про акторський склад для сторінки кінофільму
export const getMovieCast = id => {
    return fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
        .then(respons => respons.json());
};

//запит оглядів для сторінки кінофільму
export const getMovieReviews = id => {
  return fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`)
    .then(respons => respons.json())
    .then(data => data.results);
};