import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'API';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { MoviesList } from '../../components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const request = searchParams.get('query') ?? '';

  useEffect(() => {
    if (request === '') {
      return;
    }

    getSearchMovies(request)
      .then(movies => {
        if (movies.length === 0) {
          return alert(
            'Sorry, no movies. Try another require.'
          );
        }
        setMovies(movies);
      })
      .catch(error => setError(error.message));
  }, [request]);

  const handleFormSubmit = value => {
    if (request === value) {
      return;
    }
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} value={request} />
      {error && alert(error)}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default Movies;