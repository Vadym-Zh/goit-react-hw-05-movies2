import { Link, useLocation } from 'react-router-dom';

const MovieQuery = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      {movies.length ? (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nothing found &#128064;</p>
      )}
    </div>
  );
};

export default MovieQuery;
