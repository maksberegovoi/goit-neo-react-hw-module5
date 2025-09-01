import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_TOKEN, IMG_URL} from "../../utils/consts.js";
import Loader from "../Loader/Loader.jsx";
import ErrorLoading from "../ErrorLoading.jsx";
import styles from './MovieReviews.module.css';


const MovieReviews = () => {
  const {movieId} = useParams()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  const [reviews, setReviews] = useState([])

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(false)
      setReviews([])
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`
          }
        })
      setReviews(response.data?.results || [])
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
        <ul className={styles.reviews}>
          {
            reviews.length > 1
              ?
              reviews.map(review => {
                return (
                  <li className={styles.review}>
                    <p className={styles.reviewAuthor}>@{review.author}</p>
                    <p>{review.content}</p>
                  </li>
                )
              })
              :
              <div className={styles.noReviews}>
                <p>There are no reviews for this movie yet.</p>
              </div>
          }
        </ul>
      }
    </div>
  );
};

export default MovieReviews;