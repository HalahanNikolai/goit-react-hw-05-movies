import React, { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchMovieByName } from 'services/themoviedb-api';

const Movies = () => {
  const [queryMovies, setQueryMovies] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const handleSubmit = query => {
    setQueryMovies(query);
  };


  const fetchMoviesData = async () => {
    try {
      setLoading(true);
  
      const movies = await fetchMovieByName(queryMovies);
      setSearchMovies(movies);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMoviesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryMovies, searchParams]);

 
  useEffect(() => {
    const initialQuery = searchParams.get('query');
    if (initialQuery) {
      setQueryMovies(initialQuery);
      fetchMoviesData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      {loading ? (
        <Loader />
      ) : (
        <>
          {searchParams.get('query') && (
            <h2>Discovered Movies by Keyword {searchParams.get('query')} </h2>
          )}
          <MoviesList films={searchMovies} />
        </>
      )}
    </div>
  );
};

export default Movies;
