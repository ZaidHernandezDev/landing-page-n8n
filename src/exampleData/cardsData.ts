import automationImg from '../assets/images/automatization.jpg';
import integrationImg from '../assets/images/servicios.jpg';
import trainingImg from '../assets/images/capacitacion.jpg';
import installationImg from '../assets/images/instalacion.png';
import monitoringImg from '../assets/images/monitoreo.png';

const cardsData = [
  {
    title: 'Automatización a medida',
    text: 'Diseñamos flujos personalizados con n8n que se adaptan perfectamente a los procesos de tu empresa, optimizando tiempos y reduciendo errores.',
    img: automationImg,
    alt: 'Icono de automatización',
  },
  {
    title: 'Integración de servicios',
    text: 'Conectamos tus herramientas favoritas (Gmail, Slack, Google Sheets, APIs, CRMs, ERPs) para que trabajen en armonía sin intervención manual.',
    img: integrationImg,
    alt: 'Icono de integración',
  },
  {
    title: 'Capacitación y soporte',
    text: 'Te capacitamos para que puedas dominar n8n desde cero. Además, ofrecemos soporte técnico para mantener tus flujos funcionando sin interrupciones.',
    img: trainingImg,
    alt: 'Icono de capacitación'
  },
  {
    title: 'Instalación en tu infraestructura',
    text: 'Te ayudamos a instalar y configurar n8n en tus propios servidores o en la nube, garantizando seguridad, autonomía y control total.',
    img: installationImg,
    alt: 'Icono de instalación'
  },
  {
    title: 'Monitoreo y mantenimiento',
    text: 'Implementamos monitoreo en tiempo real para detectar fallos y mantener tus automatizaciones funcionando 24/7 sin que tengas que preocuparte.',
    img: monitoringImg,
    alt: "Icono de monitoreo"
  },
];

export default cardsData;
