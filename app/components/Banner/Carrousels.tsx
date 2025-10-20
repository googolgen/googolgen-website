'use client';
import Image from 'next/image';

// Import Swiper Core and required modules
import {Pagination, Navigation, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carrousels = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination = {{ clickable: true }}
    >
      {/* <SwiperSlide>
        <Image src="/assets/banner/banner1.jpeg" alt="nothing" className='rounded-lg object-cover' fill />
      </SwiperSlide>
        <Image src="/assets/banner/banner4.webp" alt="Image by freepik" className='rounded-lg object-cover' fill />
      </SwiperSlide> */}
      <SwiperSlide>
        <Image src='/assets/banner/banner.jpeg' alt="Kids are building toy robots" className='w-auto rounded-lg' fill />
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/assets/heroslider/img1.jpeg' alt="Kids are building toy robots" className='w-auto rounded-lg object-cover' fill />
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/assets/heroslider/img2.jpeg' alt="Kids are building toy robots" className='w-auto rounded-lg object-cover' fill />
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/assets/heroslider/img3.jpeg' alt="Kids are building toy robots" className='w-auto rounded-lg object-cover' fill />
      </SwiperSlide>
      ...
    </Swiper>
  )
}

export default Carrousels