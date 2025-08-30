import {
  HOME_ROUTE, MOVIE_BY_ID_ROUTE, MOVIE_CAST_ROUTE,
  MOVIE_REVIEWS_ROUTE,
  MOVIES_ROUTE
} from "../utils/consts.js";
import HomePage from "../pages/HomePage/HomePage.jsx";
import MovieReviews from "../components/MovieReviews/MovieReviews.jsx";
import MoviesPage from "../pages/MoviesPage/MoviesPage.jsx";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage.jsx";
import MovieCast from "../components/MovieCast/MovieCast.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";


export const publicRoutes = [
  {path: HOME_ROUTE, Component: <HomePage/>},
  {path: MOVIES_ROUTE, Component: <MoviesPage/>},
  {path: MOVIE_BY_ID_ROUTE, Component: <MovieDetailsPage/>},
  {path: MOVIE_CAST_ROUTE, Component: <MovieCast/>},
  {path: MOVIE_REVIEWS_ROUTE, Component: <MovieReviews/>},

  {
    path: '*', Component: <NotFoundPage/>
  }
]