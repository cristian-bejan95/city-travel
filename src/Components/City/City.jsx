import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function City({ city }) {
  return (
    <Link to={`/city/${city.slug}`} className="city">
      <img src={city.images[0]} alt="City image" />
      <div className="flex flex-col gap-2">
        <h1>
          {city.city}, {city.country}
        </h1>
        <p className="bg-gray-100 px-4 py-2 rounded-md font-medium">
          {city.category}
        </p>
        <p>
          <FaStar className="text-emerald-500" />
          {city.rating}
        </p>
      </div>
    </Link>
  );
}

export default City;
