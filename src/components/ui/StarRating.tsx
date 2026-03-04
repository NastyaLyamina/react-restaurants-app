import StarIcon from '../../assets/star.svg?react';
import './StarRating.css';

interface StarRatingProps {
  rating: number;
  onRate: (val: number) => void;
}

export const StarRating = ({ rating, onRate }: StarRatingProps) => {
  return (
    <div className="stars-row">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon
          key={star}
          width={20}
          height={20}
          fill={star <= rating ? "red" : "transparent"}
          className="star-item"
          onClick={() => onRate(star)}
          style={{ cursor: 'pointer' }}
        />
      ))}
    </div>
  );
};