import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_TOKEN, IMG_URL} from "../../utils/consts.js";
import styles from './MovieCast.module.css'
import Loader from "../Loader/Loader.jsx";
import ErrorLoading from "../ErrorLoading.jsx";


const MovieCast = () => {
  const {movieId} = useParams()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  const [movieCast, setMovieCast] = useState([])

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(false)
      setMovieCast([])
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`
          }
        })
      setMovieCast(response.data?.cast || [])
      console.log(response.data)
    } catch (err) {
      console.log(err);
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!movieId) return

    fetchData()
  }, [movieId]);

  return (
    <div>
      {loading && <Loader/>}
      {error
        ?
        <ErrorLoading/>
        :
        <ul className={styles.container}>
          {movieCast.map(actor => {
            return (
              <li
                key={actor.id}
                className={styles.card}
              >
                <img
                  src={IMG_URL + actor.profile_path}
                  alt="Actor photo"
                  className={styles.avatar}
                />
                <div className={styles.cardInfo}>
                  <p className={styles.cardText}>
                    <strong>
                      {actor.name || 'actor name is unavailiable'}
                    </strong>
                  </p>
                  <p className={styles.cardText}>
                    {actor.character || 'actor role is unavailiable'}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      }
    </div>
  );
};

export default MovieCast;