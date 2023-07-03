// const study = (props) => {
//     return(
//         <>
//             <li class={props.cls}><a href={props.link} className={props.cls2}>{props.txt}</a></li>
//         </>
//     )
// }

// export default study

// const Study = (props) => {

// const studydata = {
//     addtitle:"7월의 혜택",
//     add:{
//         href:"//www.google.com",
//         name:"구우글",
//         cls:"gooogle"
//     },
//     gnb:[
//         {href:"//www.naver.com",
//         name:"네이버",
//         cls:"naver"},
//         {href:"//www.daum.net",
//         name:"다음",
//         cls:"daum"},
//         {href:"//www.google.com",
//         name:"구글",
//         cls:"google"}
//     ],

// }
// return(
//     <>
//         <ul>
//             {
//                 studydata.gnb.map(function(v,i){
//                     return(
//                         <li className={studydata.add.href}><a href={studydata.add.cls}>{studydata.add.name}</a></li>
//                     )
//                 })
//             }
//         </ul>
//     </>
// )
// }

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const Study = (props) => {
return(
    <>
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        >
        <SwiperSlide className={props.bg}>{props.go}</SwiperSlide>
        </Swiper>
  </>
)
}

export default Study