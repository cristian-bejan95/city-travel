import { FaStar } from "react-icons/fa";

function City({ city }) {
  return (
    <div className="city">
      <img src={city.images[0]} alt="City image" />
      <div className="flex items-center gap-2">
        <h1>
          {city.city}, {city.country}
        </h1>
        <p>
          <FaStar className="text-yellow-500" />
          {city.rating}
        </p>
      </div>
    </div>
  );
}

export default City;
