import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieById } from '../../API';
import css from "./MovieDetails.module.css";
import { BsArrowLeft } from "react-icons/bs";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieById, setMovieById] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const goBack = location.state?.from ?? '/movies';

  useEffect(() => {
    getMovieById(movieId)
      .then(data => setMovieById(data))
      .catch(error => setError(error.message));
  }, [movieId]);

  if (!movieById) return null;

    return (
        <div className={css.movieById}>
            {error && alert(error)}
            <Link to={goBack} className={css.back}><BsArrowLeft/>Go back</Link>
            <div className={css.section}>
                <img
                    src={`https://www.themoviedb.org/t/p/w500${movieById.poster_path}`}
                    alt={movieById.title}
                    width="256"
                />
                <div className={css.info}>
                    <p className={css.info_title}>{movieById.title}</p>
                    <p className={css.info_text}>User Score: {(movieById.vote_average * 10).toFixed(0)} %</p>
                    <p className={css.info_overview}>Overview</p>
                    <p className={css.info_text}>{movieById.overview}</p>
                    <p className={css.info_genres}>Genres</p>
                    <p className={css.info_text}>{movieById.genres.map(genre => genre.name).join(' ')}</p>
                </div>
            </div>
            <div className={css.addInfo}>
                <p>Additional information</p>
                <div className={css.addInfo_link}>
                    <li>
                        <Link to="cast" state={{ from: goBack }}>
                            Cast
                        </Link>
                    </li>
                    <li>
                        <Link to="reviews" state={{ from: goBack }}>
                            Reviews
                        </Link>
                    </li>
                </div>
            </div>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default MovieDetails;