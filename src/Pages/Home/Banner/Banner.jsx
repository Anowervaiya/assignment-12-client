import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from '../../../Components/Banner/Slider';

function Banner() {
 
  return (
    <>
      {' '}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[90vh]"
      >
        <SwiperSlide>
          <Slider
            title1={' Let us find your'}
            title2={'Forever Scholarship'}
            desc={
              'Welcome to ScholarshipConnect, where we simplify the process of scholarship administration. Our platform is designed to help educational institutions, organizations, and students manage scholarships seamlessly'
            }
            img={
              'https://i.ibb.co/X79Pz75/Hoover-Tower-Stanford-University-California.webp'
            }
            button={'Get Started'}
          ></Slider>
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            title1={'Simplify Scholarship'}
            title2={' Management'}
            desc={
              'Our Scholarship Management System streamlines every step of the scholarship process, ensuring efficiency and transparency. Let us handle the details so you can focus on what matters most – supporting students.'
            }
            img={
              'https://i.ibb.co/qydVbGz/vasily-koloda-8-Cq-Dv-Puo-k-I-unsplash.jpg'
            }
            button={'Explore Features'}
          ></Slider>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Slider
            title1={'Accessibility for'}
            title2={'All Students'}
            desc={
              'We believe in making scholarships accessible to all. Our user-friendly platform ensures that every student, regardless of background, can easily apply and track their scholarship applications.'
            }
            img={'https://i.ibb.co/3RDrQyB/scholar.webp'}
            button={'Join Us'}
          ></Slider>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Slider
            title1={'Gain Insights with'}
            title2={'  Advanced Analytics'}
            desc={
              'Make informed decisions with our advanced analytics and reporting tools. Understand trends, monitor progress, and optimize your scholarship programs for better results. Let data guide your way to success.'
            }
            img={
              'https://i.ibb.co/X79Pz75/Hoover-Tower-Stanford-University-California.webp'
            }
            button={'See It in Action'}
          ></Slider>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner;
