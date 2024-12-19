"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface ImageAsset {
  asset: {
    _id: string;
    url: string;
  };
}

interface ImageCarouselProps {
  images: ImageAsset[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop={true}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div>
            <img
              src={image.asset.url}
              alt={`Image ${index + 1}`}
              className="object-cover aspect-video rounded-xl"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
