import styled from 'styled-components';
import { Link } from 'react-scroll';

import logo from '../assets/images/logo.png';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 5%;
  position: fixed;
  height: 5rem;

  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

const LogoContainer = styled(Link)`
  cursor: pointer;
  height: 4rem;
  border-radius: 1rem;
  overflow: hidden;
  object-fit: cover;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  img {
    height: 100%;
  }
`;

const NavLink = styled(Link)`
  margin: 0 1.5rem;
  color: #f4f4f5;
  transition: all 0.3s;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #a1a1aa;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const DemoButton = styled(Link)`
  background-color: #7e22ce;
  color: #f4f4f5;
  border: 1px solid #7e22ce;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #9333ea;
    border: 1px solid #f4f4f5;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer to="top" smooth={true} duration={500}>
        <img src={logo} alt="logoEmpresa" />
      </LogoContainer>
      <nav>
        <NavLink to="servicios" smooth={true} duration={500}>
          Servicios
        </NavLink>
        <NavLink to="contacto" smooth={true} duration={500}>
          Contacto
        </NavLink>
      </nav>
      <DemoButton to="contacto" smooth={true} duration={500}>Solicita tu demo</DemoButton>
    </HeaderContainer>
  );
};

export default Header;
