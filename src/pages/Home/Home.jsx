import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'API';
import { MoviesList } from 'components/MoviesList/MoviesList';


export const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(movies => {
            setMovies(movies);
        });
    }, []);

    return (
        <div>
            <title>This week's most popular movies</title>
            <MoviesList movies={movies} />
        </div>
    );
};