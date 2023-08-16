import "./ErrorMessage.css";

function ErrorMessage({ isErrorMessage, isError }) {
  return (
    <span className={`error ${isError ? "error_active" : ""}`}>{isErrorMessage}</span>
  );
}

export default ErrorMessage;
