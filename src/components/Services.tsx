import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

import CardTemplate from '../styledElements/CardTemplate';
import SectionTitle from '../styledElements/SectionTitle';

import 'swiper/css';
import 'swiper/css/navigation';

const cardsData = [
  {
    title: 'Automatización a medida',
    text: 'Diseñamos flujos personalizados con n8n que se adaptan perfectamente a los procesos de tu empresa, optimizando tiempos y reduciendo errores.',
  },
  {
    title: 'Integración de servicios',
    text: 'Conectamos tus herramientas favoritas (Gmail, Slack, Google Sheets, APIs, CRMs, ERPs) para que trabajen en armonía sin intervención manual.',
  },
  {
    title: 'Capacitación y soporte',
    text: 'Te capacitamos para que puedas dominar n8n desde cero. Además, ofrecemos soporte técnico para mantener tus flujos funcionando sin interrupciones.',
  },
  {
    title: 'Instalación en tu infraestructura',
    text: 'Te ayudamos a instalar y configurar n8n en tus propios servidores o en la nube, garantizando seguridad, autonomía y control total.',
  },
  {
    title: 'Monitoreo y mantenimiento',
    text: 'Implementamos monitoreo en tiempo real para detectar fallos y mantener tus automatizaciones funcionando 24/7 sin que tengas que preocuparte.',
  },
];

const Services = ({}) => {
  return (
    <div>
      <SectionTitle title="¿Qué ofrecemos?" subtitle="Consultoría especializada en automatización con n8n" />
      <div style={{ padding: '20px', position: 'relative' }}>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cardsData.map((card, index) => (
            <SwiperSlide key={index}>
              <CardTemplate title={card.title} text={card.text} />
            </SwiperSlide>
          ))}
        </Swiper>

        <FaArrowLeft className="swiper-button-prev"></FaArrowLeft>
        <FaArrowRight className="swiper-button-next"></FaArrowRight>
      </div>
    </div>
  );
};

export default Services;
