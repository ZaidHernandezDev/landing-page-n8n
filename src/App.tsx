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

  & > div {
    padding-top: 5rem;
    height: calc(100vh);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  & hr {
    border: none;
    height: 2px;
    background-color: #7e22ce;
  }
`;

const App = () => {
  return (
    <MainContainer>
      <Header />
      <Content>
        <MainSection />
        <hr />
        <Services />
        <hr />
        <ContactForm />
      </Content>
      <Footer />
    </MainContainer>
  );
};

export default App;
