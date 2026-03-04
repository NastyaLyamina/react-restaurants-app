import { useState } from 'react';
import { useRestaurants } from '../hooks/useRestaurants';
import { Logo } from '../components/ui/Logo';
import { UserAvatar } from '../components/ui/UserAvatar';
import { SearchInput } from '../components/ui/SearchInput';
import { RestaurantCard } from '../components/restaurant/RestaurantCard';
import './RestaurantPage.css';

export const RestaurantPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { restaurants, isLoading, handleUpdateRating } = useRestaurants();

  const filteredRestaurants = restaurants.filter(r =>
  r.name.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <>
      <header>
        <Logo />
        <UserAvatar />
      </header>

      <main className="main-container">
        <SearchInput value={searchQuery} onChange={setSearchQuery} />

        {isLoading ? (
          <div className="loader">Загрузка...</div>
        ) : (
          <div className="restaurant-grid">
            {filteredRestaurants.map(r => (
              <RestaurantCard
                key={r.id}
                restaurant={r}
                onRateUpdate={handleUpdateRating}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
};