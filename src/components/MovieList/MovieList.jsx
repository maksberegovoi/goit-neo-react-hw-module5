import React from 'react';
import styles from './MovieList.module.css';
import {generatePath, NavLink, useLocation} from "react-router-dom";
import {MOVIE_BY_ID_ROUTE} from "../../utils/consts.js";


const MovieList = ({movies}) => {
  const location = useLocation()
  return (
    <ul className={styles.movies}>
      {movies.map(movie => {
        return (
          <li
            className={styles.moviesItem}
            key={movie.id}
          >
            <NavLink
              to={generatePath(MOVIE_BY_ID_ROUTE, {movieId: movie.id})}
              state={{from: location}}
            >
              {movie.title}
            </NavLink>
          </li>
        )
      })
      }
    </ul>
  );
};

export default MovieList;