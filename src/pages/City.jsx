import Header from "../Components/Header/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

function City() {
  const { slug } = useParams();

  const [city, setCity] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://67521f50d1983b9597b56b99.mockapi.io/api/city-traveler/cities"
      )
      .then((res) => {
        setCity(res.data.find((item) => item.slug === slug));
      });
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto p-4">
          {city ? (
            <div>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {city.images.map((image) => (
                  <SwiperSlide>
                    <img src={image} alt={`${city.city} image`} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <h1>
                {city.city} {city.country}
              </h1>
              <p>
                <FaStar className="text-yellow-500" />
                {city.rating}
              </p>
              <p>Description</p>
              <p>{city.description}</p>
              {city.placesToVisit.map((place, idx) => (
                <div key={idx}>
                  <img src={place.pictures} height="200px" alt={place.name} />
                  <h2>{place.name}</h2>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="loader"></div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default City;
