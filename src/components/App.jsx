// import { lazy } from "react";
import { lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Home } from '../pages/Home/Home';

const Movies = lazy(() => import('../pages/Movies/Movies'));

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={< Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<div>MovieDetails</div>}>
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="reviews" element={<div>Reviews</div>} />
        </Route>
        <Route path="*" element={<div>NotFound</div>} />
      </Route>
    </Routes>
  );
};
