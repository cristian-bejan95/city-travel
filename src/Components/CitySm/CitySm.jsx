import "./citysm.css";
import { Link } from "react-router-dom";

function CitySm({ city }) {
  return (
    <Link to={`/city/${city.slug}`} className="flex flex-col gap-2">
      <img
        className="w-full h-[300px] rounded-xl"
        src={city.images[0]}
        alt={`${city.city} ${city.country}`}
      />
      <h2 className="font-medium">
        {city.city}, {city.country}
      </h2>
    </Link>
  );
}

export default CitySm;
