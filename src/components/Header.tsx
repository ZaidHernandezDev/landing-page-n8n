import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <a href="/">
        <img src="/" alt="logoEmpresa" />
        <h1>NombreEmpresa</h1>
      </a>
      <nav>
        <a href="/">Servicios</a>
        <a href="/">Beneficios</a>
        <a href="/">Contacto</a>
      </nav>
      <button type="button">Solicita tu demo</button>
    </HeaderContainer>
  );
};

export default Header;
