import React, {useEffect, useState} from 'react';
import {API_TOKEN} from "../../utils/consts.js";
import axios from "axios";
import styles from './MoviesPage.module.css'
import MovieList from "../../components/MovieList/MovieList.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorLoading from "../../components/ErrorLoading.jsx";
import {useSearchParams} from "react-router-dom";
import {Toaster, toast} from "react-hot-toast";


const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('query') || '';

  const [search, setSearch] = useState(initialQuery);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const url = 'https://api.themoviedb.org/3/search/movie';

  const fetchData = async (query) => {
    if (!query || query.trim() === '') {
      setMovies([]);
      return;
    }
    try {
      setError(false);
      setLoading(true);
      setMovies([]);
      const response = await axios.get(url, {
        headers: {Authorization: `Bearer ${API_TOKEN}`},
        params: {
          query: query,
          include_adult: false,
          language: 'en-US',
          page: 1,
        },
      });
      setMovies(response.data?.results || []);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const q = searchParams.get('query') || '';
    setSearch(q);
    fetchData(q);
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = search.trim();
    if (next) {
      setSearchParams({query: next});
    } else {
      toast.error('Please enter the movie name')
      setSearchParams({});
      setMovies([]);
    }
  };

  return (
    <div>
      <div><Toaster position="top-right"/></div>
      <form
        className={styles.searchForm}
        onSubmit={handleSubmit}
      >
        <input
          className={styles.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Type movie name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button
          className={styles.searchButton}
          type="submit"
        >Search
        </button>
      </form>
      <div>
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
    </div>
  );
};

export default MoviesPage;