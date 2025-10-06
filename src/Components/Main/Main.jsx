import { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../Hero/Hero";

function Main() {
  const [cities, setCities] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://67521f50d1983b9597b56b99.mockapi.io/api/city-traveler/cities"
      )
      .then((res) => setCities(res.data));
  }, []);

  return <main>{cities && <Hero cities={cities.slice(0, 3)} />}</main>;
}

export default Main;
