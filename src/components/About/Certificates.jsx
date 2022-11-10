import React from "react"
import { TbCertificate } from "react-icons/tb"
import certificates from "../../assets/data/certificates"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

export default function Certificates() {

    const myCerts = certificates.map((cert =>

        <SwiperSlide className="about__card cert_card">
                <a href={cert.url} target="_blank" rel="noreferrer noopener " className="cert_image" ><img src={require(`../../assets/images/${cert.image}`)} alt="School logo" /> </a>
                <h4 className="cert_school">{cert.school}</h4>
                <h5 className="cert_title"> {cert.title}</h5>
        </SwiperSlide>
    ))

    return (<>
        <h2>Certificates <TbCertificate className='about__icon' /></h2>

        <Swiper pagination={true} modules={[Pagination]} className="mySwiper"
            spaceBetween={40}
            slidesPerView={2}
            navigation
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
             autoplay= {{
                delay: 2000
            }}>
            {myCerts}
        </Swiper>
    </>)
}