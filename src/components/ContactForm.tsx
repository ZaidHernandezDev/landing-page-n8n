import SectionTitle from '../styledElements/SectionTitle';
import InputCombo from '../styledElements/InputCombo';
const ContactForm = ({}) => {
  return (
    <div>
      <SectionTitle title="¿Tienes dudas? Hablemos" subtitle="Déjanos tus datos y te contactaremos en menos de 24 horas." />
      <form action="">
        <InputCombo inputLabel="Nombre completo" inputName="name" />
        <InputCombo inputLabel="Correo electrónico" inputName="mail" />
        <InputCombo inputLabel="Mensaje" inputName="message" />
        <button type="submit">Enviar mensaje</button>
      </form>
    </div>
  );
};

export default ContactForm;
