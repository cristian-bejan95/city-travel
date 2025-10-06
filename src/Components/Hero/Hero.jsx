import City from "../City/City";
import "./hero.css";

function Hero({ cities }) {
  return (
    <div className="hero">
      {cities.map((city) => (
        <City key={city.id} city={city} />
      ))}
    </div>
  );
}

export default Hero;
