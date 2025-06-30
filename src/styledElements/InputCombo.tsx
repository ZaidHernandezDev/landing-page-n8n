interface inputProps {
  inputLabel: string;
  inputName: string;
}

const InputCombo = ({ inputLabel, inputName }: inputProps) => {
  return (
    <div>
      <label htmlFor={inputName}>{inputLabel}</label>
      <input type="text" name={inputName} />
    </div>
  );
};

export default InputCombo;
