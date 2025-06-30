import styled from 'styled-components';

import Header from './components/Header';
import MainSection from './components/MainSection';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  background: linear-gradient(to bottom, #7e22ce, #000000);
`;

const Content = styled.div`
  flex: 1;
`;

const App = () => {
  return (
    <MainContainer>
      <Header />
      <Content>
        <MainSection />
        <Services />
        <ContactForm />
      </Content>
      <Footer />
    </MainContainer>
  );
};

export default App;
