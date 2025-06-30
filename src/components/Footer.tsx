import styled from 'styled-components';

const MainFooter = styled.footer`
  display: flex;
`;

const Footer = ({}) => {
  return (
    <footer>
      <MainFooter>
        <div>
          <h4>Enlaces rápidos</h4>
          <nav>
            <a href="/">Inicio</a>
            <a href="/">Servicios</a>
            <a href="/">Contacto</a>
          </nav>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.405228531035!2d-99.09367103834153!3d19.394889681800876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fc2e3efc321b%3A0xabf8454acb3a3a99!2sUPIICSA%20%E2%80%93%20Unidad%20Profesional%20Interdisciplinaria%20de%20Ingenier%C3%ADa%20y%20Ciencias%20Sociales%20y%20Administrativas%20IPN!5e0!3m2!1ses!2smx!4v1751315333100!5m2!1ses!2smx"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
        <div>
          <h4>Redes sociales</h4>
          <nav>
            <a href="/">LinkedIn</a>
            <a href="/">GitHub</a>
            <a href="/">YouTube</a>
          </nav>
        </div>
      </MainFooter>
      <p>&copy; 2025 Zaid Alberto Ramírez Hernández. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
