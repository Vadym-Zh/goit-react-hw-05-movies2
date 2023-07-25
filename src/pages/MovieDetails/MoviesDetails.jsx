import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieById } from '../../services/api';
import MovieCard from 'components/MovieCard/MovieCard';
import {
  DetailsContainer,
  BackButton,
  LinkContainer,
  LinkItemCast,
  LinkItemReview,
} from './MovieDetails.styled';

const DetailedMoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  // const navigate = useNavigate();

  // const handleGoBack = () => {
  //   navigate(-1);
  // };

  const handleGoBack = location?.state?.from ?? '/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getMovieById(id);
        setMovie(data);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fetchData();
  }, [id]);

  return (
    <DetailsContainer>
      {<BackButton to={handleGoBack}>Go back</BackButton>}
      {movie && <MovieCard movie={movie} />}
      <LinkContainer>
        <LinkItemCast
          to={`/movies/${id}/cast`}
          state={location.state}
          // state={{ from: location }}
        >
          Cast
        </LinkItemCast>
        <LinkItemReview
          to={`/movies/${id}/reviews`}
          state={location.state}
          // state={{ from: location }}
        >
          Reviews
        </LinkItemReview>
      </LinkContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </DetailsContainer>
  );
};

export default DetailedMoviePage;
