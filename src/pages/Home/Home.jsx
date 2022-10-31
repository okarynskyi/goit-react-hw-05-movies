import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'API';
import { MoviesList } from 'components/MoviesList/MoviesList';
import css from './Home.module.css'


export const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(movies => {
            setMovies(movies);
        });
    }, []);

    return (
        <div>
            <title  className={css.title}>Trending today</title>
            <MoviesList movies={movies} />
        </div>
    );
};