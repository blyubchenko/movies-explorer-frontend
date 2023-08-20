import "./InputForm.css";

function InputForm({
  title,
  type,
  placeholderText,
  classInput,
  classLabel,
  name,
  value,
  onChange,
  error,
  isValid,
  inputLength,
  onDisabled,
  pattern,
}) {
  return (
    <>
      <label htmlFor={type} className={classLabel ? classLabel : "form__label"}>
        {title}
      </label>
      <input
        required
        id={type}
        className={`input ${classInput ? classInput : "form__input"}`}
        type={type}
        name={name}
        placeholder={placeholderText}
        value={value}
        onChange={onChange}
        minLength={inputLength?.[0]}
        maxLength={inputLength?.[1]}
        disabled={onDisabled}
        pattern={pattern}
      />
      <span
        className={`input-error ${!isValid && "input-error_active"}`}
        id={`${name}-error`}
      >
        {error}
      </span>
    </>
  );
}

export default InputForm;
