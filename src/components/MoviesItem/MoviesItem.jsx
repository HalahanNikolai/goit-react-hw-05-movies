import { useLocation } from 'react-router-dom';
import {
  MovieItem,
  MovieLink,
  MovieInfo,
  AdultInfo,
} from './MoviesItem.styled';

const MoviesItem = ({
  movie: {
    id,
    title,
    poster_path,
    adult,
    popularity,
    vote_average,
    vote_count,
  },
}) => {
  const location = useLocation();

  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w200/${poster_path}`
    : 'https://via.placeholder.com/200x300';
  return (
    <MovieItem>
      <MovieLink to={`/movies/${id}`} state={{ from: location }}>
        <img src={imageUrl} alt={title} loading="lazy" />
        <p>{title.length > 20 ? `${title.substring(0, 20)}...` : title}</p>
      </MovieLink>
      <MovieInfo>
        <ul>
          <li> &#128079; {popularity.toFixed(0)}</li>
          <li> &#128170; {vote_average.toFixed(1)}</li>
          <li> &#128064; {vote_count}</li>
        </ul>
      </MovieInfo>
      {adult && <AdultInfo>18+</AdultInfo>}
    </MovieItem>
  );
};

export default MoviesItem;
