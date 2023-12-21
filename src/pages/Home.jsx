import React, { useState, useEffect } from 'react';
import { RingLoader } from 'react-spinners';
import { fetchTrendingMovies } from 'services/themoviedb-api';
import Hero from 'components/Hero/Hero';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMoviesData();
  }, []);

  return (
    <main>
      <Hero />
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <RingLoader color="#004d40" size={120} />
        </div>
      ) : (
        <>
          <h2 style={{
            textAlign: 'center'
          }}>Watch Movies</h2>
          <MoviesList films={trendingMovies} />
        </>
      )}
    </main>
  );
};

export default Home;
