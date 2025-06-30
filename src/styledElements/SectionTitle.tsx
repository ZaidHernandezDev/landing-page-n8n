import styled from 'styled-components';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h3 {
    font-size: 2.5rem;
    color: #f4f4f5;
    margin-bottom: 0.750rem;
  }

  & p {
    font-size: 1.5rem;
    color: #a1a1aa;
  }
`;

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <TitleContainer>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </TitleContainer>
  );
};

export default SectionTitle;
