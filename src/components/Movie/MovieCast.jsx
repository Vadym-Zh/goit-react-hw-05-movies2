import { getMoviesCast } from '../../services/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CastPart from './CastPart';

const MovieCast = () => {
  const { id } = useParams();
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async id => {
      try {
        const { data } = await getMoviesCast(id);
        setCasts(data.cast);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData(id);
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : casts.length !== 0 ? (
        <CastPart casts={casts} />
      ) : (
        <p>Nothing found &#128064;</p>
      )}
    </div>
  );
};

export default MovieCast;
