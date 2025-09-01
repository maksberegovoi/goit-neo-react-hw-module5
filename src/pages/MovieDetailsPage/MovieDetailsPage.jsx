import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import axios from "axios";
import {
  API_TOKEN,
  IMG_URL,
  MOVIE_CAST_ROUTE,
  MOVIE_REVIEWS_ROUTE
} from "../../utils/consts.js";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorLoading from "../../components/ErrorLoading.jsx";
import styles from './MovieDetailsPage.module.css'


const MovieDetailsPage = () => {
  const {movieId} = useParams()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [movie, setMovie] = useState({})

  const options = {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`
    }
  };
  const fetchData = () => {
    setMovie({})
    setLoading(true)
    setError(false)

    const response = axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      options
    ).then(response => {
      setMovie(response.data)
      console.log(response.data)
    })
      .catch(error => {
        console.log(error)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  useEffect(() => {
    fetchData()
  }, [movieId]);

  return (
    <div>
      <button
        className={styles.button}
        onClick={() => window.history.back()}
      >← Go back
      </button>
      {loading && <Loader/>}
      {error
        ?
        <ErrorLoading/>
        :
        <div className={styles.container}>
          <img
            className={styles.poster}
            src={IMG_URL + movie.poster_path}
            alt={movie.title}
          />
          <div className={styles.infoContainer}>
            <h1 className={styles.title}>{movie.title}</h1>

            <p className={styles.score}>
              <strong>User Score:</strong> {Math.round(movie.vote_average * 10)}%
            </p>

            <div className={styles.overviewSection}>
              <h3>Overview:</h3>
              <p className={styles.overview}>
                {movie.overview || 'No overview available.'}
              </p>
            </div>

            <div className={styles.genresContainer}>
              <span className={styles.genresLabel}>Genres:</span>
              {movie.genres?.map(genre => (
                <span
                  key={genre.id}
                  className={styles.genreTag}
                >
                {genre.name}
              </span>
              )) || <span>No genres available</span>}
            </div>
            <div>
              <h4>Additional info:</h4>
              <div className={styles.additionalInfoContainer}>
                <NavLink to={MOVIE_CAST_ROUTE}>Cast</NavLink>
                <NavLink to={MOVIE_REVIEWS_ROUTE}>Reviews</NavLink>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default MovieDetailsPage;