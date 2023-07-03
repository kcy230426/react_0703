import React from 'react'
import banner from '../scss/banner.module.css'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from "swiper";

export default function Banner() {   

    return (
                 <div id={banner.content}>
                        <Swiper className={`${banner.container} ${banner.mb5}`}
                  spaceBetween={50}
                  slidesPerView={1}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                >
                  {
                    [['event','이달의 특가할인'],['membershop','멤버혜택',],['promotion','기획전']].map(function(v, i){
                      return(                
                      <SwiperSlide className={`${v[0]} ${banner.swiperwrapper}`} key={`s_${i}`}>
                        <div className="visually-hidden">{v[1]}</div>
                      </SwiperSlide>)

                    })
                  }
              </Swiper>
                 </div>
    )
}
