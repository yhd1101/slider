import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { Card, Button } from 'react-bootstrap';
import SwiperCore, { Navigation } from 'swiper';
import asa from '../src/img/아메리카노 복사본.jpg';
import da from '../src/img/돌체라떼 복사본.jpg';
import tea from '../src/img/자몽티 복사본.jpg';
import fr from "../src/img/에스프레소 복사본.jpg";
import sta from "../src/img/딸기요거트 복사본.jpg";
import logo from "../src/img/logo 복사본.png"
import cold from "./img/돌체콜드브루 복사본.jpg"
import chip from "./img/자바칩 복사본.jpg"
import carm from "./img/카라멜마키아또 복사본.jpg"
import la from "./img/카페라떼 복사본.jpg"

// SwiperCore에서 Navigation 모듈을 사용하도록 설정
SwiperCore.use([Navigation]);

const cardData = [
    { id: 1, title: '카드 1', text: '텍스트 1', image: asa },
    { id: 2, title: '카드 2', text: '텍스트 2', image: da },
    { id: 3, title: '카드 3', text: '텍스트 3', image: tea },
    { id: 4, title: '카드 4', text: '텍스트 4', image: fr },
    { id: 5, title: '카드 5', text: '텍스트 5', image: sta },
    { id: 6, title: 'Card 6', text: 'Text 6', image: logo },
    { id: 7, title: 'Card 7', text: 'Text 7', image: cold },
    { id: 8, title: 'Card 8', text: 'Text 8', image: chip },
    { id: 9, title: 'Card 9', text: 'Text 9', image: carm },
    { id: 10, title: 'Card 10', text: 'Text 10', image: la },
];

function ImageSlider() {
    const swiperRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const swiperParams = {
        spaceBetween: 0,
        slidesPerView: 4, // 한 번에 한 장의 슬라이드만 보이도록 설정
        loop: true, // 무한 루프 설정
        navigation: {
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
        },
    };

    useEffect(() => {
        if (swiperRef.current !== null) {
            swiperRef.current.swiper.slideTo(0);
        }
    }, []);

    const handlePrevButtonClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNextButtonClick = () => {
        if (currentIndex < cardData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div>
            <Swiper {...swiperParams} ref={swiperRef}>
                {cardData.map((card, index) => (
                    <SwiperSlide key={card.id}>
                        <Card style={{ width: '15rem', color: 'white', textAlign: 'center', borderRadius: 0 }}>
                            <Card.Img
                                variant="top"
                                src={card.image}
                                style={{ objectFit: 'cover', height: '300px', width: '100%' }}
                            />
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Button variant="primary" className="prev-btn" onClick={handlePrevButtonClick}>이전</Button>
            <Button variant="primary" className="next-btn" onClick={handleNextButtonClick}>다음</Button>
        </div>
    );
}

export default ImageSlider;
