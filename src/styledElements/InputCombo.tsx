import styled from 'styled-components';

interface inputProps {
  inputLabel: string;
  inputName: string;
  inputType: 'email' | 'text' | 'textarea';
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledLabel = styled.label`
  color: #a1a1aa;
`;

const StyledInput = styled.input`
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s;
  width: 70vw;

  &:focus {
    outline: none;
    border-color: black;
  }
`;

const StyledTextarea = styled.textarea`
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s;
  background: rgba(255, 255, 255, 0.8);
  width: 70vw;

  &:focus {
    outline: none;
    border-color: black;
  }
`;

const InputCombo = ({ inputLabel, inputName, inputType = 'text' }: inputProps) => {
  return (
    <InputWrapper>
      <StyledLabel htmlFor={inputName}>{inputLabel}</StyledLabel>
      {inputType === 'textarea' ? (
        <StyledTextarea id={inputName} name={inputName} rows={4} required />
      ) : (
        <StyledInput type={inputType} id={inputName} name={inputName} required />
      )}
    </InputWrapper>
  );
};

export default InputCombo;
