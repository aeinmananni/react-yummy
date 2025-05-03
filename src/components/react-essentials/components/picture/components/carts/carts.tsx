import { Cart } from '../cart';

import { sortPlacesByDistance } from '../../utils/location';
import { useMemo } from 'react';
import { PLACES } from '../../../../../../data';
import { useReactContext } from '../../../../../../context/context';
export default function Carts() {
  const currentLat = 35.6892;
  const currentLon = 51.389;
  const SORT_PLACES = useMemo(() => {
    return sortPlacesByDistance(PLACES, currentLat, currentLon);
  }, [currentLat, currentLon]);

  const { setSelectedPicture } = useReactContext();

  return (
    <div className="grid grid-cols-3 h-full w-full">
      {SORT_PLACES.map((place, index) => (
        <Cart
          key={index}
          image={place.image}
          onClick={() => setSelectedPicture((prev) => [...prev, { ...place }])}
        />
      ))}
    </div>
  );
}
