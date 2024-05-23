'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import SwiperCore from 'swiper'

import 'swiper/css'

SwiperCore.use([Pagination]);



const WelcomeSlider = () => {
    return ( 
        <div className="welcome__wrapper">
        <main className="welcome__main">
            <section className=" welcome__slider__section">
                <Swiper 
                    modules={Pagination}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ 
                        clickable: true,
                        el: '.swiper-pagination'
                    }}
                    loop={true}
                    speed={500}
                    className=" welcome__slider__section__container welcome___container"
                >

                    <SwiperSlide>
                        <div className=" welcome__slider__section__card">
                            <div className="welcome__slider__section__card__container">
                                <div className="welcome__slider__section__card__image">
                                    <img className="welcome__slider__section__card__img" src="/assets/images/ithub_welcome_banner.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className=" welcome__slider__section__card">
                            <div className="welcome__slider__section__card__container">
                                <div className="welcome__slider__section__card__image">
                                    <img className="welcome__slider__section__card__img" src="/assets/images/ithub_welcome_banner.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className=" welcome__slider__section__card">
                            <div className="welcome__slider__section__card__container">
                                <div className="welcome__slider__section__card__image">
                                    <img className="welcome__slider__section__card__img" src="/assets/images/ithub_welcome_banner.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div class="swiper-pagination"></div>
            </section>
        </main>


    </div>
    );
}
 
export default WelcomeSlider;