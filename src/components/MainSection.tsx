import styled from 'styled-components';
import mainImage from '../assets/images/main_image.png';
import { Link } from 'react-scroll';

const MainDiv = styled.div`
  & img {
    border-radius: 5rem;
    border: none;
    height: 50vh;
    box-shadow: 0px 0px 3rem 3rem #16072d;
    margin-bottom: 2rem;
  }

  & h2 {
    color: #f4f4f5;
    font-size: 2rem;
  }

  & p {
    color: #a1a1aa;
  }
`;

const MainButton = styled(Link)`
  background: linear-gradient(135deg, #7e22ce 0%, #3b82f6 100%);
  color: #f4f4f5;
  border: none;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const MainSection = ({}) => {
  return (
    <MainDiv id="top">
      <img src={mainImage} alt="Imagen principal" />
      <h2>Automatiza tu empresa con n8n</h2>
      <p>Impulsa tu productividad conectando todas tus herramientas sin escribir una sola línea de código.</p>
      <MainButton to="servicios" smooth={true} duration={500}>Descubre cómo funciona</MainButton>
    </MainDiv>
  );
};

export default MainSection;
