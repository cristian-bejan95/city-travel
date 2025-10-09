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
            <div className="flex flex-col gap-4 items-start">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="city-swiper"
              >
                {city.images.map((image) => (
                  <SwiperSlide>
                    <img src={image} alt={`${city.city} image`} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <h1 className="text-2xl font-bold">
                {city.city}, {city.country}
              </h1>
              <p className="flex gap-2 items-center p-2 bg-gray-100 rounded-lg font-medium text-lg">
                <FaStar className="text-yellow-500" />
                {city.rating}
              </p>
              <p className="font-medium">{city.description}</p>
              <div className="flex gap-4">
                {city.placesToVisit.map((place, idx) => (
                  <div className="w-[250px] flex flex-col gap-1" key={idx}>
                    <img
                      className="h-[200px] w-full rounded-lg"
                      src={place.pictures}
                      alt={place.name}
                    />
                    <h2 className="font-medium text-lg">{place.name}</h2>
                  </div>
                ))}
              </div>
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
