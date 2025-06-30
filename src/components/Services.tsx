import cardsData from '../exampleData/cardsData';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

import CardTemplate from '../styledElements/CardTemplate';
import SectionTitle from '../styledElements/SectionTitle';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/navigation';

const SwiperContainer = styled.div`
  max-width: 70vw;
  position: relative;
  margin-top: 5rem;
  padding: 0 50px; /* Espacio para las flechas */
`;

const Left = styled(FaArrowLeft)`
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Right = styled(FaArrowRight)`
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`

const Services = ({}) => {
  return (
    <div id="servicios">
      <SectionTitle title="¿Qué ofrecemos?" subtitle="Consultoría especializada en automatización con n8n" />
      <SwiperContainer>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          loop={true}
          slidesPerView={3}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cardsData.map((card, index) => (
            <SwiperSlide key={index}>
              <CardTemplate title={card.title} text={card.text} img={card.img} altText={card.alt} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Left className="swiper-button-prev"></Left>
        <Right className="swiper-button-next"></Right>
      </SwiperContainer>
    </div>
  );
};

export default Services;
