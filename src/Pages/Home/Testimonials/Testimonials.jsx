
import TestimonialsCard from './TestimonialsCard';
import HeadingandDesc from '../../../Components/HeadingandDes/HeadingandDesc';
// 
// 
// 
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

function Testimonials() {
  return (
    <div className="bg-blue-50 py-6">
      <HeadingandDesc Heading={'What Our Student Are Saying '} />

      <div className="flex flex-col lg:flex-row">
        <div>
          <img
            src="https://i.ibb.co/tK03g7y/customer-review-1024x683-removebg-preview.png"
            className="w-full lg:w-[800px]"
            alt=""
          />
        </div>
        <div className=" w-full lg:w-1/2 mt-20">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper  "
          >
            <SwiperSlide>
              <div className="flex flex-col px-8 lg:px-0  lg:flex-row gap-8">
                <TestimonialsCard
                  name={'Anower Hossen'}
                  desc={
                    'I can not explain you how it helps me in my career! it actually change my destination , dream . i will recomment everybody to use Scholarhsip Connect site'
                  }
                  img={
                    'https://i.ibb.co/9g2stv0/Screenshot-2024-05-19-130354.jpg'
                  }
                  country={'Dhaka,Bangladesh'}
                />
                <TestimonialsCard
                  name={'Faruk Aslam'}
                  desc={
                    'This platform has everything we need to manage scholarships comprehensively. From application collection to final selection, the system is reliable and has significantly reduced our administrative burden'
                  }
                  img={
                    'https://i.ibb.co/yNJ2LNJ/369522843-661524219263581-7792321371323079737-n.jpg'
                  }
                  country={'Mumbi,India'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col px-8 lg:px-0  lg:flex-row gap-8">
                <TestimonialsCard
                  name={'Faruk Aslam'}
                  desc={
                    "As a student, I found the website intuitive and straightforward. Applying for scholarships was easy, and the status updates kept me informed throughout the process. It's a great tool for both students and administrators"
                  }
                  img={'https://i.ibb.co/cTBj3SD/person1.jpg'}
                  country={'London,UK'}
                />
                <TestimonialsCard
                  name={' Bijoy '}
                  desc={
                    'The customer support for this scholarship management system is outstanding. Whenever we have questions or encounter issues, their team is quick to respond and resolve our concerns. Excellent service!'
                  }
                  img={'https://i.ibb.co/wNrJJQh/persone2.jpg'}
                  country={'Dhaka,Bangladesh'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col px-8 lg:px-0  lg:flex-row gap-8">
                <TestimonialsCard
                  name={'Ashraful Islam'}
                  desc={
                    'Our organization has saved so much time since switching to this scholarship management system. The automated workflows and centralized data have made our operations much more efficient. Highly satisfied!'
                  }
                  img={'https://i.ibb.co/kcYdjYM/person3.jpg'}
                  
                />
                <TestimonialsCard
                  name={'Abdullah'}
                  desc={
                    'The system is highly customizable, allowing us to tailor the application forms and review process to fit our specific needs. The flexibility it offers is unmatched compared to other solutions we’ve tried.'
                  }
                  img={'https://i.ibb.co/RNQqKCG/person4.jpg'}
                  country={'Bally,Indonisia'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col px-8 lg:px-0  lg:flex-row gap-8">
                <TestimonialsCard
                  name={'Anower Hossen'}
                  desc={
                    'I can not explain you how it helps me in my career! it actually change my destination , dream . i will recomment everybody to use Scholarhsip Connect site'
                  }
                  img={
                    'https://i.ibb.co/9g2stv0/Screenshot-2024-05-19-130354.jpg'
                  }
                  country={'Dhaka,Bangladesh'}
                />
                <TestimonialsCard
                  name={'Faruk Aslam'}
                  desc={
                    'This platform has everything we need to manage scholarships comprehensively. From application collection to final selection, the system is reliable and has significantly reduced our administrative burden'
                  }
                  img={
                    'https://i.ibb.co/yNJ2LNJ/369522843-661524219263581-7792321371323079737-n.jpg'
                  }
                  country={'Mumbi,India'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col px-8 lg:px-0  lg:flex-row gap-8">
                <TestimonialsCard
                  name={'Faruk Aslam'}
                  desc={
                    "As a student, I found the website intuitive and straightforward. Applying for scholarships was easy, and the status updates kept me informed throughout the process. It's a great tool for both students and administrators"
                  }
                  img={'https://i.ibb.co/cTBj3SD/person1.jpg'}
                  country={'London,UK'}
                />
                <TestimonialsCard
                  name={' Bijoy '}
                  desc={
                    'The customer support for this scholarship management system is outstanding. Whenever we have questions or encounter issues, their team is quick to respond and resolve our concerns. Excellent service!'
                  }
                  img={'https://i.ibb.co/wNrJJQh/persone2.jpg'}
                  country={'Dhaka,Bangladesh'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col px-8 lg:px-0  lg:flex-row gap-8">
                <TestimonialsCard
                  name={'Ashraful Islam'}
                  desc={
                    'Our organization has saved so much time since switching to this scholarship management system. The automated workflows and centralized data have made our operations much more efficient. Highly satisfied!'
                  }
                  img={'https://i.ibb.co/kcYdjYM/person3.jpg'}
                  
                />
                <TestimonialsCard
                  name={'Abdullah'}
                  desc={
                    'The system is highly customizable, allowing us to tailor the application forms and review process to fit our specific needs. The flexibility it offers is unmatched compared to other solutions we’ve tried.'
                  }
                  img={'https://i.ibb.co/RNQqKCG/person4.jpg'}
                  country={'Bally,Indonisia'}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
