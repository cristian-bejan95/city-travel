import "./catalog.css";
import CitySm from "../CitySm/CitySm";
import { useState, useEffect } from "react";

function Catalog({ cities }) {
  const [catalogCities, setCatalogCities] = useState(cities);
  const [filters, setFilters] = useState({
    category: "",
    ratings: [],
    minPricePerNight: 0,
    maxPricePerNight: 0,
  });

  const manageRating = (ev) => {
    const ratingValue = +ev.target.value;
    let updatedRatings;

    if (filters.ratings.includes(ratingValue)) {
      updatedRatings = filters.ratings.filter(
        (rating) => rating !== ratingValue
      );
    } else {
      updatedRatings = [...filters.ratings, +ratingValue];
    }

    setFilters({ ...filters, ratings: updatedRatings });
  };

  useEffect(() => {
    let tempCities = cities;

    tempCities = tempCities.filter((city) => city.avgHotelPricePerNight >= 60);

    if (filters.category !== "")
      tempCities = tempCities.filter(
        (city) => city.category.toLowerCase() === filters.category.toLowerCase()
      );

    if (filters.ratings.length > 0) {
      tempCities = tempCities.filter((city) =>
        filters.ratings.includes(city.rating)
      );
    }

    if (filters.minPricePerNight > 0) {
      tempCities = tempCities.filter(
        (city) => city.avgHotelPricePerNight >= +filters.minPricePerNight
      );
    }

    if (filters.maxPricePerNight > 0) {
      tempCities = tempCities.filter(
        (city) => city.avgHotelPricePerNight <= +filters.maxPricePerNight
      );
    }
    setCatalogCities(tempCities);
  }, [filters]);

  return (
    <div className="container mx-auto mb-[80px] mt-[80px]">
      <h1 className="text-4xl font-medium mb-5">Catalog</h1>
      <div className="mb-2 bg-gray-100 rounded-md p-2 flex flex-col gap-5">
        <select
          className="p-2 rounded-xl bg-white"
          onChange={(ev) => {
            setFilters({ ...filters, category: ev.target.value });
          }}
        >
          <option value="cities">Cities</option>
          <option value="sea">Sea</option>
          <option value="historical city">Historical City</option>
        </select>
        <div className="grid grid-cols-5 gap-2">
          <label className="bg-white p-2 rounded-xl" htmlFor="rating-1">
            Rating 1
            <input
              onChange={manageRating}
              type="checkbox"
              name="rating[]"
              id="rating-1"
              value="1"
            />
          </label>
          <label className="bg-white p-2 rounded-xl" htmlFor="rating-2">
            Rating 2
            <input
              onChange={manageRating}
              type="checkbox"
              name="rating[]"
              id="rating-2"
              value="2"
            />
          </label>
          <label className="bg-white p-2 rounded-xl" htmlFor="rating-3">
            Rating 3
            <input
              onChange={manageRating}
              type="checkbox"
              name="rating[]"
              id="rating-3"
              value="3"
            />
          </label>
          <label className="bg-white p-2 rounded-xl" htmlFor="rating-4">
            Rating 4
            <input
              onChange={manageRating}
              type="checkbox"
              name="rating[]"
              id="rating-4"
              value="4"
            />
          </label>
          <label className="bg-white p-2 rounded-xl" htmlFor="rating-5">
            Rating 5
            <input
              onChange={manageRating}
              type="checkbox"
              name="rating[]"
              id="rating-5"
              value="5"
            />
          </label>
        </div>

        <div>
          <div className="flex flex-col gap-2">
            Min price per night
            <input
              className="bg-white p-2 rounded-xl"
              onChange={(ev) =>
                setFilters({ ...filters, minPricePerNight: ev.target.value })
              }
              value={filters.minPricePerNight}
              type="number"
              placeholder="Min. price per nigh"
            />
          </div>
          <div className="flex flex-col gap-2">
            Max price per night
            <input
              className="bg-white p-2 rounded-xl"
              onChange={(ev) =>
                setFilters({ ...filters, maxPricePerNight: ev.target.value })
              }
              value={filters.maxPricePerNight}
              type="number"
              placeholder="Max. price per nigh"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {catalogCities.map((city) => (
          <CitySm city={city} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
