// import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { getMoviesReviews } from '../../services/api';
// import ReviewPart from './ReviewPart';

// const MovieReview = () => {
//   const { id } = useParams();
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const fetchData = async id => {
//       try {
//         const { data } = await getMoviesReviews(id);
//         setReviews(data.results);
//       } catch (error) {
//         console.log(error);
//       } finally {
//       }
//     };
//     fetchData(id);
//   }, [id]);

//   return (
//     <div>
//       {reviews.length !== 0 ? (
//         <ReviewPart reviews={reviews} />
//       ) : (
//         <p>Nothing found :(</p>
//       )}
//     </div>
//   );
// };

// export default MovieReview;
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesReviews } from '../../services/api';
import ReviewPart from '../ReviewPart/ReviewPart';

const MovieReview = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async id => {
      try {
        const { data } = await getMoviesReviews(id);
        setReviews(data.results);
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
      ) : reviews.length !== 0 ? (
        <ReviewPart reviews={reviews} />
      ) : (
        <p>Nothing found &#128064;</p>
      )}
    </div>
  );
};

export default MovieReview;
