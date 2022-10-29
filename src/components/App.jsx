import { getTrendingMovies, getMovieById } from '../API';


export const App = () => {

  console.log(getTrendingMovies())

  console.log(getMovieById(541134))


  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
