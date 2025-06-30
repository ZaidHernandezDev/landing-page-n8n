import SectionTitle from '../styledElements/SectionTitle';
import InputCombo from '../styledElements/InputCombo';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SubmitButton = styled.button`
  background-color: #7e22ce;
  color: #f4f4f5;
  border: 1px solid #7e22ce;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border: 1px solid #f4f4f5;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ContactForm = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Aquí puedes agregar lógica de validación si deseas

    Swal.fire({
      title: '¡Mensaje enviado!',
      text: 'Gracias por contactarnos. Te responderemos pronto.',
      icon: 'success',
      confirmButtonColor: '#7e22ce',
      confirmButtonText: 'Aceptar',
      background: '#1e1b2e',
      color: '#f4f4f5',
    });

    // Opcional: limpiar los campos del formulario
    e.target.reset();
  };

  return (
    <div id="contacto">
      <SectionTitle
        title="¿Tienes dudas? Hablemos"
        subtitle="Déjanos tus datos y te contactaremos en menos de 24 horas."
      />
      <StyledForm onSubmit={handleSubmit}>
        <InputCombo inputLabel="Nombre completo" inputName="name" inputType="text" />
        <InputCombo inputLabel="Correo electrónico" inputName="mail" inputType="email" />
        <InputCombo inputLabel="Mensaje" inputName="message" inputType="textarea" />
        <SubmitButton type="submit">Enviar mensaje</SubmitButton>
      </StyledForm>
    </div>
  );
};

export default ContactForm;
