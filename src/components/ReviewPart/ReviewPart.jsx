import propTypes from 'prop-types';
import { ReviewList, ReviewItem } from './ReviewPart.styled';

const ReviewPart = ({ reviews }) => {
  return (
    <ReviewList>
      {reviews.map(review => (
        <ReviewItem key={review.id}>
          <p>{`Author: ${review.author}`}</p>
          <p>{review.content}</p>
        </ReviewItem>
      ))}
    </ReviewList>
  );
};

ReviewPart.propTypes = {
  reviews: propTypes.arrayOf(propTypes.object).isRequired,
};

export default ReviewPart;
