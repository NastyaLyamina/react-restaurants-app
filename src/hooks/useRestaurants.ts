import { useState, useEffect } from 'react';
import { Restaurant, getRestaurants, updateRestaurantRating } from '../api';

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRestaurants()
      .then((data) => {
        if (Array.isArray(data)) {
          setRestaurants(data);
        }
      })
      .catch((err) => {
        console.error("Ошибка при получении данных:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleUpdateRating = async (id: string, newRating: number) => {
    try {
      const updated = await updateRestaurantRating({ id, raiting: newRating });
      setRestaurants(prev => prev.map(r => r.id === id ? updated : r));
    } catch (e) {
      console.error("Ошибка обновления рейтинга:", e);
    }
  };

  return { restaurants, isLoading, handleUpdateRating };
};