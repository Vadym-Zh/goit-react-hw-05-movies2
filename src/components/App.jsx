import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const DetailedMoviePage = lazy(() =>
  import('../pages/MovieDetails/MoviesDetails')
);
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReview = lazy(() => import('./MovieReview/MovieReview'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<DetailedMoviePage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReview />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
