import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from '../../API';


export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieCast(movieId)
      .then(data => setCast(data.cast))
      .catch(error => setError(error.message));
  }, [movieId]);

  const isCast = cast.length === 0 || error;

    return (
        <div>
            {isCast && <p>We don't have any actors information for this movie</p>}
            <ul>
                {cast.map(actor => (
                    <li key={actor.id}>
                        {actor.profile_path ? 
                            <img
                                src={`https://www.themoviedb.org/t/p/w500${actor.profile_path}`}
                                alt={actor.name}
                                width="100"
                            />
                        : <p>No photo</p>
                        }
                        <h4>{actor.name}</h4>
                        <p>Character: {actor.character}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};