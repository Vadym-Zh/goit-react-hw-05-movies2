import { Link, useLocation } from 'react-router-dom';
import propTypes from 'prop-types';

const MovieQuery = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

MovieQuery.propTypes = {
  movies: propTypes.arrayOf(propTypes.object).isRequired,
};

export default MovieQuery;
