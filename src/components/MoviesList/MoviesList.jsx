import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <h2>{movie.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};