import React from 'react';
import styles from './MovieList.module.css';
import {generatePath, NavLink} from "react-router-dom";
import {MOVIE_BY_ID_ROUTE} from "../../utils/consts.js";


const MovieList = ({movies}) => {
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