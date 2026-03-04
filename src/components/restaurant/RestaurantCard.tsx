import { StarRating } from '../ui/StarRating';
import { Restaurant } from '../../api';
import './RestaurantCard.css';

interface Props {
  restaurant: Restaurant;
  onRateUpdate: (id: string, newRating: number) => void;
}

export const RestaurantCard = ({ restaurant, onRateUpdate }: Props) => {
  return (
    <div className="restaurant-card">
      <img src={restaurant.url} className="restaurant-image" alt={restaurant.name} />
      <div className="card-content">
        <h3>{restaurant.name}</h3>
        <p className="restaurant-description">{restaurant.description}</p>

        <div className="card-footer">
          <StarRating
            rating={restaurant.raiting}
            onRate={(newVal) => onRateUpdate(restaurant.id, newVal)}
          />
        </div>
      </div>
    </div>
  );
};