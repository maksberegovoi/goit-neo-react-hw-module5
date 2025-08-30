import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_TOKEN} from "../../utils/consts.js";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorLoading from "../../components/ErrorLoading.jsx";
import MovieList from "../../components/MovieList/MovieList.jsx";


const HomePage = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  const url = 'https://api.themoviedb.org/3/trending/movie/day';

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(false)
      setMovies([])
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`
        }
      })
      setMovies(response.data?.results || [])
    } catch (err) {
      console.log(err);
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {loading && <Loader/>}
      {error
        ?
        <ErrorLoading/>
        :
        <MovieList
          movies={movies}
        />
      }
    </div>
  );
};

export default HomePage;