import {lazy} from 'react';
import {
  HOME_ROUTE, MOVIE_BY_ID_ROUTE, MOVIE_CAST_ROUTE,
  MOVIE_REVIEWS_ROUTE,
  MOVIES_ROUTE
} from "../utils/consts.js";


const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const MovieReviews = lazy(
  () => import("../components/MovieReviews/MovieReviews.jsx"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage.jsx"));
const MovieDetailsPage = lazy(
  () => import("../pages/MovieDetailsPage/MovieDetailsPage.jsx"));
const MovieCast = lazy(() => import("../components/MovieCast/MovieCast.jsx"));
const NotFoundPage = lazy(
  () => import("../pages/NotFoundPage/NotFoundPage.jsx"));

export const publicRoutes = [
  {path: HOME_ROUTE, Component: HomePage},
  {path: MOVIES_ROUTE, Component: MoviesPage},
  {
    path: MOVIE_BY_ID_ROUTE,
    Component: MovieDetailsPage,
    children: [
      {
        path: MOVIE_CAST_ROUTE,
        Component: MovieCast
      },
      {
        path: MOVIE_REVIEWS_ROUTE,
        Component: MovieReviews
      }
    ]
  },
  {path: '*', Component: NotFoundPage}
];